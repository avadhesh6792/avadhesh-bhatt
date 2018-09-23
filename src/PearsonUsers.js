import React, { Component } from "react";
import axios from "axios";
import UserProfile from './UserProfile';

export default class PearsonUsers extends Component {
  constructor(props) {
    super(props);
    this.displayUsers = this.displayUsers.bind(this);
    this.deleteUser = this.deleteUser.bind(this);

    this.state = {
      users: [
        {
          id: 14,
          first_name: "Eve",
          last_name: "Holt",
          avatar:
            "https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg"
        },
        {
          id: 15,
          first_name: "Charles",
          last_name: "Morris",
          avatar:
            "https://s3.amazonaws.com/uifaces/faces/twitter/stephenmoon/128.jpg"
        },
        {
          id: 16,
          first_name: "Tracey",
          last_name: "Ramos",
          avatar:
            "https://s3.amazonaws.com/uifaces/faces/twitter/bigmancho/128.jpg"
        }
      ]
    };
  }

  componentDidMount(){
    axios.get('https://reqres.in/api/users?page=1&per_page=10')
      .then( response =>  {
        let users = [ ...this.state.users, ...response.data.data];
        this.setState({users});
    })
      .catch(function (error) {
        console.log(error);
    });
  }

  displayUsers(){
    let { users } = this.state;
    return (
      <ul className="list container clearfix">
          {
            users.map( (user, index) => <UserProfile key={user.id} index={index} user={user} deleteUser={userId => this.deleteUser(userId)} />)
          }
        </ul>
    );
  }

  deleteUser(userId){
    let { users } = this.state;
    var index = users.findIndex( element => element.id === userId);
    users.splice(index, 1);
    this.setState({ users });
  }

  render() {
    return (
      <div className="pearson-users">
        <h1 className="container heading">Pearson User Management</h1>
        <div className="list-wrapper">
          {this.displayUsers()}
        </div>
      </div>
    );
  }
}
