import React from "react";
import { Link } from 'react-router-dom';
import Axios from 'axios';

class Post extends React.Component{
    constructor(props) {
        super(props);
    }
    render(){
        return (
            <div>
                <h1 style={{marginBottom: 0, marginTop:0}}>{this.props.post.title}</h1>
                <p style={{marginBottom: 20, marginTop:0}}>{this.props.post.author}</p>
                <p style={{marginBottom: 0, marginTop:0}}>{this.props.post.content}</p>
                <p style={{marginBottom: 0, marginTop:20}}>{this.props.post.points} Points</p>
            </div>
        );
    }
};

export default class MyPosts extends React.Component{
	state = {
        author: "",
        posts: []
	}

	// Mount User Method
	
	//   Get Api Users
    handleChange = event => {
        this.setState({[event.target.name]: event.target.value})
    }
	handleSubmit = async () => {
        Axios.get(`https://arc-final-project-default-rtdb.firebaseio.com/posts/.json`)
        .then(res => {
            console.log(res.data);
            const MyPosts = [];
            for(var key in res.data){
                const toAdd = {
                    id: key,
                    post: res.data[key]
                }
                if(toAdd.post.author === this.state.author){
                    MyPosts.push(toAdd);
                }
            }
            console.log(MyPosts);
            this.setState({posts: MyPosts})
        })
	}
	render(){
		return (
			<div>
                <div>Who are you</div>
                <input type="text" name="author" onChange={this.handleChange}/>
                <button type="submit" onClick={this.handleSubmit}>
                    Refresh   
                </button>
                <div>
                    {this.state.posts.map((data) => (
                        <Post key={data.id} {...data} idx={0}/>
                    ))}
                </div>
            </div>		
		)
	}
}