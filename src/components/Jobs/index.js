import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {BsSearch} from 'react-icons/bs'
import JobFilters from '../JobFilters'
import JobCard from '../JobCard'
import Header from '../Header'
import Profile from '../Profile'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inprocess: 'INPROCESS',
}

class Jobs extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    jobDetailsList: {},
    employmentType: '',
    minimumPackage: '',
    search: '',
  }

  componentDidMount() {
    this.getJobDetails()
  }

  updateEmploymentType = type => {
    this.setState(
      prevState => ({
        employmentType: [...prevState.employmentType, type],
      }),
      this.getJobDetails,
    )
  }

  updateSaleryRange = salaery => {
    this.setState({minimumPackage: salaery}, this.getJobDetails)
  }

  convertedData = data => ({
    companyLogoUrl: data.company_logo_url,
    employmentType: data.employment_type,
    id: data.id,
    jobDescription: data.job_description,
    location: data.location,
    packagePerAnnum: data.package_per_annum,
    rating: data.rating,
    title: data.title,
  })

  getJobDetails = async () => {
    const {employmentType, minimumPackage, search} = this.state

    this.setState({apiStatus: apiStatusConstants.inprocess})
    const url = `https://apis.ccbp.in/jobs?employment_type=${employmentType}&minimum_package=${minimumPackage}&search=${search}`
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(url, options)

    if (response.ok) {
      const responseData = await response.json()
      console.log(responseData.jobs)
      const updatedData = responseData.jobs.map(eachJob =>
        this.convertedData(eachJob),
      )
      console.log(updatedData)
      this.setState({
        apiStatus: apiStatusConstants.success,
        jobDetailsList: updatedData,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderSuccessView = () => {
    const {jobDetailsList} = this.state

    return (
      <div>
        <ul>
          {jobDetailsList.map(eachData => (
            <JobCard jobDetails={eachData} key={eachData.id} />
          ))}
        </ul>
      </div>
    )
  }

  renderfailureView = () => (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/failure-img.png"
        alt="failure view"
      />
      <h1>Oops! Something Went Wrong</h1>
      <p>We cannot seem to find the page you are looking for</p>
      <button type="button">Retry</button>
    </div>
  )

  renderLoader = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </div>
  )

  renderJobView = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.inprocess:
        return this.renderLoader()
      case apiStatusConstants.success:
        return this.renderSuccessView()
      case apiStatusConstants.failure:
        return this.renderfailureView()
      default:
        return null
    }
  }

  updateSearchInput = event => {
    this.setState({search: event.target.value})
  }

  enterSearch = event => {
    if (event.key === 'Enter') {
      this.getJobDetails()
    }
  }

  render() {
    return (
      <div>
        <Header />
        <div>
          <div>
            <Profile />
            <hr />
            <JobFilters
              updateEmploymentType={this.updateEmploymentType}
              updateSaleryRange={this.updateSaleryRange}
            />
          </div>
          <div>
            <div>
              <input type="search" onChange={this.updateSearchInput} />
              <button
                type="button"
                data-testid="searchButton"
                onClick={this.onclickSearchButton}
                onKeyDown={this.enterSearch}
              >
                <BsSearch className="search-icon" />
              </button>
            </div>
            {this.renderJobView()}
          </div>
        </div>
      </div>
    )
  }
}

export default Jobs
