import { Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import MainHome from './pages/home/MainHome';

function MyRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/home' element={<MainHome />} />
        </Routes>
    );
}

export default MyRoutes;
