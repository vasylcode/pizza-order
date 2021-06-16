import React from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';

import { Header } from './components';
import { Home, Cart } from './pages';

function App() {
    // const [pizzas, setPizzas] = React.useState([]);

    // React.useEffect(() => {
    //     axios.get('http://localhost:5000/api/pizza')
    //     .then((json) => {
    //         setPizzas(json.data);
    //     });
    // }, []);

    return (
        <React.Fragment>
            <div className="wrapper">
                <Header/>
                <div className="content">
                    <Route path="/" render={() => <Home items={pizzas} />} exact />
                    <Route path="/cart" component={Cart} exact />
                </div>
            </div>
            <div className="footer">by <a href="#">vasylcode</a> with <span>{"<3"}</span></div>
        </React.Fragment>
    );
}

export default App;
