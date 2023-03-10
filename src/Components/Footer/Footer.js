import React from "react";
import "./Footer.css";
import FooterLogo from "./FooterLogo/FooterLogo";

export default function Footer() {
  return (
    <div className="footer_container">
      <div className="footer_header">
        <div className="footer_header_left">Get In Touch With Us:</div>
        <div className="footer_header_right">
          <FooterLogo logo="images/linkedin.gif" altImage="linkedinLogo" />
          <FooterLogo logo="images/gmail.gif" altImage="gmailLogo" />
          <FooterLogo logo="images/youtube.gif" altImage="youtubeLogo" />
        </div>
      </div>
      <h1> © 2023 Copyright: Codingmaster.com</h1>
    </div>
  );
}
