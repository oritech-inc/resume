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
      <div className={'max-w mx-auto pt-10'}>
        <header id={'header'} className={'w-full h-[800px] pt-10 flex flex-col border-b-[1px] border-b-gray-800'}>
          <Header />
        </header>
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
