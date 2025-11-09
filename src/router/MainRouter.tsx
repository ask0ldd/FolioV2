import { Routes, Route, BrowserRouter } from "react-router-dom";
import App from "../pages/app/App";
import Project from "../pages/project/Project";

function MainRouter(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/project" element={<Project />} />
            </Routes>
        </BrowserRouter>
    )
}

export default MainRouter