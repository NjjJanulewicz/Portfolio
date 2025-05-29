import './App.css'
import { ROUTES } from './routes';
import {Route, Routes} from "react-router-dom";
import ProjectsPage from "./components/ProjectsPage.jsx";
import ContactPage from "./components/ContactPage.jsx";
import AboutPage from "./components/AboutPage.jsx";
import LostPage from "./components/LostPage.jsx";
import Navigation from "./components/Navigation.jsx";

function App() {

    return (
        <>
            <Navigation/>
            <Routes>
                <Route path={ROUTES.PROJECTS} element={<ProjectsPage/>}/>
                <Route path={ROUTES.CONTACT} element={<ContactPage/>}/>
                <Route path={ROUTES.ABOUT} element={<AboutPage/>}/>
                <Route path="*" element={<LostPage/>}/>
            </Routes>
        </>
    )
}

export default App
