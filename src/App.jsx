import './App.css'
import { ROUTES } from './routes';
import {Route, Routes} from "react-router-dom";
import Projects from "./components/Projects.jsx";
import ContactPage from "./components/ContactPage.jsx";
import AboutPage from "./components/AboutPage.jsx";
import Lost from "./components/Lost.jsx";
import Header from "./components/Header.jsx";
import Project from "./components/Project.jsx";

function App() {

    return (
        <>
            <Header/>
            <Routes>
                <Route path={ROUTES.PROJECTS} element={<Projects/>}/>
                <Route path={ROUTES.PROJECT_DETAIL(":projectLink")}
                       element={<Project projectName={ROUTES.PROJECT_DETAIL(":projectLink")}/>}/>
                <Route path={ROUTES.CONTACT} element={<ContactPage/>}/>
                <Route path={ROUTES.ABOUT} element={<AboutPage/>}/>
                <Route path="*" element={<Lost/>}/>
            </Routes>
        </>
    )
}

export default App
