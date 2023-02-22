import React from 'react';
import { motion } from 'framer-motion';

import { AppWrap } from '../../wrapper';
import { images } from '../../constants';
import './Header.scss';

// const scaleVariants = {
//   whileInView: {
//     scale: [0, 1],
//     opacity: [0, 1],
//     transition: {
//       duration: 1,
//       ease: 'easeInOut',
//     },
//   },
// };

const Header = () => (
  <div className="app__header app__flex">
    <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className="app__header-info"
    >
      <div className="app__header-badge">
        <div className="badge-cmp app__flex">  
          <div>    
              <h1 className='head-text' style={{ fontSize: 30, marginLeft: 20, fontWeight: 700, color: 'white' }}> FULL-STACK <span>DEVELOPER</span></h1>
              <p className='p-text' style={{ fontSize: 17, textAlign: 'center' }}><br/>
                I design and develope websites, Mobile apps, and web apps. 
                I work with Wordpress, MERN-stack, Python and PHP.
                I also build blockchains and Dapps. I'm a prolific web content creator and copy writer and 
                I can help you develop your website strategy. I also handle website SEO to boost traffic.
                I use my graphics design skills to dvelope a unique and effective brand strategies for your business.
              </p>
          </div> 
        </div>       
      </div>
      <div className='app__btn-div'>
        <a href='/#work'><button className='app__btn'>PROJECTS</button></a>
        <a href='/#contact'><button className='app__btn-contact'>CONTACT</button></a>
      </div>
    </motion.div>
    <img src={images.heroimg} alt="profile_bg" />
  </div>
);

export default AppWrap(Header, 'home');
