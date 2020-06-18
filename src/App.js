import React, { Component } from "react";

/*Components*/
//import Button from "./Components/Button";
//import Display from "./Components/Display";
import CardList from "./Components/CardList";
import Form from "./Components/Form";
import TestData from "./Components/TestData";

/*CSS*/
import "./CSS/cards.css";

//function App() {
//const [counter, setCounter] = useState(5);
//"start": "react-scripts start",
//"build": "react-scripts build",
//"test": "react-scripts test",
//"eject": "react-scripts eject"
//const incrementCounter = (inc) => setCounter(counter + inc);

// return (
//   <>
//     <div>Hello React!</div>
//     <Button onClickFunction={incrementCounter} increment={1} />
//     <Button onClickFunction={incrementCounter} increment={2} />
//     <Button onClickFunction={incrementCounter} increment={3} />
//     <Button onClickFunction={incrementCounter} increment={4} />
//     <Display message={counter} />
//   </>
// );
// return <></>;
//}

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     profiles: TestData,
  //   };
  // }
  state = {
    profiles: [],
  };

  addNewProfile = (profileData) => {
    this.setState((prevState) => ({
      profiles: [...prevState.profiles, profileData],
    }));
  };

  render() {
    return (
      <div>
        <div className="header">{this.props.title}</div>
        <Form onSubmit={this.addNewProfile} />
        <CardList profiles={this.state.profiles} />
      </div>
    );
  }
}

export default App;
