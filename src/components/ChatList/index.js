import React, { Component } from 'react';
import ChatMessage from '../ChatMessage';
import './style.css';

class ChatList extends Component {
  render() {
    const messages = this.props.messages.map(function(message){
      return <ChatMessage message={message} key={message.id}/>;
    }, this);

    return (
      <div className="row">
        <ul>
        {messages}
        </ul>
      </div>
    );
  }
}

module.exports =  ChatList;
