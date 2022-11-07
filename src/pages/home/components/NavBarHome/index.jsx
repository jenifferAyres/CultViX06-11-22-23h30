import './styles.css';
//import maps from './maps';
import { Link } from 'react-router-dom';
function NavBarHome() {

    //var macc = { lat: 42.1382114, lng: -71.5212585 };

    //var map = new google.maps.Map(

        //document.getElementById('map'), { zoom: 15, center: macc });

    //var marker = new google.maps.Marker({ position: macc, map: map });


    return (
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
            <div id="map">

                

            </div>
            <br />
            <div class="card mb-4">
                <div class="card-header">Descubra</div>
                <div class="card-body">
                    <div class="input-group">
                        <input class="form-control" type="text" placeholder=" ex: Bebs, Centro de vitoria ..." aria-label="ex: Bebs, Centro de vitoria ..." aria-describedby="button-search" />
                        <button class="btn btn-primary" id="button-search" type="button">Go!</button>
                    </div>
                </div>
            </div>

            <br />
            <iframe width="860" height="400" class="video" aling="left"
                src="https://www.youtube.com/embed/hLrNckEmcAc"
                title="CIDADE DE VITÓRIA-ES | Vitória Espírito Santo Brasil -
                      Pontos turísticos | Aerial View" frameborder=""
                allow="accelerometer; autoplay; clipboard-write; encrypted-media;
                      gyroscope; picture-in-picture" allowfullscreen></iframe>



        </div>


    );
}

export default NavBarHome;