import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = { charCount: this.props.maxChars, term: '' };
  }

  onInputChange = e => {
    this.setState({
      charCount: this.props.maxChars - e.target.value.length,
      term: e.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
          onChange={this.onInputChange}
          value={this.state.term}
          type="text" 
          name="message" 
          id="message" 
        />
        <br />
        <strong>Remaining chars: {this.state.charCount}</strong>
      </div>
    );
  }
}

export default TwitterMessage;
