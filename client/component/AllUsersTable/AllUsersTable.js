import TableGenerator from '../TableGenerator/TableGenerator'
import './AllUsersTable.css'
const AllUsersTable = ({ listOfUsers, title, description }) => {
  return (
    <div>
      <section className="all-users-table container">
        <h3 className="row">{title}</h3>
        <p className="row">{description}</p>
        <TableGenerator
          className="row"
          collection={listOfUsers}
        ></TableGenerator>
      </section>
    </div>
  )
}

export default AllUsersTable
