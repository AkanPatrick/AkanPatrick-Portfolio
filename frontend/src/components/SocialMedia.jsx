import React from 'react';
import { BsTwitter, BsInstagram, BsGithub, BsLinkedin } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div>
    <a href='https://twitter.com/AkanPatrick1'><BsTwitter /></a>
    </div>
    <div>
      <a href='https://www.facebook.com/akan.patrick'><FaFacebookF /></a>
    </div>
    <div>
     <a href='https://www.instagram.com/akanpatrickofficial'><BsInstagram /></a>
    </div>
    <div>
    <a href='https://github.com/AkanPatrick'> <BsGithub /></a>
     
    </div>
    <div>
      <a href='https://www.linkedin.com/in/akan-patrick-114b0669/'><BsLinkedin /></a>    
    </div>
  </div>
);

export default SocialMedia;
