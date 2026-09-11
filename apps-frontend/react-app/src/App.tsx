import { useState } from 'react'
//import heroImg from './assets/hero.png'
//import reactLogo from './assets/react.svg'
//import viteLogo from './assets/vite.svg'
import JTJBlack from '../../../shared/JTJBlack.png'
import LinkedinIcon from '../../../shared/SoMeIcons/LinkedIn_icon.svg'
import GitHubCatWhite from '../../../shared/SoMeIcons/GitHub_Invertocat_White.svg'
import PhoneIcon from '../../../shared/phone-call-svgrepo-com.svg'
import EmailIcon from '../../../shared/email-1-svgrepo-com.svg'
import './App.css'

function App() {
  const [] = useState(0)

  return (
    <>
      <section id = "navbar">
        <div className ="navbar">
          <img src={JTJBlack} className="homeButtonLogo" width="120" height="179" alt="MyWIPLogo" />
        <ul>
          <li>
            <a>GitHub</a>
            <a>Vacations</a>
            <a>Fitness</a>
            <a>Contact info</a>
          </li>
        </ul>
        </div>
      </section>


      <section id="center">
        <div className="hero">
          <img src={JTJBlack} className="base" width="120" height="179" alt="MyWIPLogo" />
        </div>
        <div>
          <h1>Portfolio Website</h1>
        </div>
      </section>
      <section id="spacer"></section>

      <p>Jokes on you</p>
      
      <section id="next-steps">
        
        <div id="social">
          <h2>Connect with me</h2>
          <p>I try not to bite</p>
          <ul>
            <li>
              <a href="https://github.com/JakobTopholt" target="_blank">
                <img
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                  src={GitHubCatWhite}
                  alt="GitHub cat Icon"
                />
                GitHub
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/jakob-topholt-jensen-0a3780231/" target="_blank">
                <img
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                  src={LinkedinIcon}
                  alt="LinkedIn Icon"
                />
                Linkedin
              </a>
            </li>
            <li>
              <a href="tel:+45275340659">
                <img
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                  src={PhoneIcon}
                  alt="LinkedIn Icon"
                />
                +45 27540659
                </a>
            </li>
            <li>
              <a href="mailto:jakob.topholt99@gmail.com">
                <img
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                  src={EmailIcon}
                  alt="LinkedIn Icon"
                />
                jakob.topholt99@gmail.com
                </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
