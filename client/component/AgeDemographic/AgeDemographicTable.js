import { useEffect, useState } from 'react'
import TableGenerator from '../TableGenerator/TableGenerator'
import Dropdown from '../Dropdown/Dropdown'
import errorHandler from '../../utils/errorCheck'

import './AgeDemographicTable.css'

const AgeDemographicTable = ({ title }) => {
  const [ageDemographic, setAgeDemographic] = useState([])
  const [allItems, setAllItems] = useState([])
  const [loading, setLoading] = useState(false)
  const [dropdownSelection, setDropdownSelection] = useState('Items')

  function optionHandler(e) {
    const { option } = e.target.dataset
    if (option) {
      setLoading(true)
      setDropdownSelection(option)
      fetch(`http://localhost:3000/users/age/${option}`)
        .then((res) => {
          errorHandler(res, `Can't get the demographics`)
          return res.json()
        })
        .then((res) => {
          if (Array.isArray(res.data)) {
            setAgeDemographic(res.data)
          }
          setLoading(false)
        })
    }
  }

  useEffect(() => {
    fetch('http://localhost:3000/items')
      .then((res) => {
        errorHandler(res, `Can't get the items`)
        return res.json()
      })
      .then((res) => {
        if (Array.isArray(res.data)) {
          setAllItems(res.data)
        }
      })
  }, [])

  return (
    <div>
      <section className="all-users-table container">
        <h3 className="row">{title}</h3>
        <Dropdown
          listOfOptions={allItems}
          title={dropdownSelection}
          clickHandler={optionHandler}
        ></Dropdown>
        {loading ? (
          <div className="h6">Loading more items</div>
        ) : (
          <TableGenerator
            className="row"
            collection={ageDemographic}
          ></TableGenerator>
        )}
      </section>
    </div>
  )
}

export default AgeDemographicTable
