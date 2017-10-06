import React, { Component } from 'react'
import CommentInput from './CommentInput'
import CommentList from './CommentList'
import { Clock } from './Clock'
import { Header } from './Header'

class CommentApp extends Component {
    constructor() {
        super()
        // console.log("constructor");
        this.state = {
            comments: [],
        // isShowHeader: true
        }
    }
    componentWillMount() {
        this._loadComments();
    }
    _saveComments(comments) {
        console.log(comments.length);
        localStorage.setItem('comments', JSON.stringify(comments));
    }
    _loadComments() {
        let comments = localStorage.getItem('comments');
        console.log("comments:" + comments);
        if (comments) {
            comments = JSON.parse(comments);
            this.setState({
                comments
            })
        }
    }
    handleSubmitComment(comment) {
        console.log(JSON.stringify(comment));
        this.state.comments.push(comment);
        this.setState({
            comments: this.state.comments
        })
        this._saveComments(this.state.comments)
    }
    handleDeleteComment(index) {
        console.log("index:" + index);
        const comments = this.state.comments;
        comments.splice(index, 1);
        console.log("comments:" + JSON.stringify(comments));
        this._saveComments(comments);
        this.setState({
            comments: comments
        })
    }
    // handleShowOrHide() {
    //     this.setState({
    //         isShowHeader: !this.state.isShowHeader
    //     })
    // }
    // componentWillMount() {
    //     console.log("WillMount");
    // }

    // componentDidMount() {
    //     console.log("DidMount");
    // }
    render() {
        // console.log("render1");
        return (
            <div className="wrapper">
        <CommentInput onSubmit={this.handleSubmitComment.bind(this)}/>
        <CommentList comments={this.state.comments} onDeleteComment={this.handleDeleteComment.bind(this)}/>
      </div>
        )
    }
}

export { CommentApp }