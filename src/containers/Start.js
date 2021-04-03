import React from "react";
import { Link } from 'react-router-dom';
import Axios from 'axios';

export default class Start extends React.Component{
	state = {
		username: "",
		password: "",
        errormsg: "",
		users: []
	}

	// Mount User Method
	componentDidMount() {
		this.getUser()
	}
	
	  //   Get Api Users
	getUser = async () => {
        Axios.get(`https://arc-final-project-default-rtdb.firebaseio.com/users/.json`)
        .then(res => {
                console.log(res.data);
                this.setState({users: res.data});
            }
        )
	}
    handleUsername = event => {
        this.setState({username: event.target.value})
    }
    handlePassword = event => {
        this.setState({password: event.target.value})
    }
	handleSubmit = async () => {
        console.log(this.state.username);
        console.log(this.state.password);
        var err = false;
        for(var key in this.state.users){
            if(this.state.users[key].username == this.state.username){
                this.setState({errormsg: "Username sudah terpakai"})
                err = true;
            }
        }
        if(!err){
            const newUser = {
                username: this.state.username,
                password: this.state.password,
                admin: false
            }
            Axios.post(`https://arc-final-project-default-rtdb.firebaseio.com/users/.json`, newUser)
            .then(res => {
                console.log("berhasil tambah user");
                this.props.history.push({pathname: "/home", username: this.state.username});
            })
        }
	}
	render(){
		return (
			<div>
                <input type="text" name="username" onChange={this.handleUsername}/>
                <input type="text" name="password" onChange={this.handlePassword}/>
                <Link to="/posts">
                    <button type="submit">
                        Login    
                    </button>
                </Link>
                <div>halo</div>
            </div>		
		)
	}
}