const Event = (props) => {
    return (
        <td className={"Event " + props.color}>
            <h5>{props.name}</h5>
            <h6>{props.location}</h6>
        </td>
    )
}

export default Event;