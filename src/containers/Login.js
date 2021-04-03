import React, {useState} from "react"
import { useHistory } from 'react-router-dom';
import Axios from 'axios';


const Login = () => {
	const history = useHistory();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    Axios.get(`https://arc-final-project-default-rtdb.firebaseio.com/users/.json`)
    .then(res => {
        const usersFetched = res.data;
        console.log(usersFetched);

        const handleLogin = () => {
            console.log(usersFetched);
            if("admin" in usersFetched){
                console.log("halo");
            }
        }

        return (
            <div>
                <input type="text" name="username" onChange={setUsername}/>
                <input type="text" name="username" onChange={setPassword}/>
                <div className = "login button" onClick = {handleLogin}>
                    Login
                </div>
                <div>
                    {history.location.error}
                </div>
            </div>
        );
    })

}
export default Login;