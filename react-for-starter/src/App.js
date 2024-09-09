import {
    BrowserRouter as Router, 
    Routes, 
    Route, 
} from "react-router-dom";
import Home from "./routes/Home.js";
import Detail from "./routes/Detail.js";



function App() {
    return (
    <Router>
        <Routes>
            <Route path="/" element={<Home/>}/>  
            <Route path="/Movie/:id" element={<Detail/>}/>  
        </Routes>
    </Router>
    );
}

//App : router 을 return 하는 component
//router : URL 을 보고 있는 component


export default App;
 