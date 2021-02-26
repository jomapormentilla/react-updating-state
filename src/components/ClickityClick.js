// Code ClickityClick Component Here
import React from 'react'

class ClickityClick extends React.Component {
    state = {
        hasBeenClicked: false
    }

    handleClick = e => {
        // this.setState({ hasBeenClicked: !this.state.hasBeenClicked })
        this.setState(prevState => {
            return { hasBeenClicked: !prevState.hasBeenClicked }
        })
    }

    render(){
        return(
            <div>
                <p>I have {this.state.hasBeenClicked ? null : 'not'} been clicked!</p>
                <button onClick={this.handleClick}>Click me!</button>
            </div>
        )
    }
}

export default ClickityClick