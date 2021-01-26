import React, { Component } from 'react';
import PropTypes from 'prop-types'

class InputName extends Component {
    render(){
        return (
            <div>
                <ListPeople />
            </div>
        )
    }
}

class ListPeople extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            name: "G2Academy",
            people: [
                {
                    id: 1,
                    name: 'Obi Wan', 
                    status: 'Jedi'
                },
                {
                    id: 2,
                    name: 'Luke Skywalker',
                    status: 'Padawan'
                }, 
                {
                    id: 3, 
                    name: "Qui Gon",
                    status: 'Jedi Master'
                }
            ]
        }     
    }

    myFunction = () => {
        console.log(this.state.name)
    }

    addPerson = (e) => {
        e.preventDefault()
        let newPeople = [
            ...this.state.people,
            {
                id: this.state.people.length + 1,
                name: e.target.inputPerson.value,
                status: "Jedi"
            }
        ]

        this.setState({people: newPeople})
        e.target.inputPerson.value = ""
    }
    
    render() { 
        const { people } = this.state
        return ( 
            <>
                <form name="form" onSubmit={this.addPerson}>
                    <input className="inputJedi" 
                    type="text" 
                    name="inputPerson"
                    placeholder="input nama jedi baru"/>
                    <button type="submit">Add Person</button>
                </form>
                <People people={people} myFunction={this.myFunction} />
            </>
         );
    }
}

function People({people, myFunction}) {
    const onClick = name => {
        console.log(name)
        myFunction()
    }

    return (
        <table id="table">
            <thead>
                <tr>
                    <td>Id</td>
                    <td>Name</td>
                    <td>Status</td>
                </tr>
            </thead>
            <tbody>
                {people.map(x => (
                    <tr key={x.id} onClick={() => onClick(x.name)}>
                        <th>{x.id}</th>
                        <th>{x.name}</th>
                        <th>{x.status}</th>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

 
export default InputName;

People.propTypes = {
    people: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            name: PropTypes.string,
            status: PropTypes.string
        })
    ),
    myFunction: PropTypes.func
}