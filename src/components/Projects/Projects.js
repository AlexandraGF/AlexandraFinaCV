import React, { Component } from 'react';
import './Projects.scss';

class Projects extends Component {
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
        const projectsList = [ 
            {id: 1, name: 'Puzzle Game (React)', link: 'https://puzzlegamereact.herokuapp.com'}, 
            {id: 2, name: 'Tic Tac Toe', link: 'https://alexandragf.github.io/ticTacToeJs/'}, 
            {id: 3, name: 'Funny Story', link: 'https://alexandragf.github.io/funnyStory-JavaScript/'}, 
        ]; 

        return (
        <div> 
            <div className="projectHeading" onClick={this.handleClick}>
                <div className="projectTitle">Personal Projects</div>
                <div className="projectIconImage">{!this.state.clicked ? "+" : "-"}</div>
            </div>
            <div className="projectsBody">{this.state.clicked ? (
                <div>
                    {projectsList.map(function(item, i){
                        return <a target="_blank" href={item.link}><div className="listItemProject" key={i}>{item.name}</div></a>
                    })} 
                </div>) : "" }
            </div>
        </div>
        );
    }
}

export default Projects;
