import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Login from "./containers/Login";
import Register from "./containers/Register";
import Start from "./containers/Start";
import Posts from "./containers/Posts";
import MyPosts from "./containers/MyPosts";
import AddPost from "./containers/AddPost";

export default function Routes() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Start />
                </Route>
                <Route exact path="/login">
                    <Login />
                </Route>
                <Route exact path="/register">
                    <Register />
                </Route>
                <Route exact path="/posts">
                    <Posts />
                </Route>
                <Route exact path="/myposts">
                    <MyPosts />
                </Route>
                <Route exact path="/addpost">
                    <AddPost />
                </Route>
            </Switch>
        </Router>
    );
}