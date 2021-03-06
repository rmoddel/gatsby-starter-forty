import React from 'react'
import { Link } from 'gatsby'

const Banner = (props) => (
    <section id="banner" className="major">
        <div className="inner">
            <header className="major">
                <h1>Welcome to MGY!</h1>
            </header>
            <div className="content">
                <p>A Mesivta High School envisioned with your son in mind</p>
                <ul className="actions">
                  <Link to="/contact" className="button next scrolly">Contact Us</Link>
                  <Link to="/202won" className="button next scrolly">WIN HUGE ~ 202WON</Link>
                </ul>
            </div>
        </div>

    </section>
)

export default Banner
