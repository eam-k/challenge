import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import AllUsersTable from './component/AllUsersTable/AllUsersTable'
import AgeDemographic from './component/AgeDemographic/AgeDemographicTable'

const App = () => {
  const [listOfUsers, setListOfUsers] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/users')
      .then((res) => {
        if (!res.ok) {
          throw Error(`Can't get users ${res.status}`)
        }
        return res.json()
      })
      .then((data) => {
        setListOfUsers(data)
      })
  }, [])

  return (
    <div>
      <section className="container">
        <AllUsersTable
          listOfUsers={listOfUsers}
          title="All users"
          description="Users and their age"
        ></AllUsersTable>
        <AgeDemographic title="Age Demographic of Users With ___"></AgeDemographic>
      </section>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
