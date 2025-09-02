import {ROUTES} from './constants/routes.js';
import {Route, Routes} from "react-router-dom";
import ProjectsPage from "./components/ProjectsPage.jsx";
import ContactPage from "./components/ContactPage.jsx";
import AboutPage from "./components/AboutPage.jsx";
import LostPage from "./components/LostPage.jsx";
import Header from "./components/Header.jsx";
import Project from "./components/Project.jsx";
import Footer from "./components/Footer.jsx";
import styles from "./App.module.css";

function App() {

    return (
        <div className={styles.pageContainer}>
            <Header/>
            <div className={styles.mainContent}>
                <Routes >
                    <Route path={ROUTES.PROJECTS} element={<ProjectsPage/>}/>
                    <Route path={ROUTES.PROJECT_DETAIL(":projectLink")}
                           element={<Project projectName={ROUTES.PROJECT_DETAIL(":projectLink")}/>}/>
                    <Route path={ROUTES.CONTACT} element={<ContactPage/>}/>
                    <Route path={ROUTES.ABOUT} element={<AboutPage/>}/>
                    <Route path="*" element={<LostPage/>}/>
                </Routes>
            </div>
            <Footer/>
        </div>
    )
}

export default App
