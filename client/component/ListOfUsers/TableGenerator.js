import TableRow from './TableRow'
import './TableGenerator.css'

export default function TableGenerator({ listOfUsers }) {
    console.log('List of users', listOfUsers)
    if (Array.isArray(listOfUsers) && listOfUsers.length > 0) {
        console.log(listOfUsers)
        return <section className="list-of-users container-md">

            <h1>All users</h1>
            <p>Users and their age.</p>
            <table className="table table-hover">
                <thead>
                    <tr>
                        {Object.keys(listOfUsers[0]).map((tableHeadProps, index) => {
                            return <th scope="col" key={index}>{tableHeadProps}</th>
                        })}
                    </tr>
                </thead>
                <tbody>
                    {
                        listOfUsers.map((userInfo) => {
                            return <TableRow key={userInfo.username} userInfo={userInfo} />
                        })
                    }
                </tbody>
            </table>

        </section>

    }
    return null
}
