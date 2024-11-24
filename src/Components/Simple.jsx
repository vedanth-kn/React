import Child from "./Child";

const Simple = (prog) => {
    const {message} = prog
    console.log(prog)
    console.log(message)
    const {name, branch} = prog
    return (
        <div className="container">
            <div className="main">
                <p>{message}</p>
                <Child/>
                <p>{name} is in {branch}</p>
            </div>
        </div>
    )
}

export default Simple;