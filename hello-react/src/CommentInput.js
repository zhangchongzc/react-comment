import React, { Component } from 'react'

class CommentInput extends Component {
    constructor() {
        super();
        this.state = {
            userName: '',
            content: ''
        }
    }
    handleUserNameChange(event) {
        this.setState({
            userName: event.target.value
        })
    }
    handleContentChange(event) {
        this.setState({
            content: event.target.value
        })
    }
    handleSubmit() {
        if (this.props.onSubmit) {
            const {userName, content} = this.state;
            if (!userName) {
                alert("请输入用户名")
            } else {
                if (!content) {
                    alert("请输入评论内容")
                } else {

                    this.props.onSubmit({
                        userName,
                        content
                    })
                }
            }
            ;
        }
        this.setState({
            content: ''
        });
    }
    render() {
        return (
            <div className='comment-input'>
        <div className='comment-field'>
          <span className='comment-field-name'>用户名：</span>
          <div className='comment-field-input'>
            <input value={this.state.userName} onChange={this.handleUserNameChange.bind(this)}/>
          </div>
        </div>
        <div className='comment-field'>
          <span className='comment-field-name'>评论内容：</span>
          <div className='comment-field-input'>
            <textarea value={this.state.content} onChange={this.handleContentChange.bind(this)}/>
          </div>
        </div>
        <div className='comment-field-button'>
          <button onClick={this.handleSubmit.bind(this)}>
            发布
          </button>
        </div>
      </div>
        )
    }
}

export default CommentInput