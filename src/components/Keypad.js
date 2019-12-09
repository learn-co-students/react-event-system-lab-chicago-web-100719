import React, {Component} from 'react';

class Keypad extends Component {

    handleTyping = () => (console.log('Entering password...'))

    render() {
        return (
            <div>
                <input 
                type="password" 
                onKeyUp={this.handleTyping}/>
            </div>
        )
    }
}

export default Keypad;
