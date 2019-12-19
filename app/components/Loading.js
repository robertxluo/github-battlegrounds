import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  content: {
    fontSize: '2rem',
    position: 'absolute',
    left: '0',
    right: '0',
    marginTop: '1.5rem',
    textAlign: 'center'
  }
};

export default class Loading extends React.Component {
  state = {
    content: props.text
  };

  componentDidMount() {
    const { text, speed } = this.props;

    this.interval = window.setInterval(() => {
      this.state.content === text + '...' ? this.setState({ content: text }) : this.setState(({ content }) => ({ content: content + '.' }));
    }, speed);
  }

  componentWillUnmount() {
    window.clearInterval(this.interval);
  }

  render() {
    return <p style={styles.content}>{this.state.content}</p>;
  }
}

Loading.propTypes = {
  text: PropTypes.string.isRequired,
  speed: PropTypes.number.isRequired
};

Loading.defaultProps = {
  text: 'Loading',
  speed: 300
};
