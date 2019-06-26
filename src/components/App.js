import React, { Component } from 'react';
import { connect } from 'react-redux';
import "antd/dist/antd.css";
import './App.css'
import UserTable from './UserTable';
import QuestionMarkIcon from '../assets/Questionmark.svg'

class App extends Component {
  render() {
    const selectedUsers = this.props.users.filter(user => user.selected).length;
    return (
      <div className='App'>
        <div className='App-header'>
          <span>
            <i className="fas fa-users" />
            Users</span>
         <div>
           <span>{selectedUsers} selected</span>
           <span><img src={QuestionMarkIcon} alt=""/></span>
         </div>
        </div>
        <UserTable />
      </div>
    );
  }
}

const mapStateToProps = store => ({
  users: store.users,
  isLoading: store.isLoading,
  error: store.error
});

export default connect(
  mapStateToProps
)(App);
