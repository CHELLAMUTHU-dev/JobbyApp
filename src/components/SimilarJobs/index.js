import {FaStar} from 'react-icons/fa'
import {IoLocationSharp} from 'react-icons/io5'
import {GoBriefcase} from 'react-icons/go'

const SimilarJobs = props => {
  const {similarJob} = props
  const {
    companyLogoUrl,
    employmentType,
    jobDescription,
    location,
    rating,
    title,
  } = similarJob

  return (
    <div>
      <div>
        <img src={companyLogoUrl} alt="similar job company logo" />
        <div>
          <h1>{title}</h1>
          <div>
            <FaStar />
            <p>{rating}</p>
          </div>
        </div>
      </div>
      <h1>Description</h1>
      <p>{jobDescription}</p>
      <div>
        <div>
          <IoLocationSharp />
          <p>{location}</p>
        </div>
        <div>
          <GoBriefcase />
          <p>{employmentType}</p>
        </div>
      </div>
    </div>
  )
}

export default SimilarJobs
