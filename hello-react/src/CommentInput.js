import React, { Component } from 'react'
import PropTypes from 'prop-types'
class CommentInput extends Component {
    static propTypes = {
        comment: PropTypes.object
    }
    constructor() {
        super();
        this.state = {
            userName: '',
            content: ''
        }
    }
    componentWillMount() {
        this._loadUserName()
    }
    componentDidMount() {
        this.textarea.focus();
    }
    _saveUserName(userName) {
        console.log(userName);
        localStorage.setItem('userName', userName);
    }
    _loadUserName() {
        const userName = localStorage.getItem('userName');
        // console.log(userName);
        if (userName) {
            this.setState({
                userName: userName
            })
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


    handleUserNameBlur(e) {
        console.log(e);
        this._saveUserName(e.target.value);
    }


    handleSubmit() {
        const createdTime = +new Date();
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
                        content,
                        createdTime
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
            <input  value={this.state.userName} onBlur={this.handleUserNameBlur.bind(this)}
            onChange={this.handleUserNameChange.bind(this)}/>
          </div>
        </div>
        <div className='comment-field'>
          <span className='comment-field-name'>评论内容：</span>
          <div className='comment-field-input'>
            <textarea ref={(textarea) => this.textarea = textarea} value={this.state.content}
            onChange={this.handleContentChange.bind(this)}/>
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