'use client'
import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <div className="collapse navbar-collapse" id="navcol-1">
    <ul className="navbar-nav mx-auto">
      <Link className="nav-item nav-link"  href="/">Home</Link>
      <Link className="nav-item nav-link"  href="/services">Services</Link>
      <Link className="nav-item nav-link"  href="/projects">Projects</Link>
      <Link className="nav-item nav-link"  href="/pricing">Pricing</Link>
      <Link className="nav-item nav-link"  href="/shopping-card">Shopping-card</Link>
      <Link className="nav-item nav-link"  href="/product">product</Link>
      <Link className="nav-item nav-link"  href="/team">Team</Link>
      <Link className="nav-item nav-link"  href="/testimonials">Testimonials</Link>
      <Link className="nav-item nav-link"  href="/contacts">Contacts</Link>
      <Link className="nav-item nav-link"  href="/signup">Sign up</Link>
      </ul><Link className="btn btn-primary shadow" role="button"  href="/signup">Sign up</Link>
  </div>
  )
}

export default Header
