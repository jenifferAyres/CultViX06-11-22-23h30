import { useState } from 'react';
import './styles.css';
import { FiSearch } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import buscar from './buscar';
function NavBarHome() {

    const [input, setInput] = useState('centro de vitoria');
    const [lugar, lugar2, lugar3, lugar4, lugar5, lugar6, lugar7, lugar8, setEndereco, setEndereco2, setEndereco3, setEndereco4,
        setEndereco5, setEndereco6, setEndereco7, setEndereco8, contato,
        contato2, contato3, contato4, contato5, contato6, contato7, contato8, local,et] = useState({});


    function buscarLocal() {

        var oTeste = buscar();
        var sInput = "centro de vitoria";
        var sError = "uma cidade válida";

        switch (sInput.toLocaleLowerCase()) {
            case "centro de vitoria":
                alert("Tenho que preencher os dados ainda" + oTeste.CentroVitoria.BimboBar)
                et(oTeste.CentroVitoria.BimboBar)
                local(oTeste.CentroVitoria.BimboBar.local)
                lugar(oTeste.CentroVitoria.BimboBar.Nome)
                lugar2(oTeste.CentroVitoria.Chopperia.Nome)
                lugar3(oTeste.CentroVitoria.ChurrascariaPizzaria.Nome)
                lugar4(oTeste.CentroVitoria.Grappino.Nome)
                lugar5(oTeste.CentroVitoria.GreenStation.Nome)
                lugar6(oTeste.CentroVitoria.Mucane.Nome)
                lugar7(oTeste.CentroVitoria.oca.Nome)
                lugar8(oTeste.CentroVitoria.sesc.Nome)

                //Guardando o valor do endereço
                setEndereco(oTeste.CentroVitoria.BimboBar.Rua)
                setEndereco2(oTeste.CentroVitoria.Chopperia.Rua)
                setEndereco3(oTeste.CentroVitoria.ChurrascariaPizzaria.Rua)
                setEndereco4(oTeste.CentroVitoria.Grappino.Rua)
                setEndereco5(oTeste.CentroVitoria.GreenStation.Rua)
                setEndereco6(oTeste.CentroVitoria.Mucane.Rua)
                setEndereco7(oTeste.CentroVitoria.oca.Rua)
                setEndereco8(oTeste.CentroVitoria.sesc.Rua)
                //Guardando os valores do contato
                contato(oTeste.CentroVitoria.BimboBar.Contato)
                contato2(oTeste.CentroVitoria.Chopperia.Contato)
                contato3(oTeste.CentroVitoria.ChurrascariaPizzaria.Contato)
                contato4(oTeste.CentroVitoria.Grappino.Contato)
                contato5(oTeste.CentroVitoria.GreenStation.Contato)
                contato6(oTeste.CentroVitoria.Mucane.Contato)
                contato7(oTeste.CentroVitoria.oca.Contato)
                contato8(oTeste.CentroVitoria.sesc.Contato)

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
                            onChange={(e) => setInput(e.target.value)}
                        />

                        <button class="btn1" id="button-search" type="button" onClick={buscarLocal}>
                            <FiSearch size={15} color="#FFF" />
                        </button>
                    </div>
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


            {/* ----------->Rodapé da pagina com os recomendados*/}

            <div className='txt1'>
                <h1>Recomendados</h1>
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

            <div class="cardss">

                <div class="card-header1"></div>

                <div class="card-bodysaa">

                    <div className='lc1'>
                        <h2>Centro de vitoria</h2>
                        <br/><br/>
                        <h2>Nome: Bimbo Bar e Restaurante</h2>
                        <h2> Rua: R. Sete de Setembro, 132 - Centro, Vitória - ES</h2>
                        <h2>CEP: 29015-180,</h2>
                        <h2>Contato: (27)3071-5400</h2>
                    </div>

                    <br />

                    <div className="lc2">
                        <h2> Nome: Green Station</h2>
                        <h2> Rua: R. Prof. Baltazar, 171 - Centro, Vitória - ES - ES</h2>
                        <h2> CEP: 29015-180</h2>
                        <h2>Contato: (27)3071-5400</h2>
                        <br />
                    </div>
                    <div className="lc3">

                        <h2>Nome: Churrascaria e Pizzaria 7</h2>
                        <h2>Rua: R. Sete de Setembro, 148 - Centro, Vitória - ES</h2>
                        <h2> CEP:29015-000</h2>
                        <h2> Contato:(27)3354-0550</h2>
                    </div>

                    <br />
                    <div className="lc4">
                        <h2> Nome: Grappino</h2>
                        <h2>Rua:R. Gama Rosa, 128 - Centro, Vitória - ES</h2>
                        <h2> CEP: 29015-100</h2>
                        <h2> Contato:(27)3029-5567</h2>
                    </div>

                    <br />
                    <div class="lc5">

                        <h2>Nome:Chopperia da Praça</h2>
                        <h2>Rua: R. Sete de Setembro, 180 - Centro, Vitória - ES</h2>
                        <h2>CEP:29015-000</h2>
                        <h2>Contato:(27)3029-5567</h2>
                    </div>
                    <br />
                    <div class="lc6">
                        <h2> Nome: MUCANE - Museu Capixaba do Negro</h2>
                        <h2> Rua: Av. República, 121 - Centro, Vitória - ES</h2>
                        <h2> CEP: 29010-700</h2>
                        <h2>Contato: (27)3222-4560</h2>
                    </div>
                    <br />
                    <div class="lc7">
                        <h2>Nome: Centro Cultural Sesc Glória</h2>
                        <h2> Rua: Av. Jerônimo Monteiro, 428 - Centro, Vitória - ES</h2>
                        <h2>CEP: 29010-002</h2>
                        <h2>Contato: (27)3232-4750</h2>

                    </div>
                    <br />
                    <div class="lc8">
                        <h2>Nome: A Oca - Bistrô & Ateliê</h2>
                        <h2>Rua: R. do Rosário, 114 - Centro, Vitória - ES</h2>
                        <h2> CEP:29016-095</h2>
                        <h2>Contato:(27)98825-6714" </h2>
                    </div>



                </div>



            </div>





        </div>
    );
}

export default NavBarHome;