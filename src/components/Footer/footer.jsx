import React from "react";

import "./footer.css"
import { ReactComponent as TwitterIcon } from "../../assets/twitter.svg";
import { ReactComponent as LinkedinIcon } from "../../assets/linkedin.svg";
import { ReactComponent as MailIcon } from "../../assets/mail.svg";
import { ReactComponent as GithubIcon } from "../../assets/github.svg";

function Footer() {

  return (
    <footer>
      <span>
        <a href="https://twitter.com/waishnav_deore" target="_blank" rel="noopener noreferrer">
          <TwitterIcon />
        </a>
        <a href="https://www.linkedin.com/in/waishnav-deore/" target="_blank" rel="noopener noreferrer">
          <LinkedinIcon />
        </a>
        <a href="mailto:waishnavdeore@gmail.com" target="_blank" rel="noopener noreferrer">
          <MailIcon />
        </a>
        <a href="https://github.com/Waishnav" target="_blank" rel="noopener noreferrer">
          <GithubIcon />
        </a>
      </span>
      <span> • Source code is available on Github</span>
      <span>Copyright © 2022 Waishnav</span>
    </footer>
  )

}

export default Footer
