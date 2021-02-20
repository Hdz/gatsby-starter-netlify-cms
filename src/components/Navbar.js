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

  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand"
               style={{position: 'relative', left: '52%', top: '50%', transform: 'translate(-50%, -50%)'}}
          >

           
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass} `}
            
          >
            <Link className="navbar-item navbar-start has-dropdown is-hoverable is-center" style={{margin:'40px'}} to="/">
            <div className="navbar-start">
                  <Link className="navbar-link">
                    Club
                  </Link>
                    <div className="navbar-dropdown">
                      <Link className="navbar-item">
                        Présentation
                      </Link>
                      <hr className="navbar-divider" />
                      <Link class="navbar-item">
                        Organigramme
                      </Link>
                      <hr className="navbar-divider" />
                      <Link className="navbar-item">
                        Vie du club
                      </Link>
                      <hr className="navbar-divider" />
                      <Link className="navbar-item">
                        Gallerie
                      </Link>
                    </div>

                </div>
              </Link>            
              <Link className="navbar-item has-dropdown is-hoverable" style={{margin:'40px'}} to="/">
                <div className="navbar-start">
                  <Link className="navbar-link">
                    Effectifs
                  </Link>
                    <div className="navbar-dropdown">
                      <Link className="navbar-item">
                        Équipe A
                      </Link>
                      <hr class="navbar-divider" />
                      <Link className="navbar-item">
                        Équipe B
                      </Link>
                      <hr className="navbar-divider" />
                      <Link className="navbar-item">
                        Loisirs
                      </Link>
                    </div>

                </div>
              </Link>
            <Link to="/" className="" title="Logo">
              <img src={logo} alt="FCS" style={{ width: '125px'}} />
            </Link>
            <Link className="navbar-item" style={{margin:'40px'}} to="/partner">
                Partenaires
            </Link>         
  
            <Link className="navbar-item" style={{margin:'40px'}} to="/products">
                Boutique
              </Link>
          </div> 
        </div>
      </div>
      <div className="column is-4 social" style={{position : 'absolute', margin: 'right'}}>
                <Link title="facebook" href="https://www.facebook.com/Futsal-Club-Suc%C3%A9en-345620518839889">
                  <img 
                  className="fas fa-lg is-hoverable"
                    src={facebook}
                    alt="Facebook"
                    style={{ width: '1em', height: '1em' }}
                  />
                </Link>
                <Link title="twitter" href="https://twitter.com/FCSuceen">
                  <img
                    className="fas fa-lg"
                    src={twitter}
                    alt="Twitter"
                    style={{ width: '1em', height: '1em' }}
                  />
                </Link>
                <Link title="instagram" href="https://www.instagram.com/futsal_club_suceen/">
                  <img
                    className="fas fa-lg is-hoverable"
                    src={instagram}
                    alt="Instagram"
                    style={{ width: '1em', height: '1em' }}
                  />
                </Link>
              </div>
    </nav>
    )
    
  }
}
export default Navbar
