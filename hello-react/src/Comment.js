import React, { Component } from 'react'
class Comment extends Component {
    constructor() {
        super()
        this.state = {
            timeString: ''
        }
    }
    componentWillMount() {
        this._updateTimeString();
        this._timer = setInterval(this._updateTimeString.bind(this), 5000);
    }
    _updateTimeString() {
        // console.log("111");
        const time = this.props.comment.createdTime;
        console.log("time:" + time)
        const duration = (+Date.now() - time) / 1000;
        console.log('duration:' + duration)
        this.setState({
            timeString: duration > 60
                ? `${Math.round(duration / 60)} 分钟前`
                : `${Math.round(Math.max(duration, 1))} 秒前`
        })
    }
    _getProcessedContent(content) {
        return content
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;")
            .replace(/`([\S\s]+?)`/g, '<code>$1</code>')
    }
    componentWillUnmount() {
        clearInterval(this._timer);
    }
    handleDeleteComment() {
        if (this.props.onDeleteComment) {
            this.props.onDeleteComment(this.props.index)
        }
    }
    render() {
        return (
            <div className="comment">
			  <div className="comment-user">
			   <span>{this.props.comment.userName}:</span>
			  </div>
			<p dangerouslySetInnerHTML={{
                __html: this._getProcessedContent(this.props.comment.content)
            }} />
			   <span className='comment-createdtime'>
          {this.state.timeString}
        </span>
          <span className='comment-delete' onClick={this.handleDeleteComment.bind(this)}>
          删除
        </span>
			</div>
        )

    }
}
export default Comment