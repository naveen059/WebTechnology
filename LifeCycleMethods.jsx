import React, { Component } from 'react';

class LifeCycleMethods extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };
    console.log('Constructor: Component Initialized');
  }

  componentDidMount() {
    console.log('Component Mounted');
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.data !== this.state.data) {
      console.log('Data Updated:', this.state.data);
    }
  }

  componentWillUnmount() {
    console.log('Component Unmounted');
  }

  updateData = () => {
    this.setState({ data: 'New Data' });
  };

  render() {
    return (
      <div>
        <h1>Lifecycle Methods</h1>
        <button onClick={this.updateData}>Update Data</button>
      </div>
    );
  }
}

export default LifeCycleMethods;
