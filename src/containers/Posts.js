import React from "react";
import { Link } from 'react-router-dom';
import Axios from 'axios';

class Post extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            rater: "",
            liked: false,
            disliked: true,
            raterkey: ""
        }
    }
    componentDidMount(){
        
    }
    getRater = async () => {
        Axios.get(`https://arc-final-project-default-rtdb.firebaseio.com/posts/${this.props.id}/ratings/.json`).
        then(res => {
            if(this.state.rater in res.data){
                if(res.data[this.state.rater] === 1){
                    this.disliked = false;
                    this.liked = true;
                }
            }else{
                Axios.put(`https://arc-final-project-default-rtdb.firebaseio.com/posts/${this.props.id}/ratings/.json`, {})
            }
        })
    }
    handleRater = event => {
        this.setState({rater: event.target.value})
    }
    handleLike = async () => {
        this.setState({liked: true});
        this.setState({disliked: false});
        const updatedpost = {
            author: this.props.post.author,
            title: this.props.post.title,
            points: this.props.post.points+1,
            content: this.props.post.content
        }
        Axios.put(`https://arc-final-project-default-rtdb.firebaseio.com/posts/${this.props.id}/.json`, updatedpost)
    }
    handleDislike = async () => {
        this.setState({disliked: true});
        this.setState({liked: false});
        const updatedpost = {
            author: this.props.post.author,
            title: this.props.post.title,
            points: this.props.post.points-1,
            content: this.props.post.content
        }
        Axios.put(`https://arc-final-project-default-rtdb.firebaseio.com/posts/${this.props.id}/.json`, updatedpost)
    }
    render(){
        return (
            <div>
                <h1 style={{marginBottom: 0, marginTop:0}}>{this.props.post.title}</h1>
                <p style={{marginBottom: 20, marginTop:0}}>{this.props.post.author}</p>
                <p style={{marginBottom: 0, marginTop:0}}>{this.props.post.content}</p>
                <p style={{marginBottom: 0, marginTop:20}}>{this.props.post.points} Points</p>
                <div>Who are you</div>
                <input type="text" name="rater" onChange={this.handleRater}/>
                <button disabled={this.state.liked} onClick={this.handleLike}>
                    Like 
                </button>
                <button disabled={this.state.disliked} onClick={this.handleDislike}>
                    Dislike
                </button>
            </div>
        );
    }
};

export default class Posts extends React.Component{
	state = {
        author: "",
        posts: []
	}

    componentDidMount(){
        this.getPosts();
    }

	getPosts = async () => {
        Axios.get(`https://arc-final-project-default-rtdb.firebaseio.com/posts/.json`)
        .then(res => {
            console.log(res.data);
            const MyPosts = [];
            for(var key in res.data){
                const toAdd = {
                    id: key,
                    post: res.data[key]
                }
                MyPosts.push(toAdd);
            }
            console.log(MyPosts);
            this.setState({posts: MyPosts})
        })
	}
	render(){
		return (
            <div>
                <div>Test</div>
                <div>
                    {this.state.posts.map((data) => (
                        <Post key={data.id} {...data} idx={0}/>
                    ))}
                </div>
            </div>	
		)
	}
}