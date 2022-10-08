import React, { Component } from 'react';
import AmountInputModalFC from './AmountInputModalFC';

class AmountInputModal extends Component {
  state = {
    visible: false,
    onSubmit: () => {},
    options: {},
  };

  open(onSubmit, options) {
    this.setState({ visible: true, onSubmit: onSubmit, options: options });
  }

  render() {
    return (
      this.state.visible && (
        <AmountInputModalFC
          {...this.state}
          options={this.state.options}
          onRequestClose={() => {
            this.setState({ visible: false });
          }}
        />
      )
    );
  }
}

export default AmountInputModal;
