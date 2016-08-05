import React, { Component } from 'react';
import './style.css';

class ChatMessage extends Component {
  render() {
    return (
      <li className="message">
        <img height="50px" width="50px" src={`http://api.adorable.io/avatars/50/${this.props.message.authorId}.png`}/>
        <span className="text">
          {this.props.message.text}
        </span>
      </li>
    );
  }
}

module.exports =  ChatMessage;
