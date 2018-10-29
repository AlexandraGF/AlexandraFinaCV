import React, { Component } from 'react';
import './FullTimeStudies.scss';

class FullTimeStudies extends Component {
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
        const studiesList = [
            {id: 1, school: 'Romanian-American University, Bucharest', degree: 'Master’s in Strategic Business Management', time: 'October 2011 – June 2013', grade: 'First Class Honours, ranked 3rd out of 41 graduates'},
            {id: 2, school: 'Romanian-American University, Bucharest', degree: 'Bachelor’s in Management', time: 'October 2008 – June 2011', grade: 'First Class Honours, ranked 5th out of 181 graduates'},
            {id: 3, school: 'Gheorghe Lazar National College, Bucharest', degree: 'Diploma - Mathematics and Computer Science (A’ level equivalent)', time: 'September 2004 – June 2008', grade: '86.5%'}
        ];

        return (
        <div>
            <div className="studiesHeading" onClick={this.handleClick}>
                <div className="studiesTitle">Full Time Studies</div>
                <div className="studiesIconImage">{!this.state.clicked ? "+" : "-"}</div>
            </div>
            <div className="studiesBody">{this.state.clicked ? (<div>{studiesList.map(function(item, i){
                return (
                <div className="listItemStudies">
                <div className="listStudiesLine">{item.school}</div>
                <div className="listStudiesLine">{item.degree}</div>
                <div className="listStudiesLine">{item.time}</div>
                <div className="listStudiesLine">Grade: {item.grade}</div>
                </div>
                );
                })}
                </div>
                ) : ""} 
            </div>
        </div>
        );
    }
}

export default FullTimeStudies;
