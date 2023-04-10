import './nav.css'
import React, { useState, useEffect } from 'react';
const Nav = ({data}) => {
  const [activeNavItem, setActiveNavItem] = useState("");
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveNavItem(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-50% 0px -50% 0px",
        threshold: 0,
      }
    );
    data.forEach(({name})=>{
      const element = document.querySelector(name);
      observer.observe(element);
    })
  
    return () => {
      observer.disconnect();
    };
  }, [data]);
  return (
    <nav>
      {
        data.map(({id,name, component})=>{
          return (
            <a key={id} href={name} className={id===activeNavItem ? 'active':''}>{component}</a>
          )
        })
      }
    </nav>
  )
}

export default Nav
