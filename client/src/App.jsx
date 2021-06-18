import React from 'react';

import { Route } from 'react-router-dom';
import { Header } from './components';
import { Home, Cart, Admin } from './pages';

function App() {
    return (
        <React.Fragment>
            <div className="wrapper">
                <Header/>
                <div className="content">
                    <Route path="/" component={Home} exact />
                    <Route path="/cart" component={Cart} exact />
                    <Route path="/admin" component={Admin} exact />
                </div>
            </div>
            {/* <div className="footer">by <a href="#">vasylcode</a> with <span>{"<3"}</span></div> */}
        </React.Fragment>
    );
}

export default App;
