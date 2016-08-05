import React, { Component } from 'react';
import './style.css';

class ChatInput extends Component {
  static defaultProps = {
    ENTER_KEY: 13
  };

  constructor(props) {
    super(props);
    this.state = {
      inputText: ""
    }
  };

  handleKeyDown(event) {
    if(event.keyCode === this.props.ENTER_KEY){
      const val = this.state.inputText.trim();
      if (val){
        this.props.onSave(val);
        this.setState({inputText: ""});
      }
    }
  };

  handleChange(event) {
    this.setState({
      inputText: event.target.value
    });
  }

  render() {
    return (
      <div id="input" className="row">
        <input
          className="u-full-width"
          value={this.state.inputText}
          disabled={this.props.disabled}
          onChange={(event) => this.handleChange(event)}
          onKeyDown={(event) => this.handleKeyDown(event)}
          autoFocus={true}
          />
      </div>
    );
  }
}

module.exports = ChatInput;
