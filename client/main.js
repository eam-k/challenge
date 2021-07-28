import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import ListGenerator from './component/ListOfUsers/TableGenerator';
// const list = [{ "username": "John", "age": 18 }, { "username": "Paul", "age": 29 }, { "username": "Rita", "age": 12 }, { "username": "Erica", "age": 90 }, { "username": "Tina", "age": 90 }]

const App = () => {
  const [listOfUsers, setListOfUsers] = useState([]);
  useEffect(() => {
    console.log('Hello')
    fetch('http://localhost:3000/users').then(res => {
      console.log(res)
      if (!res.ok) {
        console.log('Can not retrieve users', res.status)
      };
      return res.json()
    }).then(data => {
      console.log(data)
      setListOfUsers(data)
    })
  }, [])

  return <ListGenerator listOfUsers={listOfUsers}></ListGenerator>
}

ReactDOM.render(<App />, document.getElementById('root'))
