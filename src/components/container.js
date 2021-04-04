import React from "react"
import { Link } from "gatsby"

import * as containerStyles from "./container.module.css"

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default function Container({ children }) {
  return (
    <div>
      <header style={{ padding: `1em 2em`, marginBottom: `1.5rem`, backgroundColor: `pink` }}>
        <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
          <h3 style={{ display: `inline` }}>MySweetSite</h3>
        </Link>
        <ul style={{ listStyle: `none`, position: `absolute`, right: `10px`, top: `2px` }}>
          <ListLink to="/">Home</ListLink>
          <ListLink to="/about-css-modules/">About</ListLink>
        </ul>
      </header>
      <div className={containerStyles.container}>{children}</div>
      <footer className={containerStyles.footer}>
        <span><Link to="/">Home</Link></span>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <span><Link to="/about-css-modules/">About</Link></span>
      </footer>
    </div>
  )
}
