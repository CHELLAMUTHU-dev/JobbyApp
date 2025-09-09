import {Link} from 'react-router-dom'
import {FaStar} from 'react-icons/fa'
import {IoLocationSharp} from 'react-icons/io5'
import {GoBriefcase} from 'react-icons/go'

const JobCard = props => {
  const {jobDetails} = props
  const {
    companyLogoUrl,
    employmentType,
    jobDescription,
    location,
    packagePerAnnum,
    rating,
    title,
    id,
  } = jobDetails

  return (
    <div>
      <Link to={`/jobs/${id}`}>
        <div>
          <img src={companyLogoUrl} alt="job details company logo" />
          <div>
            <h1>{title}</h1>
            <div>
              <FaStar />
              <p>{rating}</p>
            </div>
          </div>
        </div>
        <div>
          <div>
            <IoLocationSharp />
            <p>{location}</p>
          </div>
          <div>
            <GoBriefcase />
            <p>{employmentType}</p>
          </div>
          <h1>{packagePerAnnum}</h1>
        </div>
        <hr />
        <div>
          <h1>Description</h1>
          <p>{jobDescription}</p>
        </div>
      </Link>
    </div>
  )
}

export default JobCard
