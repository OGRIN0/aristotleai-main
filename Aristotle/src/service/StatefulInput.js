import React from "react";

export default class StatefulInput extends React.PureComponent {
  constructor(props) {
    super();

    this.state = {
      value: props.initialValue,
      editing: false
    };
  }
debugger;
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.input.value !== prevState.value && !prevState.editing) {
      return { value: nextProps.input.value };
    }

    return null;
  }

  handleChange = e => {
    this.setState({
      value: e.target.value,
      editing: true
    });
  };

  handleBlur = e => {
    this.setState({ editing: false });

    if (this.props.input.value !== this.state.value) {
      this.props.input.onChange(this.state.value);
    }

    this.props.input.onBlur(e);
  };

  render() {
    return (
      <input
        {...this.props.input}
        onChange={this.handleChange}
        onBlur={this.handleBlur}
        value={this.state.value}
      />
    );
  }
}
