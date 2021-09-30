import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Home from "./view/Home";
import Cart from "./view/Cart";
import Header from "./components/Header";
import {Container} from "react-bootstrap";

const App = () => {
    return (
        <Router>

            <Header />
            <Container className="py-5">
                <Route exact path="/"><Home /></Route>
                <Route  path="/cart"><Cart /></Route>
            </Container>
        </Router>
    );
};

export default App;