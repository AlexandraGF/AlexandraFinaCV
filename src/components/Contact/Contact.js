import React, { Component } from 'react';
import './Contact.scss';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {clicked: false};
    
        this.handleClick = this.handleClick.bind(this);
      }

      handleClick() {
        this.setState(state => ({
          clicked: !state.clicked
        }))
    };

    render() {
        return (
            <div>
                <div className="contactHeading" onClick={this.handleClick}><div className="contactTitle">Contact Details</div><div className="contactIconImage"> {!this.state.clicked ? "+": "-"}</div></div> 
                    {this.state.clicked ? (
                    <div className="contactBody">
                    <div>58 Cornwall Road</div>
                    <div>London, SE1 9PU</div>
                    <div>Mobile: 07946 749 086</div>
                    <div>Email: alexandra.fina@yahoo.com</div>
                    </div>
                    ) : "" }     
            </div>
        );
    }
}

export default Contact;
