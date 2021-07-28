export default function TableRow({ userInfo }) {
    return <tr>
        <td>{userInfo.username}</td>
        <td>{userInfo.age}</td>
    </tr>
}