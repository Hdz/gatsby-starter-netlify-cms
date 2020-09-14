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

  /* Mis en commentaire parce qu'on ne veut pas garder l'état pour les dropdown
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
 */
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
            <div class="navbar-start">
                  <a class="navbar-link">
                    Club
                  </a>
                    <div class="navbar-dropdown">
                      <Link class="navbar-item">
                        Présentation
                      </Link>
                      <hr class="navbar-divider" />
                      <Link class="navbar-item">
                        Organigramme
                      </Link>
                      <hr class="navbar-divider" />
                      <Link class="navbar-item">
                        Vie du club
                      </Link>
                      <hr class="navbar-divider" />
                      <Link class="navbar-item">
                        Gallerie
                      </Link>
                    </div>

                </div>
              </Link>            
              <Link className="navbar-item has-dropdown is-hoverable" style={{margin:'40px'}} to="/">
                <div class="navbar-start">
                  <a class="navbar-link">
                    Effectifs
                  </a>
                    <div class="navbar-dropdown">
                      <Link class="navbar-item">
                        Équipe A
                      </Link>
                      <hr class="navbar-divider" />
                      <Link class="navbar-item">
                        Équipe B
                      </Link>
                      <hr class="navbar-divider" />
                      <a class="navbar-item">
                        Loisirs
                      </a>
                    </div>

                </div>
              </Link>
            <Link to="/" className="" title="Logo">
              <img src={logo} alt="FCS" style={{ width: '125px'}} />
            </Link>
            <Link className="navbar-item" style={{margin:'40px'}} to="/about">
                Partenaires
            </Link>         
  
            <Link className="navbar-item" style={{margin:'40px'}} to="/products">
                Boutique
              </Link>
          </div> 
        </div>
      </div>
      <div className="column is-4 social" style={{position : 'absolute', margin: 'right'}}>
                <a title="facebook" href="https://www.facebook.com/Futsal-Club-Suc%C3%A9en-345620518839889">
                  <img 
                  className="fas fa-lg is-hoverable"
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
                    className="fas fa-lg is-hoverable"
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
