import React, { Component } from 'react';
import './App.css';
import Body from "ui-kit/Organism/Body";
import Space from "ui-kit/Atom/Space";
import Hr from "ui-kit/Atom/Hr";
import Header from 'ui-kit/Organism/Header';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      tempData: "",
      data: [
        {
          id: 1,
          name: "Person1",
          address: "Jakarta"
        },
        {
          id: 2,
          name: "Person2",
          address: "Depok"
        },
        {
          id: 3,
          name: "Person3",
          address: "Bekasi"
        },
        {
          id: 4,
          name: "Person4",
          address: "Tangerang"
        }
      ]
    }
  }

  onClick = value => {
    let word = new RegExp(value, "i")
    let data = this.state.data
    this.setState({tempData: data.filter(x => {
      return word.test(x.name)
    })})
  }

  activeData = (data, tempData) =>{
    return tempData? tempData : data
  }

  render() { 
    const { data, tempData } = this.state
    return ( 
      <div className="App">
        <Header onClick={this.onClick}/>
        <Hr />
        <Space space="3" />
        <Body activeData = {this.activeData(data, tempData)} />
      </div>
     );
  }
}
 
export default App;
