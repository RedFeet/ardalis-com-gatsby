import React from 'react'
import './style.css';
import logo from '../img/ardalis-icon-128x128.png'
import facebook from '../img/social/facebook.svg'
import twitter from '../img/social/twitter.svg'
import youtube from '../img/social/youtube.svg'
import github from '../img/social/github.svg'
import linkedin from '../img/social/linkedin.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-black has-text-white-ter">

        <div className="content has-text-centered has-background-black has-text-white-ter">
          <div className="container has-background-black has-text-white-ter">
            <div className="columns">
              <div className="column is-4">
                <form action="https://www.google.com/search" method="get">
                  <input type="hidden" name="q" value="site:ardalis.com" />
                  <input type="text" name="q" alt="search" className="googletextbox" />
                  <input type="submit" value="Search my Site with Google" className="googletextbox" />
                </form>
                <br />
              </div>
              <div className="column is-4">
                <div className="content has-text-centered">
                  <img
                    src={logo}
                    alt="Ardalis"
                    style={{ width: '5em', height: '5em' }}
                  />
                  <p>Copyright © 2021</p><br />
                </div>
              </div>
              <div className="column is-4 social">

                <a title="facebook" href="https://www.facebook.com/StevenAndrewSmith">
                  <img
                    src={facebook}
                    alt="Facebook"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="linkedin" href="https://www.linkedin.com/in/stevenandrewsmith">
                  <img
                    src={linkedin}
                    alt="Linkedin"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="twitter" href="https://twitter.com/ardalis">
                  <img
                    className="fas fa-lg"
                    src={twitter}
                    alt="Twitter"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="youtube" href="https://www.youtube.com/ardalis/">
                  <img
                    src={youtube}
                    alt="YoutTube"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="github" href="https://github.com/ardalis">
                  <img
                    src={github}
                    alt="GitHub"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="mastodon" rel="me" href="https://fosstodon.org/@ardalis">Mastodon
                </a>
              </div>
            </div>
            <div className="columns">
              <div className="column is-12"> <br />
              </div>
            </div>
          </div>
        </div>

      </footer>
    )
  }
}

export default Footer
