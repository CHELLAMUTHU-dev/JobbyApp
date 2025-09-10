const employmentTypesList = [
  {
    label: 'Full Time',
    employmentTypeId: 'FULLTIME',
  },
  {
    label: 'Part Time',
    employmentTypeId: 'PARTTIME',
  },
  {
    label: 'Freelance',
    employmentTypeId: 'FREELANCE',
  },
  {
    label: 'Internship',
    employmentTypeId: 'INTERNSHIP',
  },
]

const salaryRangesList = [
  {
    salaryRangeId: '1000000',
    label: '10 LPA and above',
  },
  {
    salaryRangeId: '2000000',
    label: '20 LPA and above',
  },
  {
    salaryRangeId: '3000000',
    label: '30 LPA and above',
  },
  {
    salaryRangeId: '4000000',
    label: '40 LPA and above',
  },
]

const locationList = [
  {
    locationId: 'Hyderabad',
    label: 'Hyderabad',
  },
  {
    locationId: 'Bangalore',
    label: 'Bangalore',
  },
  {
    locationId: 'Chennai',
    label: 'Chennai',
  },
  {
    locationId: 'Delhi',
    label: 'Delhi',
  },
  {
    locationId: 'Mumbai',
    label: 'Mumbai',
  },
]

const JobFilters = props => {
  const {updateEmploymentType, updateSaleryRange, updateLocation} = props

  const changeEmployeType = event => {
    updateEmploymentType(event.target.id)
  }

  const renderEmploymentTypes = () => (
    <div>
      <h1>Type of Employment</h1>
      <ul>
        {employmentTypesList.map(eachEmployee => (
          <li key={eachEmployee.employmentTypeId}>
            <input
              type="checkbox"
              id={eachEmployee.employmentTypeId}
              onChange={changeEmployeType}
            />
            <label>{eachEmployee.label}</label>
          </li>
        ))}
      </ul>
    </div>
  )

  const changeSaleryRange = event => {
    updateSaleryRange(event.target.value)
  }

  const renderSaleryRange = () => (
    <div>
      <ul>
        {salaryRangesList.map(eachSalery => (
          <li key={eachSalery.salaryRangeId}>
            <input
              type="radio"
              name="salery"
              value={eachSalery.salaryRangeId}
              onChange={changeSaleryRange}
            />
            <label>{eachSalery.label}</label>
          </li>
        ))}
      </ul>
    </div>
  )

  const onChangeLocation = e => {
    updateLocation(e.target.value)
  }

  const renderLocation = () => (
    <div>
      <h1>Location</h1>
      <ul>
        {locationList.map(eachLocation => (
          <li key={eachLocation.locationId}>
            <input
              type="checkbox"
              name="salery"
              value={eachLocation.locationId}
              onChange={onChangeLocation}
            />
            <label>{eachLocation.label}</label>
          </li>
        ))}
      </ul>
    </div>
  )

  return (
    <div>
      {renderEmploymentTypes()}
      <hr />
      <h1>Salary Range</h1>
      {renderSaleryRange()}

      {renderLocation()}
    </div>
  )
}

export default JobFilters
