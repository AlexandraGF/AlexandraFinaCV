import React, { Component } from 'react';
import './Experience.scss';

class Experience extends Component {
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
        const experienceList = [ 
            {id: 1, role: 'Junior Developer', company: 'Pottermore', location: 'London', time: 'July 2018 – October 2018',
            subheading: 'Worked in a scrum team to develop and maintain the existing website and applications, as well as developing new products. Left on 11th October due to a flagship product postponement and resulting team restructuring.',
            description1: 'Front-end development (ReactJs and Javascript) and bug fixing using ReactJS. For example: created reusable components, created breakpoints, component testing using Jest, created and reviewed pull requests and assisted with go-lives.',
            description2: 'Regular sprint planning and collaboration with other USA-based sprint teams.',
            description3: 'Liaising with business and graphic designers to understand and deliver on requirements.',
            description4: 'Management of tickets in JIRA.', 
            },  
            {id: 2, role: 'Student', company: 'Makers Bootcamp Web Development Course', location: 'London', time: 'November 2017 – March 2018',
            description1: 'Makers Web Developer Bootcamp is an on-site intensive course which creates junior full-stack software developers. Through a mix of classroom teaching and group projects, the course gave me a strong understanding of a range of languages and practical experience of working in groups to create software.',
            }, 
            {id: 3, role: 'Receptionist / Office Administrator', company: 'Kellan Group', location: 'London', time: 'September 2016 – December 2017',
            description1: 'First contact point for clients, suppliers and candidates – via phone, email and face to ',
            description2: 'Various administrative and ad hoc tasks for senior management, HR and marketing.',
            description3: 'Booking of travel and accommodation for all staff, booking couriers and ordering office supplies.',
            description4: 'Liaising with suppliers – negotiating best prices, problem solving and following up.',
            description5: 'Monthly office/travel finance reconciliation and following up on discrepancies.',
            }, 
            {id: 4, role: 'Sales Assistant / Cashier', company: 'Zara UK', location: 'London', time: 'August 2015 – August 2016',
            description1: 'Provided customer service, cash register reports to management and received delivery of goods.',
            }, 
            {id: 5, role: 'English Tutor, children aged 5-14', company: '', location: 'Bucharest', time: 'July 2013 – June 2015',
            description1: 'My lesson planning and teaching methods proved popular and led to the student-base quadrupling in size – from 5 students to 20.',
            }, 
            {id: 6, role: 'Secretary / Assistant Manager', company: 'Ophir Optics', location: 'Bucharest', time: 'June 2012 – February 2013', 
            description1: 'Various administrative and ad hoc tasks for senior management and HR. ',
            description2: 'Main point of contact for resolving all IT issues with technical support team based in Israel.',
            description3: 'Translation of technical machinery manuals and meetings between English and Romanian. ',
            }, 
        ]; 

        return (
        <div> 
            <div className="experienceHeading" onClick={this.handleClick}>
                <div className="experienceTitle">Work Experience/Education</div>
                <div className="experienceIconImage">{!this.state.clicked ? "+" : "-"}</div>
            </div>
            <div>{this.state.clicked ? (
                    <div className="experienceBody">
                        {experienceList.map(function(item, i){
                            return (
                            <div className="listItemExperience" key={i}> 
                            <div className="listExperienceLine">{item.role}</div>
                            <div className="listExperienceLine">{item.company}</div>
                            <div className="listExperienceLine">{item.location}</div>
                            <div className="listExperienceLine">{item.time}</div>
                            <div className="listExperienceLine">{item.subheading}</div>
                            <div className="listExperienceLine">* {item.description1}</div>
                            {!item.description2 ? null : (<div className="listExperienceLine">* {item.description2}</div>) }
                            {!item.description3 ? null : (<div className="listExperienceLine">* {item.description3}</div>) }
                            {!item.description4 ? null : (<div className="listExperienceLine">* {item.description4}</div>) }
                            {!item.description5 ? null : (<div className="listExperienceLine">* {item.description5}</div>) }
                            </div>
                            );
                        })} 
                    </div>
                
                ) : "" }
            </div>
        </div>
        );
    }
}

export default Experience;
