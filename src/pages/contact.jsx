'use client';
import React, { useEffect, useState } from 'react';

const Skills = () => {
  const [visible, setVisible] = useState(false);

  const frontendSkills = [
    { name: 'React.js / Next.js', level: 90 },
    { name: 'JavaScript (ES6+)', level: 85 },
    { name: 'HTML5 & CSS3', level: 85 },
    { name: 'Tailwind CSS / Bootstrap', level: 85 },
  ];

  const backendSkills = [
    { name: 'Node.js & Express.js', level: 90 },
    { name: 'MySQL / SQL', level: 90 },
  ];

  useEffect(() => {
    const timeout = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  const renderSkill = (skill, index) => (
    <div className="mb-6" key={index}>
      <div className="flex justify-between mb-1">
        <span className="text-sm text-white font-semibold">{skill.name}</span>
        <span className="text-sm text-white font-semibold">{skill.level}%</span>
      </div>
      <div className="w-full h-3 bg-black/30 rounded-full">
        <div
          className="h-full rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-1000 ease-in-out"
          style={{ width: visible ? `${skill.level}%` : '0%' }}
        ></div>
      </div>
    </div>
  );

  return (
    <section className="bg-[#111827] text-white px-6 md:px-24 py-16">
      <p className="text-pink-500 uppercase tracking-widest mb-2">Features</p>
      <h2 className="text-4xl font-bold mb-10">Development Skill</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <h3 className="text-2xl font-semibold mb-6">Frontend Development</h3>
          {frontendSkills.map(renderSkill)}
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-6">Backend & Databases</h3>
          {backendSkills.map(renderSkill)}
        </div>
      </div>
    </section>
  );
};

export default Skills;
