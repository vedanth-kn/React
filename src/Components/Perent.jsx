// import Child from "./Child"
// import { useState } from "react"

// const Perent = () => {
//     const [username, setUsername] = useState("")

//     const changeFunc = () => {
//         setUsername("GMIT");
//     }

//     return (
//         <>
//             <p className="paragraph">{username}</p>
//             <button onClick={() => changeFunc()}>Click Me</button>
//             <Child value={username}/>
//         </>
        
//     )
// }

// export default Perent;

import { useState } from "react"

const Parent = () => {
    const [username, setUsername] = useState("Test")
    const changeUsernme = () => {
        setUsername("Vedanth")
    }
    return (
    <>
        <p>The value is {username}</p>
        <button onClick={() => changeUsernme()}>Click Me</button>
    </>
    )
}

export default Parent