
import React from 'react';
import ChangeColorButton from './ChangeColorButton.js';

class ColoredBlock extends React.Component {
    constructor(props) {
        super(props);
        this.changeColor = this.changeColor.bind(this);
        this.state = {
            color: 'coral'
        };
         
    }

    changeColor() {
         this.setState((prevState, props) => ({
             color: prevState.color === 'coral' ? 'cornflowerblue' : 'coral'
         }));
    }
    render() {
        return (
            <div id="box" style={{height: '200px', width: '200px', backgroundColor: this.state.color}}>
                <ChangeColorButton clickHandler={this.changeColor} 
                currentColor={this.state.color}></ChangeColorButton>
            </div>
        )
    }
}

export default ColoredBlock;