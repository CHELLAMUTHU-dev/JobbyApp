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

const JobFilters = props => {
  const {updateEmploymentType, updateSaleryRange} = props

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
      <h1>Salary Range</h1>
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

  return (
    <div>
      {renderEmploymentTypes()}
      <hr />
      <h1>Salary Range</h1>
      {renderSaleryRange()}
    </div>
  )
}

export default JobFilters
