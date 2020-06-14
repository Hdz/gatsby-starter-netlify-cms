import React from 'react'
import { Link } from 'gatsby'
import './all.sass'
import logo from '../img/logo.png'
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand"
               style={{position: 'relative', left: '50%', top: '50%', transform: 'translate(-50%, -50%)'}}
          >

           
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass} `}
            
          >
            <Link className="navbar-item" style={{margin:'10px'}} to="/">
                Matches
              </Link>            
              <Link className="navbar-item" style={{margin:'10px'}} to="/">
                Évènements
              </Link>
            <Link className="navbar-item" style={{margin:'10px'}} to="/products">
                Boutique
              </Link>
            <Link to="/" className="" title="Logo">
              <img src={logo} alt="FCS" style={{ width: '125px'}} />
            </Link>
            <Link className="navbar-item" style={{margin:'10px'}} to="/about">
                Partenaires
            </Link>         
            <Link className="navbar-item" style={{margin:'10px'}} to="/contact">
                Inscriptions
            </Link>
            <Link className="navbar-item" style={{margin:'10px'}} to="/blog">
                Blog
            </Link>

            
          </div> 
        </div>
      </div>
    </nav>
    )
  }
}

export default Navbar
