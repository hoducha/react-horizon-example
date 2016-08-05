import React, { Component } from 'react';
import { subscribe } from 'horizon-react';

import ChatList from '../components/ChatList';
import ChatInput from '../components/ChatInput';

const time = new Date().getMilliseconds();
const image = new Image();
image.src = `http://api.adorable.io/avatars/50/${time}.png`;

class Main extends Component {
  static defaultProps = {
    avatarUrl: image.src,
    authorId: time
  };

  constructor(props) {
    super(props);
    this.state = {
      disabled: true,
      messages: []
    };
  }

  componentDidMount(){
    // As soon as this component is mounted, enable the input
    this.setState({
      disabled: false,
    });

    // Initiate the changefeeds
    this.subscribe();
  }

  uuid() {
    var i, random;
    var uuid = '';

    for (i = 0; i < 32; i++) {
      random = Math.random() * 16 | 0;
      if (i === 8 || i === 12 || i === 16 || i === 20) {
        uuid += '-';
      }
      // eslint-disable-next-line
      uuid += (i === 12 ? 4 : (i === 16 ? (random & 3 | 8) : random)).toString(16);
    }
    return uuid;
  }

  save(message) {
    this.props.horizon('react_messages')
      .store({
        id: this.uuid(),
        text: message,
        authorId: this.props.authorId,
        datetime: new Date()
      }).subscribe();
  }

  subscribe() {
    this.props.horizon('react_messages')
      .order("datetime", "descending")
      .limit(8)
      .watch()
      .subscribe(messages => {
          this.setState({ messages: messages })
      })
  }

  render() {
    return (
      <div>
      <ChatList messages={this.state.messages}/>
      <ChatInput
        disabled={this.props.disabled}
        onSave={(message) => this.save(message)}
        />
      </div>
    );
  }
}

export default subscribe()(Main);
