import React, { Component } from "react";
import axios from "axios";

/*Utils*/
import ProfileUrl from "../Utils/CardsApp";

class Form extends Component {
  //userNameInput = React.createRef();

  state = {
    userName: "",
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    //console.log(this.userNameInput.current.value);
    //this.setState({ userName: e.target.value });
    const name = this.state.userName;
    const resp = await axios.get(ProfileUrl + name);
    this.props.onSubmit(resp.data);
    this.setState({ userName: "" });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Github Username"
          onChange={(event) => this.setState({ userName: event.target.value })}
          value={this.state.userName}
          required
        />
        <button>Add Card</button>
      </form>
    );
  }
}

export default Form;
