// eslint-disable-next-line no-unused-vars
import React from 'react'
import Header from './components/header/Header';
import Features from './components/features/Features';
import Projects from './components/projects/Projects';
// import Resume from './components/resume/Resume';
// import Testimonials from './components/testimonials/Testimonials';
// import Contacts from './components/contacts/Contacts';

function App() {

  return (
    <div className={'w-full h-full bg-bodyColor text-lightColor'}>
      <div className={'max-w mx-auto pt-5'}>
        <Header />
        <Features />
        <Projects />
        {/* <Resume />
        <Testimonials />
        <Contacts /> */}
      </div>
    </div>
  )
}

export default App
