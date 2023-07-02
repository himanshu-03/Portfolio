import React from "react";
import { Icon } from 'react-icons-kit'
import {github} from 'react-icons-kit/fa/github'
import {linkedin} from 'react-icons-kit/fa/linkedin'
import {instagram} from 'react-icons-kit/fa/instagram'
import {ic_email_twotone} from 'react-icons-kit/md/ic_email_twotone'
import {user} from 'react-icons-kit/icomoon/user'

const Socials = () => {

  const links = [
    {
      id:1,
      child:(
        <>GitHub <Icon size={30} icon={github} style={{color: '#6e5494'}}/></>
      ),
      href: 'https://github.com/himanshu-03',
    },
    {
      id:2,
      child:(
        <>LinkedIn <Icon size={30} icon={linkedin} style={{color: '#0077B5'}}/></>
      ),
      href: 'https://linkedin.com/in/agarwal-himanshu',
    },
    {
      id:3,
      child:(
        <>Mail <Icon size={30} icon={ic_email_twotone} style={{color: '#BB001B'}}/></>
      ),
      href: 'mailto:himanshuaaagarwal2002@gmail.com',
    },
    {
      id:4,
      child:(
        <>Resume <Icon size={30} icon={user} style={{color: '#E9C46A'}}/></>
      ),
      href: 'https://drive.google.com/file/d/1j4ibK36ypsBjmejYUREvSWVR6J6wciiW/view?usp=drive_link',
    },
    {
      id:5,
      child:(
        <>Instagram <Icon size={30} icon={instagram} style={{color: '#bc2a8d'}}/></>
      ),
      href: 'https://instagram.com/_._hiimanshu_._',
    }
  ];

  return (
    <div className="hidden lg:flex flex-col top-[35%] fixed left-0">
      <ul>

        {links.map(({child, href, style, id})=>(
          <li key={id} className={`flex justify-between items-center my-1 rounded-r-full mx-auto w-40 h-[65px] px-4 ml-[-100px] bg-black hover:ml-[-5px] hover:rounded-r-full duration-300 cursor-pointer ${style}`}>
            <a href = {href} className="flex justify-between pl-2 items-center text-white w-full" target="_blank" rel="noreferrer">
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Socials