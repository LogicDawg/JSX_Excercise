const App = () => {
    return (
        <div>
            <Person name="Derek" age="33" hobbies={['Gaming','Watching Movies','Fixing Cars']} />
            <Person name="TommyJones" age="12" hobbies={['Fishing','Watching Movies','Riding Dirt Bike']} />
            <Person name="Sally" age="17" hobbies={['Dancing','Singing','Instagram']} />

        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))