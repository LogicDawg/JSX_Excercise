const App = () => {
    return (
        <div>
            <Firstcomponent />
            <NamedComponent name="Derek" />
        </div>
    )
}

ReactDOM.render(<App />,document.getElementById("root"))