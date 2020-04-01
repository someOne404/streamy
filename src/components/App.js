import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

const PageOne = () => {
    return (
        <div>
            PageOne
            BAD!!!
            <a href="/pagetwo">Go to Page Two</a>
        </div>
    );
};

const PageTwo = () => {
    return (
        <div>
            PageTwo
            <button>Click Me!</button>
            BAD!!!
            <a href="/">Go to Page One</a>
        </div>
    );
};

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <div>
                    <Route path="/" exact component={PageOne} />
                    <Route path="/pagetwo" component={PageTwo} />
                </div>
            </BrowserRouter>
        </div>
    );
};

export default App;