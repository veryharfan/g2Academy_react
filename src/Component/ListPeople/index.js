import React, { Component } from 'react'
import PropTypes from 'prop-types'

function Paragraph() {
    return <p>Halo</p>
}

class ListPeople extends Component {
    constructor() {
        super()
        this.state = {
            name: "G2 Academy",
            room: 12,
            is_bootcamp: true,
            session: {
                1: 'intro',
                2: 'content',
                3: 'final'
            }
        }
    }
    
    render() {
        const { people, ...restState } = this.state

        return (
            <People 
              people = { people } 
              myFunction = {this.myFunction} 
              Paragraph = {<Paragraph/>}
              {...restState}
            />
        )
    }
}

function People({
    name, 
    room,
    is_bootcamp, 
    session, 
    Paragraph
}) {

    return (
        <>
            <p>name: {name}</p>
            <p>room: {room}</p>
            <p>is bootcamp: {is_bootcamp ? "iya" : "bukan"}</p>
            <p>session: {session[2]}</p>
            {Paragraph}
        </>
    )
}



People.propTypes = {
    name: PropTypes.oneOf(['G2 Academy', 'Academy']),
    room: PropTypes.number,
    is_bootcamp: PropTypes.bool,
    session: PropTypes.objectOf(
        PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    ),
    Paragraph: PropTypes.element
}

export default ListPeople
