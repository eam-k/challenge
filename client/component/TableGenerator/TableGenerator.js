import TableRow from './TableRow'
import './TableGenerator.css'

export default function TableGenerator({ collection, className }) {
  if (Array.isArray(collection) && collection.length > 0) {
    return (
      <section className={className}>
        <table className="table table-hover">
          <thead>
            <tr>
              {Object.keys(collection[0]).map((tableHeadProps, index) => {
                return (
                  <th scope="col" key={index}>
                    {tableHeadProps}
                  </th>
                )
              })}
            </tr>
          </thead>
          <tbody>
            {collection.map((userInfo, i) => {
              return <TableRow key={i} userInfo={userInfo} />
            })}
          </tbody>
        </table>
      </section>
    )
  }
  return null
}
