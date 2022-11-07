import './styles.css'
import Footer from "../../../components/Footer";
import NavBarHome from "../components/NavBarHome";

function MainHome() {
    return (
        <>
            <nav>
                <NavBarHome />
            </nav>
            <header>
                <div className='teste'>
                    <h1></h1>
                    <br /><br /><br />
                    </div>
            </header>
            <footer>
                <Footer />
            </footer>
        </>
    );
}

export default MainHome;