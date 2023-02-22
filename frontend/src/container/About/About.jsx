import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import './About.scss';
import { urlFor, client } from '../../client';

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => setAbouts(data))
  }, []);

  return (
    <>
      <h2 className="head-text ">I Make<span>Good Designs</span> 
      <br />To Give You  <span>Good Business</span></h2>

      <p className='p-text app__about' style={{ fontSize: 20, textAlign: 'center' }}>
        Welcome to my website. My name is Akan Patrick.  I am a skilled and passionate web developer with
        years of experience in creating websites and applications
        that are both functional and visually appealing. With a strong background in HTML, CSS, 
        I am also skilled in 
        various programming languages like JavaScript, PHP, Python, and Solodity. 
        I also work with framworks and libraries like, React, Node, Express, Bootstrap, Jquery, and also databases like, MongoDB, MySQL,
        and Tailwind CSS. 
        I have a deep understanding of how to bring
        complex ideas to life on the web. From custom front-end designs to robust
        back-end systems, I have the skills and expertise to create website solutions
        that meet your unique needs and exceed your expectations. As a web developer, 
        I consider content writing as a top priority. I create contents to help boost website strategies. 
        With my graphics design skills, I create  websites that dont't only have beautiful and stunning designs,
        they also have excellent user exprience that boosts conversion.
        I have develope quite a number of projects with my knowledge and 
        I urge you to browse my portfolio to see some of my past works and don't hesitate to reach out
        if you have any questions or if you're interested in working together.
       </p>
    <div className='app__container-abt'>
    <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 5, color: 'white', marginLeft: 45 }}>{about.title}</h2>
            <p className="p-text" style={{ marginTop: 10, marginLeft: 45  }}>{about.description}</p>
          
          </motion.div>
        ))}
      </div>
    </div>
     
    <a href='/#contact'><button className='app__btn'>Let's Start</button></a>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  'app__bluebg',
);
