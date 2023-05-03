const Person = (props) => {
    let res;
    let name = props.name;
    if(props.age > 18){
        res = "Please go Vote!"
    }else{
        res = "You must be 18!"
    }

    if(props.name.length > 8){
        name.slice(0,6)
    }
    return (
        <div>
        <p>Learn some information about this person. Name: {name} and Age is: {props.age}</p>
        <h3>{res}</h3>
        <h2>Hobbies Are:</h2>
        <ul>{props.hobbies.map(h => 
            <li>
                <b>{h}</b>
            </li>
        )}
        </ul>
        </div>
    )
}