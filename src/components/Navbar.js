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
                Club
              </Link>            
              <Link className="navbar-item" style={{margin:'10px'}} to="/">
                Effectifs
              </Link>

            <Link to="/" className="" title="Logo">
              <img src={logo} alt="FCS" style={{ width: '125px'}} />
            </Link>
            <Link className="navbar-item" style={{margin:'10px'}} to="/about">
                Partenaires
            </Link>         
            <Link className="navbar-item dropdown" style={{margin:'10px'}} to="/products">
                Boutique
              </Link>
          </div> 
        </div>
      </div>
      <div className="column is-4 social" style={{position : 'absolute', margin: 'right'}}>
                <a title="facebook" href="https://www.facebook.com/Futsal-Club-Suc%C3%A9en-345620518839889">
                  <img
                    src={facebook}
                    alt="Facebook"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="twitter" href="https://twitter.com/FCSuceen">
                  <img
                    className="fas fa-lg"
                    src={twitter}
                    alt="Twitter"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="instagram" href="https://www.instagram.com/futsal_club_suceen/">
                  <img
                    src={instagram}
                    alt="Instagram"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
              </div>
    </nav>
    )
  }
}

export default Navbar
