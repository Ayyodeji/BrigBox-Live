import React from 'react';
import { ReactComponent as IconFacebook } from './assets/icons/facebook.svg';
import { ReactComponent as IconTwitter } from './assets/icons/twitter.svg';
import { ReactComponent as IconGithub } from './assets/icons/github.svg';
import "./App.css";

class App extends React.Component {
  render = () => {
    return (
      <div className="card">
        <div className="header">
          <div className="logo">
            <a href=".">BrigBox</a>
          </div>
          <div className="social">
            <a href="https://facebook.com" title="Facebook" target="_blank" rel="noopener noreferrer">
              <IconFacebook className="icon" />
            </a>
            <a href="https://twitter.com/" title="Twitter" target="_blank" rel="noopener noreferrer">
              <IconTwitter className="icon" />
            </a>
            <a href="https://github.com/ayyodeji" title="GitHub" target="_blank" rel="noopener noreferrer">
              <IconGithub className="icon" />
            </a>
          </div>
        </div>
        <div className="content">
          <div className="title-holder">
            <h1>Coming Soon.</h1>
            <p>We are a multidisciplinary firm that can assist you in employing technology and artificial intelligence to quickly and easily identify solutions to any load of your daily work.
           </p>
          </div>
          <a href="mailto:hr@brigbox.com">
            <div className="cta">Send us an email</div>
          </a>
        </div>
        <div className="footer">
          {/* <span>made by <a className="underlined" href="https://github.com/ayyodeji" target="_blank" rel="noopener noreferrer">ayyodeji</a> using <a className="underlined" href="https://reactjs.org/" title="ReactJS" target="_blank" rel="noopener noreferrer">React</a> | <a className="underlined" href="https://github.com/arkn98/coming-soon" title="GitHub repo" target="_blank" rel="noopener noreferrer">GitHub</a></span> */}
        </div>
      </div>
    );
  }
}

export default App;