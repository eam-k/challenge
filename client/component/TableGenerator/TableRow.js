export default function TableRow({ userInfo }) {
  return (
    <tr>
      {Object.keys(userInfo).map((prop) => {
        return <td key={prop}>{userInfo[prop]}</td>
      })}
    </tr>
  )
}
