import React from 'react'
import "./style.css"

class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            counter: 10
        }
    }

    onSubstract = () => {
        this.setState(state => ({counter : state.counter - 1}))
    }

    onAdd = () => {
        this.setState(state => ({counter : state.counter + 1}))
    }

    render() {
        const { counter } = this.state
        return (
            <>
                <div className="flex">
                    <button onClick={this.onSubstract}>-</button>
                    <button onClick={this.onAdd}>+</button>
                </div>
                <p>{counter}</p>
            </>
        )
    }
}

export default Counter