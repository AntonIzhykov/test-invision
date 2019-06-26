import React, { Component } from 'react';
import { Switch } from 'antd';
import { updateUsersRequest } from '../store/users/actions';
import { connect } from 'react-redux';

class ToggleStatus extends Component {

  handleOnChange = () => {
    const { user, toggleActiveStatus } = this.props;
    toggleActiveStatus(user);
  };

  render() {
    return (
      <Switch
        checked={this.props.user.active}
        size="small"
        onChange={this.handleOnChange}
      />
    );
  }
}

const mapDispatchToProps = dispatch => ({
  toggleActiveStatus: user => dispatch(updateUsersRequest(user))
});

export default connect(
  null,
  mapDispatchToProps
)(ToggleStatus);
