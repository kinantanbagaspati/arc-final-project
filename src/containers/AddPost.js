import React from "react";
import { Link } from 'react-router-dom';
import Axios from 'axios';

export default class addPost extends React.Component{
	state = {
        author: "",
		title: "",
        content: "",
        errormsg: "",
        posts: {}
	}

	// Mount User Method
	componentDidMount() {
		this.getPosts()
	}
	
	  //   Get Api Users
	getPosts = async () => {
        Axios.get(`https://arc-final-project-default-rtdb.firebaseio.com/posts/.json`)
        .then(res => {
                console.log(res.data);
                this.setState({posts: res.data});
            }
        )
	}
    handleChange = event => {
        this.setState({[event.target.name]: event.target.value})
    }
    handleTitle = event => {
        this.setState({title: event.target.value})
    }
    handleContent = event => {
        this.setState({content: event.target.value})
    }
	handleSubmit = async () => {
        const newPost = {
            author: this.state.author,
            title: this.state.title,
            content: this.state.content,
            points: 0,
            ratings: {}
        }
        Axios.post(`https://arc-final-project-default-rtdb.firebaseio.com/posts/.json`, newPost)
        .then(res => {
            console.log("berhasil tambah post");
            this.getPosts()
        })
	}
	render(){
		return (
			<div>
                <div>Who are you</div>
                <input type="text" name="author" onChange={this.handleChange}/>
                <div>Title</div>
                <input type="text" name="title" onChange={this.handleTitle}/>
                <div>Post</div>
                <input type="text" name="content" onChange={this.handleContent}/>
                <button type="submit" onClick={this.handleSubmit}>
                    Post    
                </button>
                <div>{this.state.errormsg}</div>
            </div>		
		)
	}
}