export default function TodoItem(props) {
    return (
        <tr className="todo is-completed">
            <td>Give dog a bath</td>
            <td>Complete</td>
            <td className="todo-action">
                <button className="btn todo-btn">Change status</button>
            </td>
        </tr>
    );
}