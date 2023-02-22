import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
// import { ReactTooltip} from 'react-tooltip';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Skills.scss';

const Skills = () => {
  // const [experiences, setExperiences] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    // const query = '*[_type == "experiences"]';
    const skillsQuery = '*[_type == "skills"]';

    // client.fetch(query).then((data) => {
    //   setExperiences(data);
    // });

    client.fetch(skillsQuery).then((data) => {
      setSkills(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">Skills & <span>Experiences</span></h2>
      
      <p className='p-text app__skills-text' style={{ fontSize: 20, textAlign: 'center'}}>
        Welcome to my skills page! As a web developer, I have honed my abilities to bring ideas to life on the web.
       With a strong foundation in coding and a passion for design, 
       I am able to create user-friendly and aesthetically pleasing websites.
        My expertise lies in HTML, CSS, JavaScript, and various frameworks and libraries such as React, 
       Jquery, Bootstrp and Tailwind. I am constantly learning and adapting to new technologies to stay up to date with
         industry standards and provide the best possible solutions for my clients. 
         I believe that great websites aren't just about good coding, 
         but also about creating a seamless user experience. On this page, you'll find a showcase of 
         my technical abilities and a glimpse into my creative process.
       </p>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
      
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, 'app__skills'),
  'skills',
  'app__bluebg',
);
