import React from 'react'

const About = () => {
  return (
    <div name="about" className="flex font-sans w-full h-screen" style={{
        background: "linear-gradient(0deg, hsla(0, 0%, 0%, 1) 0%, hsla(251, 62%, 24%, 1) 100%)"
        }}>
      <div className="mt-[-20px] md:mt-[200px] max-w-screen-lg flex flex-col mx-auto justify-start p-8 text-white text-4xl w-full h-full">
        <div className='pb-8'>
          <p className='text-4xl inline border-b-4 font-bold border-gray-500'>About Me</p>
        </div>
        <p className='text-xl mt-8 text-left'>
          Hello! I'm Himanshu, a third-year Computer Science student, a software developer who loves to explore and contribute to the world. I usually work on Data Analysing, Software Development, Web Development, and UI/UX Designs.
          <br />
        </p>
        <p className='text-xl mt-6 text-left'>
          I believe in public learning, and consider myself a proactive, responsible and result-oriented professional.
          <br />
        </p>
        <div className='bg-slate-300 bg-opacity-10 rounded-md mt-10 border-slate-300  border-2'>
          <ul className='list-disc pl-8 m-6 text-xl'>
            <li>Documentation Team Lead at <a href = "https://opensource.tcetmumbai.in" target="_blank" rel="noreferrer" className='font-bold hover:text-[#bb35cd]'>TCET Open Source</a></li>
            <li>Open Source Contributor at <a href = "https://gssoc.girlscript.tech/" target="_blank" rel="noreferrer" className='font-bold hover:text-[#dea350]'>GSSoC</a></li>
            <li>Secretariat at <a href = "https://gssoc.girlscript.tech/" target="_blank" rel="noreferrer" className='font-bold hover:text-[#ce3a3a]'>GDSC - TCET</a></li>
            <li>TE Technical Head at <a href = "https://gssoc.girlscript.tech/" target="_blank" rel="noreferrer" className='font-bold hover:text-[#363bd0]'>CSI - TCET</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default About