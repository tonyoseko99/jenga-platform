import React, { useState } from "react";
import axios from "axios";

function Login(){
    const url = ""
    const [data, setData] = useState({
        username: "",
        email: "",
        password: ""
    });
    const handle = (e) => {
        const newData = {...data};

    }

    return(
        <div className="login-form">
            <form>
                <input id="username" value={data.username} type="text" placeholder="username"></input>
                <input id="email" value={data.email} type="email" placeholder="example@mail.com"></input>
                <input id="password" value={data.password} type="password" placeholder="password"></input>
                <div>
                <button>Signup</button> &nbsp;
                <small>have an account?</small> &nbsp;
                <button>Login</button>
                </div>
            </form>
            
        </div>
    )
}
export default Login;