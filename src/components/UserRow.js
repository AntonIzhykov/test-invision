import React, { Component } from 'react';
import ToggleStatus from './ToggleStatus';
import { Checkbox } from 'antd';
import { selectUser } from '../store/users/actions';
import { connect } from 'react-redux';

class UserRow extends Component {
  handleSelect = () => {
    this.props.selectUser(this.props.user.id);
  };

  render() {
    const { type, name, email, phone, selected } = this.props.user;
    return (
      <div className='user-row'>
        <Checkbox
          checked={selected}
          onChange={this.handleSelect}
        />
        <span className={type.toLowerCase()}>{type.slice(0, 2).toUpperCase()}</span>
        <span>{name}</span>
        <span>{email}</span>
        <span>{phone}</span>
        <ToggleStatus user={this.props.user} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  selectUser: userId => dispatch(selectUser(userId))
});

export default connect(
  null,
  mapDispatchToProps
)(UserRow);
