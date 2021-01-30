import React, { Component } from 'react';
import AppStyle from './App.module.css';
import Body from "ui-kit/Organism/Body";
import Space from "ui-kit/Atom/Space";
import Hr from "ui-kit/Atom/Hr";
import Header from 'ui-kit/Organism/Header';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      tempData: "",
      data: [], 
      page: 1, 
      previous: null,
      next: null,
      isLoading: true
    }
    this.loadData = this.loadData.bind(this)
    this.onClickFilter = this.onClickFilter.bind(this)
    this.onClickNext = this.onClickNext.bind(this)
    this.onClickPrev = this.onClickPrev.bind(this)
  }

  dataProp = (name, height, mass, gender, eye_color) => ({name, height, mass, gender, eye_color})
  convertData = d => {
    let newData = []
    d.forEach(e => {
      newData.push(this.dataProp(e.name, e.height, e.mass, e.gender, e.eye_color))
    })
    return newData
  }

  loadData(url) {
    fetch(url)
    .then(res => res.json())
    .then(res => this.setState({
      data: this.convertData(res.results), 
      previous: res.previous,
      next: res.next, 
      isLoading: false
    }))
  }

  onClickFilter = value => {
    let word = new RegExp(value, "i")
    let data = this.state.data
    this.setState({tempData: data.filter(x => {
      return word.test(x.name)
    })})
  }

  activeData = (data, tempData) =>{
    return tempData? tempData : data
  }

  componentDidMount() {
    this.loadData('https://swapi.dev/api/people')
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.page - prevState.page > 0){
      this.loadData(prevState.next)
    } else if (this.state.page - prevState.page < 0){
      this.loadData(prevState.previous)
    }
  }
  
  onClickNext = () => {
    if (!this.state.next){
      return
    }
    this.setState({ page : this.state.page + 1})
  }

  onClickPrev = () => {
    if (!this.state.previous){
      return
    }
    this.setState({ page : this.state.page - 1})
  }

  render() { 
    const { data, tempData, isLoading, page} = this.state
    
    if(isLoading) return <h1>Data is loading...</h1>

    // const dataHead = Object.keys(data[0])
    const dataHead = ["No", "name", "height", "mass", "gender", "eye_color"]
    return ( 
      <div className={AppStyle.App}>
        <Header onClick={this.onClickFilter}/>
        <Hr />
        <Space space="3" />
        <Body 
          activeData = {this.activeData(data, tempData)} 
          dataHead = {dataHead}
          onClickNext = {this.onClickNext}
          onClickPrev = {this.onClickPrev}
          page = {page}
          numPage = {9}
        />
      </div>
     );
  }
}
 
export default App;
