import './styles.css';
//import maps from './maps';
import { Link } from 'react-router-dom';
function NavBarHome() {

    
    return (
        <div className="container">
            <div className='navbar-main-home'>
                <div>
                    <br /><br />
                    <h1>Cult-vix</h1>{''}
                </div>

                <div>
                    <br />
                    <h1><Link to={'/'}>Inicio</Link></h1>{''}
                    <br />
                    <a href='/'>   </a>{''}
                    <br />
                </div>

                <map name="asdas"></map>
                <br />

                <div class="card mb-4">
                    <div class="card-header">Descubra</div>
                    <div class="card-body">
                        <div class="input-group">
                        </div>
                        <input class="form-control" type="text" placeholder=" ex: Centro de vitoria ..." aria-label="ex: Bebs, Centro de vitoria ..." aria-describedby="button-search" />
                        <button class="btn btn-primary" id="button-search" type="button">Go!</button>
                    </div>
                </div>

                <br />
                <iframe width="400" height="400" class="mapa" id="maps"
                    src="https://maps.google.com/maps?q=vitoria&t=&z=13&ie=UTF8&iwloc=&output=embed" 
                    title=" | asdasd-
                        Pontos turísticos | Aerial View" frameborder=""
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media;
                        gyroscope; picture-in-picture" allowfullscreen />
                <div>
                    <br />
                    <iframe width="860" height="400" class="video" aling="left" id='video'
                        src="https://www.youtube.com/embed/hLrNckEmcAc"
                        title="CIDADE DE VITÓRIA-ES | Vitória Espírito Santo Brasil -
                            Pontos turísticos | Aerial View" frameborder=""
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media;
                            gyroscope; picture-in-picture" allowfullscreen />
                </div>
            </div>
        </div>
    );
}

export default NavBarHome;