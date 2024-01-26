import React from 'react';

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Bootstrap from '../assets/bootstrap.png';
import Tailwind from '../assets/tailwind.png';

import Node from '../assets/node.png';
import Mongo from '../assets/mongo.png';
import SQL from '../assets/sql.png';
import Express from '../assets/express.png';

import C from '../assets/C.png';
import CPlusPlus from '../assets/C++.png';
import Java from '../assets/java.png';
import Python from '../assets/python.png';

import Git from '../assets/git.png';
import GitHub from '../assets/github.png';
import AWS from '../assets/aws.png';
import Docker from '../assets/docker.png';

const Skills = () => {
  return (
    <div id='skills' name='skills' className='w-full h-auto bg-[#0a192f] text-gray-300'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
        Skills
          </p>
          </div>
          </div>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center'>

        {/* Frontend Card */}
        <div className='rounded-lg overflow-hidden shadow-md mb-8'>
          <p className='text-4xl font-bold bg-pink-600 text-white py-2 text-center'>Frontend</p>
          <div className='w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 text-center py-4'>
            <TechCard image={HTML} alt='HTML icon' title='HTML' />
            <TechCard image={CSS} alt='CSS icon' title='CSS' />
            <TechCard image={JavaScript} alt='JavaScript icon' title='JavaScript' />
            <TechCard image={Bootstrap} alt='Bootstrap icon' title='Bootstrap' />
            <TechCard image={ReactImg} alt='React icon' title='React' />
            <TechCard image={Tailwind} alt='Tailwind icon' title='Tailwind' />
          </div>
        </div>

        {/* Backend Card */}
        <div className='rounded-lg overflow-hidden shadow-md mb-8'>
          <p className='text-4xl font-bold bg-green-600 text-white py-2 text-center'>Backend</p>
          <div className='w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 text-center py-4'>
            <TechCard image={Node} alt='Node.js icon' title='Node.js' />
            <TechCard image={Mongo} alt='MongoDB icon' title='MongoDB' />
            <TechCard image={SQL} alt='SQL icon' title='SQL' />
            <TechCard image={Express} alt='Express icon' title='Express' />
          </div>
        </div>

        {/* Programming Languages Card */}
        <div className='rounded-lg overflow-hidden shadow-md mb-8'>
          <p className='text-4xl font-bold bg-blue-600 text-white py-2 text-center'>Programming Languages</p>
          <div className='w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 text-center py-4'>
            <TechCard image={C} alt='C icon' title='C' />
            <TechCard image={CPlusPlus} alt='C++ icon' title='C++' />
            <TechCard image={Java} alt='Java icon' title='Java' />
            <TechCard image={Python} alt='Python icon' title='Python' />
          </div>
        </div>

        {/* Technology and Tools Card */}
        <div className='rounded-lg overflow-hidden shadow-md'>
          <p className='text-4xl font-bold bg-yellow-600 text-white py-2 text-center'>Technology and Tools</p>
          <div className='w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 text-center py-4'>
            <TechCard image={Git} alt='Git icon' title='Git' />
            <TechCard image={GitHub} alt='GitHub icon' title='GitHub' />
            <TechCard image={AWS} alt='AWS icon' title='AWS' />
            <TechCard image={Docker} alt='Docker icon' title='Docker' />
          </div>
        </div>

      </div>
    </div>
  );
};

const TechCard = ({ image, alt, title }) => (
  <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
    <img className='w-20 mx-auto' src={image} alt={alt} />
    <p className='my-4'>{title}</p>
  </div>
);

export default Skills;
