import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  container: {
    position: 'relative',
    display: 'flex'
  },
  tooltip: {
    boxSizing: 'border-box',
    position: 'absolute',
    width: '10rem',
    bottom: '100%',
    left: '50%',
    marginLeft: '-5rem',
    borderRadius: '3px',
    backgroundColor: 'hsla(0, 0%, 20%, 0.9)',
    padding: '.5rem',
    marginBottom: '.5rem',
    color: '#fff',
    textAlign: 'center',
    fontSize: '.875rem'
  }
};

export default class Tooltip extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hovering: false
    };

    this.mouseOver = this.mouseOver.bind(this);
    this.mouseOut = this.mouseOut.bind(this);
  }

  mouseOver() {
    this.setState({
      hovering: true
    });
  }

  mouseOut() {
    this.setState({
      hovering: false
    });
  }
  render() {
    const { text, children } = this.props;
    const { hovering } = this.state;

    return (
      <div onMouseOver={this.mouseOver} onMouseOut={this.mouseOut} styles={styles.container}>
        {hovering === true && <div style={styles.tooltip}>{text}</div>}
        {children}
      </div>
    );
  }
}

Tooltip.propTypes = {
  text: PropTypes.string.isRequired
};
