import React, { Component } from 'react';
import plusImage from '../../plus.png';
import minusImage from '../../minus.png';
import './AboutMe.scss';

class AboutMe extends Component {
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
        const statement = "Junior Full-Stack Software Developer available immediately; I worked as a Junior Developer until October 2018. Completed the Makers Bootcamp in Web Development in March 2018 and with a first-class Master’s in Strategic Business Management, keen to solve real-world problems through software – with excellent communication, analytical and creative skills. I have a good working understanding of Javascript and its framework ReactJs, Ruby; testing frameworks (including Jest, RSpec and Jasmine) and practical experience of applying them in team software development projects.";
        return (
        <div>
            <div className="statementHeading" onClick={this.handleClick}>
                <div className="statementTitle">Personal Statement</div><div className="statementIconImage"> {!this.state.clicked ? (<img src={plusImage} />) : (<img src={minusImage} />)}</div></div>
                    {this.state.clicked ? (<div className="statementBody">{statement}</div>) : "" } 
        </div>
        );
    }
}

export default AboutMe;