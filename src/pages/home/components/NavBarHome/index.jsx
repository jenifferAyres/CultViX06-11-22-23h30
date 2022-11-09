import { useState } from 'react';
import './styles.css';
import { FiSearch } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import buscar from './buscar';
function NavBarHome() {

    const [input, setInput] = useState('centro de vitoria')

    function buscarLocal(){

        var oTeste = buscar();
        var sInput = "centro de vitoria";
        var sError = "uma cidade válida";

        switch (sInput.toLocaleLowerCase()) {
            case "centro de vitoria":
                alert("Tenho que preencher os dados ainda" + oTeste.CentroVitoria.BimboBar)
                break;
            default:
                alert(`Tenho que preencher os dados ainda ${sError}`)
                break;
        }

        //alert("Clicou" + oTeste.Dois)
    }

    //function _SetarDados() {
        class CentroVitoria {
            
            setData() {

            }

        }

    //}

    return (
        <div className="container">
            <div className='navbar-main-home'>
                <div className='titulo'>
                    <br /><br />
                    <h1>Cult-vix</h1>{''}
                </div>

                <div className='ini'>
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
                        <input id="inpt1" type="text" 
                        placeholder="Digite o local ex: Centro de vitoria ..." 
                        aria-label="ex: Bebs, Centro de vitoria ..." 
                        aria-describedby="button-search"
                        value={input}
                        onChange={(e) => setInput(e.target.value) }
                        />

                        <button class="btn1" id="button-search" type="button" onClick={buscarLocal}>
                            <FiSearch size={15} color="#FFF" />
                        </button>
                    </div>
                </div>

                <br />
                <iframe className="mapa" id="maps"
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

            {/* ----------->Rodapé da pagina com os recomendados*/}
            
            <div className='txt1'>
                    <h1>Recomendados</h1>
                </div>
                <div className='main'>
                    <h2>{CentroVitoria}</h2>
                    <span>CEP:29055-460 | </span>
                    <span>Rua:R. Joaquim Lírio, 595 - Loja 05 e 06 </span>
                    <span>Praia do Canto, Vitória - ES |</span>
                    <span>Contato:(27)3376-4373</span>
                </div>
                <div className="m2">
                    <h2> Mac Donalds </h2>
                    <span> CEP:29065-730 | </span>
                    <span>Rua:Av. Des. Santos Neves 1430 </span>
                    <span> Santa Lúcia,Vitória - ES |</span>
                    <span>Contato:(27) 3345-0761</span>
                </div>
                <div className="m3">
                    <h2> Ilha Do Caranguejo </h2>
                    <span>CEP:29090-540 | </span>
                    <span>Rua:R. Alcino Pereira Neto, 570 - </span>
                    <span>Jardim Camburi, Vitória - ES |</span>
                    <span>Contato:(27)3395-0244</span>
                </div>

                <div className="m4">
                    <h2> Triângulo das bermudas </h2>
                    <span>CEP:29055-180 | </span>
                    <span>Rua:Av. Saturnino de Brito, 1175 -  </span>
                    <span>Praia do Canto, Vitória - ES |</span>
                </div>
                <div class="m5">
                    <h2>Bistrô Saldanha </h2>
                    <span>CEP:29040-780 | </span>
                    <span>Curva do Saldanha, 320 - | </span>
                    <span>Jucutuquara, Vitória - ES |</span>
                    <span>Contato:bistrosaldanha@gmail.com</span>
                </div>
                <div class="m6">
                    <h2> Outback Steakhouse </h2>
                    <span>CEP:29050-902| </span>
                    <span>Rua:Av. Américo Buaiz, 200 Shopping Vitória - </span>
                    <span>Enseada do Suá, Vitória - ES |</span>
                    <span>Contato:(27)3235-7253</span>
                </div>
            
        </div>
    );
}

export default NavBarHome;