import React from 'react'
import Input from 'ui-kit/Atom/Input'
import Button from 'ui-kit/Atom/Button'

class SearchForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = { 
      value: "",
      onClick: props.onClick
    }
  }

  onChange = e => {
      this.setState({value : e.target.value})
  }

  onSubmit = e => {
      e.preventDefault()
      this.state.onClick(this.state.value)
  }

  render() { 
    const {value} = this.state
    return ( 
        <form onSubmit={this.onSubmit} className="search">
            <Input 
              value={value}
              onChange={this.onChange}
              placeholder="Masukkan Nama Anda"
            />
            <Button 
              typeStyle="primary"
              type="submit" 
              children="Submit" 
            />
        </form>
    )
  }
}
 
export default SearchForm
