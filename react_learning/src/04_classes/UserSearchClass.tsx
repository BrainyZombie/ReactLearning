import { Component } from "react";

interface User {
  name: string;
  age: number;
}

interface UserSearchProps {
  users: User[];
}

interface UserState {
  name: string;
  user: User | undefined;
}

class UserSearchClass extends Component<UserSearchProps> {
  state: UserState = {
    name: "",
    user: undefined,
  };
  onClick = () => {
    const foundUser = this.props.users.find(
      (user) => user.name === this.state.name
    );
    this.setState({ user: foundUser });
  };
  render() {
    const { name, user } = this.state;
    return (
      <div>
        User Search Class
        <input
          value={name}
          onChange={(e) => this.setState({ name: e.target.value })}
        />
        <button onClick={this.onClick}>Search</button>
        {user ? `${user.age} ${user.name}` : "No Users found"}
      </div>
    );
  }
}

export default UserSearchClass;
