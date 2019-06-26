import React, { Component } from 'react';
import { getUsersRequest, selectUser, toggleSelectedUsers } from '../store/users/actions';
import { connect } from 'react-redux';
import UserRow from './UserRow';
import "antd/dist/antd.css";
import { Checkbox } from 'antd';

class UserTable extends Component {

  componentDidMount() {
    this.props.getUsers()
  }

  handleSelectAll = (event) => {
    this.props.toggleSelectedUsers(event.target.checked);
  };

  render() {
    return (
      <div className='user-table'>
        <div className='table-header'>
          <Checkbox onChange={this.handleSelectAll} />
          <span>Type</span>
          <span>Name</span>
          <span>Email</span>
          <span>Telephone</span>
          <span>Status</span>
        </div>
        {this.props.users.map(user => <UserRow key={user.id} user={user} />)}
      </div>
    );
  }
}

const mapStateToProps = store => ({
  users: store.users,
  isLoading: store.isLoading,
  error: store.error
});

const mapDispatchToProps = dispatch => ({
  getUsers: () => dispatch(getUsersRequest()),
  selectUser: userId => dispatch(selectUser(userId)),
  toggleSelectedUsers: checked => dispatch(toggleSelectedUsers(checked))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserTable);
