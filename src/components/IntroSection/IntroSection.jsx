import React from "react";

import "./IntroSection.css.css"
import { ReactComponent as TwitterIcon } from "../../assets/twitter.svg";
import { ReactComponent as LinkedinIcon } from "../../assets/linkedin.svg";
import { ReactComponent as MailIcon } from "../../assets/mail.svg";
import { ReactComponent as GithubIcon } from "../../assets/github.svg";

import pfpImage from './pfpImage.png';


function IntroSection() {
  return (
    <section id="intro">
      <div id="ProfileIntro">
        <div id="ProfilePic">
          <img src={pfpImage} alt="Waishnav Profile Pic" />
        </div>
        <div id="ConnectMe">
          <a class="" href="https://twitter.com/waishnav_deore" target="_blank" rel="noopener noreferrer">
            <TwitterIcon />
          </a>
          <a class="" href="https://www.linkedin.com/in/waishnav-deore/" target="_blank" rel="noopener noreferrer">
            <LinkedinIcon />
          </a>
          <a class="" href="mailto:waishnavdeore@gmail.com" target="_blank" rel="noopener noreferrer">
            <MailIcon />
          </a>
          <a class="" href="https://github.com/Waishnav" target="_blank" rel="noopener noreferrer">
            <GithubIcon />
          </a>
        </div>

      </div>
      <div id="textIntro">
        <div class="greeting-1">
          Hey there!!
        </div>
        <div class="greeting-2">
          I'm Waishnav
        </div>
        <div class="greeting-3">
          A Web-Developer and Designer and Startup Enthusiast
        </div>
        <div class="greeting-4">
          I like to create and build something that is useful to market.
          So I love to code and love to talk about Product Developement, I speak English, Hindi and Marathi. Feel free
          to hit me up...
        </div>
      </div>
    </section>

  )
}
export default IntroSection
