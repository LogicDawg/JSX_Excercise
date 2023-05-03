const Tweet = (props) => {
    return (
        <div class="tweet">
            <p><b>Username: </b>{props.username}</p>
            <p><b>Name: </b>{props.name}</p>
            <p><b>Date: </b>{props.date}</p>
            <p>{props.msg}</p>
        </div>
    )
}