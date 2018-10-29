import React, { Component } from 'react';
import './Skills.scss';

class Skills extends Component {
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
        const codingSkills = [ 
            {id: 1, name: 'ReactJs'},  
            {id: 2, name: 'Nodejs'}, 
            {id: 3, name: 'Javascript'}, 
            {id: 4, name: 'Ruby'}, 
            {id: 5, name: 'Jasmine'}, 
            {id: 6, name: 'RSpec'}, 
            {id: 7, name: 'Jest testing framework'}, 
            {id: 8, name: 'Git/GitHub'}, 
            {id: 9, name: 'TDD'}, 
            {id: 10, name: 'Pair Programming'}, 
            {id: 11, name: 'HTML'}, 
            {id: 12, name: 'CSS'},
            {id: 13, name: 'Heroku'},
        ]; 
        const spokenLanguages = [
            {id: 1, name: 'English', level: 'Excellent working proficiency'}, 
            {id: 2, name: 'Romanian', level: 'Native speaker'}, 
            {id: 3, name: 'Spanish', level: 'Conversational proficiency'},
        ];
        return (
        <div> 
            <div className="skillsHeading" onClick={this.handleClick}>
                <div className="skillsTitle">Skills</div>
                <div className="skillsIconImage">{!this.state.clicked ? "+" : "-"}</div>
            </div>
            <div>{this.state.clicked ? (
                <div>
                    <div className="skillsBody">
                        {codingSkills.map(function(item, i){
                            return <div className="listItemSkills" key={i}>* {item.name}</div>
                        })}
                    </div> 
                    <div className="languageBody">Spoken Languages
                        {spokenLanguages.map(function(item, i){
                    return <div className="listItemLanguage" key={i}>* {item.name}: {item.level}</div>
                    })}
                    </div>
                </div>) : "" }
            </div>
        </div>
        );
    }
}

export default Skills;
