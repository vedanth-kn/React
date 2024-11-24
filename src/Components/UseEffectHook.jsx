import { useEffect, useState } from "react";

const UseEffectHook = () => {
    const [username, setUserName] = useState("")
    useEffect(() => {
        console.log("This is UseEffecHook")
    }, [username])
    return (
        <>
            <input type="text" value={username} onChange={(e) => setUserName(e.target.value)}/>
        </>
    )
}

export default UseEffectHook