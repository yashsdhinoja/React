import {useState} from "react";
function LoginForm() {

    const [username, setUsername]=useState("");
    const [password, setPassword]=useState();
    const [message, setMessage]=useState();

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(username === "admin" && password === "123") {
            setMessage("Log Successful");
        }
        else
        {
            setMessage("Invalid Username or Password");
        }
    }
    return (
        <>
            <div>
                <h1>Login Form</h1>
                <form onSubmit={handleSubmit}>
                    <label>UserName</label>
                    <input type="text" placeholder="Enter Username" onChange={(e)=>{setUsername(e.target.value)}} /><br/>
                    <label>Password</label>
                    <input type="password" placeholder="Enter Password" onChange={(e)=>{setPassword(e.target.value)}} /><br/>
                    <button type="submit">Login</button><br/><br/>
                    {message}
                </form>
            </div>
        </>
    );
}

export default LoginForm