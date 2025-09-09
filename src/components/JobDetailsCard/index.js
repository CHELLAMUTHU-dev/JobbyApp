import {FaStar} from 'react-icons/fa'
import {IoLocationSharp} from 'react-icons/io5'
import {GoBriefcase} from 'react-icons/go'
import {BiLinkExternal} from 'react-icons/bi'

const JobDetailsCard = props => {
  const {jobDetails} = props
  if (jobDetails.length >= 1) {
    const {
      companyLogoUrl,
      companyWebsiteUrl,
      employmentType,
      jobDescription,
      skills,
      lifeAtCompany,
      location,
      packagePerAnnum,
      rating,
      title,
    } = jobDetails[0]
    console.log(skills)
    return (
      <div>
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
        </div>
        <hr />
        <div>
          <h1>Description</h1>
          <a href={companyWebsiteUrl}>
            Visit <BiLinkExternal />
          </a>
        </div>
        <p>{jobDescription}</p>
        <div>
          <h1>Skills</h1>
          <ul>
            {skills.map(eachSkill => (
              <li key={eachSkill.name}>
                <img src={eachSkill.imageUrl} alt={eachSkill.name} />
                <p>{eachSkill.name}</p>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div>
            <h1>Life at Company</h1>
            <p>{lifeAtCompany.description}</p>
          </div>
          <img src={lifeAtCompany.imageUrl} alt="life at company" />
        </div>
      </div>
    )
  }
  return null
}

export default JobDetailsCard
