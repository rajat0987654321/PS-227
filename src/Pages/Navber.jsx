import React, { useState } from "react";
import TrueFocus from "../componants/TrueFocus.jsx";
import Button from "../componants/Button.jsx";
import DashboardSection from "../componants/DashboardSection.jsx";
import { NavLink,Link } from 'react-router-dom';
function Navber() {
  const [open, setOpen] = useState(false);

  const navItem = (href, label) => (
    <a
      href={href}
      className="text-sm text-amber-50 font-medium transition-colors text-foreground/70  hover:text-orange-400 hover:underline "
    >
      {label}
    </a>
    // <Link to={href}>{label}</Link>

  );

  return (
    <div className="relative flex items-center justify-center">
    <header className="fixed top-5 z-40  mx-auto rounded-xl bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60 shadow-xl/35 ">
      <div className="container flex items-center justify-between h-16 px-4 border-1 border-amber-50 rounded-xl ">
        <a href="#" className="flex items-center gap-0 font-extrabold tracking-tight">
          <span className="inline-block w-6 h-6 rounded bg-primary" />
          <span className="text-lg text-amber-50 ">
          Mine Guardian</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="items-center gap-6 p-11 md:flex">
           {/* <NavLink to="/" exact activeStyle={{ fontWeight: 'bold' }}>Home</NavLink> */}
          {navItem("/", "Home")}
          {navItem("#features", "Analysis Tools")}
          {/* {navItem("#cta", "visualization")}  */}
          {navItem("#Dashboard", "DashboardSection")}
          {navItem("#DataStore", "DataStore")}
          {navItem("#contact", "Contact us")} 
          {/* {navItem("/Analysis", "Analysis")} */}
          {/* {navItem("/About us", "About us")}  */}
          {/* <Button size="sm">Get in touch</Button>*/}

        </nav>

        {/* Mobile Button */}
        {/* <button
          aria-label="Toggle menu"
          className="inline-flex items-center justify-center border rounded-md md:hidden h-9 w-9 border-border/70"
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-foreground">
            <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>*/}
      </div> 

      {/* Mobile Dropdown */}
      {/* {open && (
        <div className="border-t md:hidden border-border/60 bg-background/95">
          <div className="grid gap-1 py-2 px-2">
            <a href="#" className="px-2 py-2 text-sm rounded-md hover:bg-accent hover:text-accent-foreground">Home</a>
            <a href="#features" className="px-2 py-2 text-sm rounded-md hover:bg-accent hover:text-accent-foreground">Product</a>
            <a href="#cta" className="px-2 py-2 text-sm rounded-md hover:bg-accent hover:text-accent-foreground">Contact</a>
            <Button className="mt-1" size="sm" onClick={() => setOpen(false)}>Get in touch</Button>*/}
          {/* </div> */}
        {/* </div> */}
      {/* )} */}
    </header>
     </div> 
  );
}


export default Navber;