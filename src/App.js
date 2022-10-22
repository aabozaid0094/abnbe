import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import BSHeader from "./components/BSHeader";
import Hero from "./components/Hero";
import Experiences from "./components/Experiences";

function App() {
    return (
        <div className="App">
            <BSHeader />
            <Hero />
            <Experiences/>
        </div>
    );
}

export default App;