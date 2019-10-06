import React from 'react';
import PropTypes from 'prop-types';
import withHover from './withHover';

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

function Tooltip({ text, children, hovering }) {
  return (
    <div style={styles.container}>
      {hovering === true && <div style={styles.tooltip}>{text}</div>}
      {children}
    </div>
  );
}

Tooltip.propTypes = {
  text: PropTypes.string.isRequired,
  hovering: PropTypes.bool.isRequired
};

export default withHover(Tooltip);
