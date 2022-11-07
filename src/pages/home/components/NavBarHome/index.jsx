import './styles.css';
import { Link } from 'react-router-dom';
function NavBarHome() {
    return (
        <div className='navbar-main-home'>
                <div>
                    <br></br><br></br>
                    <h1>Cult-vix</h1>{''}
                  </div>
                    
                     <div>
           <br></br>
                     <h1><Link to={'/'}>Home Inicio</Link></h1>{''}
                    <br></br> 
                    
                     <a href='/'>   </a>{''}
                      </div>
                <br></br>
                     <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
            
                      <iframe width="860" height="400" 
                      src="https://www.youtube.com/embed/hLrNckEmcAc" 
                      title="CIDADE DE VITÓRIA-ES | Vitória Espírito Santo Brasil -
                      Pontos turísticos | Aerial View" frameborder="" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media;
                      gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
    );
}

export default NavBarHome;