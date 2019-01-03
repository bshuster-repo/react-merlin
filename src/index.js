import React from 'react';
import PropTypes from 'prop-types';

class Merlin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: this.props.initialStep,
    };
  }

  render() {
    return this.props.children({
      index: this.state.current,
      setIndex: current => {
        this.setState(() => ({
          current,
        }));
      },
    });
  }
}

Merlin.propTypes = {
  children: PropTypes.func.isRequired,
  initialStep: PropTypes.number,
};

Merlin.defaultProps = {
  initialStep: 0,
};

export default Merlin;
