import React, { Component } from 'react';
import './Title.scss';

class Title extends Component {
  render() {
      const linkedIn = "https://www.linkedin.com/in/alexandra-fina-0418aab2/";
      const gitHub = "https://github.com/AlexandraGF";
    return (
      <div className="title">
        <div>Alexandra Fina</div>
        <div className="anchors">
            <a href={linkedIn} target="_blank"><div className="linkedInAnchor">LinkedIn</div></a>
            <a href={gitHub} target="_blank"><div className="gitHubAnchor">GitHub</div></a>
        </div>
      </div>
    );
  }
}

export default Title;
