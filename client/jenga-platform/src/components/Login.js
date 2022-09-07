import React, { useState } from "react";

function Login({token, setToken}){
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    // function to handle user
    const userHandler = () => {
        setError("")
        setPassword("")
        setUsername("")

        axios({
            url: "",
            method: "POST",
            data: {
                username: username,
                password: password
            },
        }).then(response => {
            console.log(response.data.token);
            setToken(response.data.token);
            localStorage.setItem("userToken", response.data.token);
        }).catch((err) => {
            console.log(err.response)
            setError(err.response.data);
        });
    }
    return(
        <>

        </>
    )
}
export default Login