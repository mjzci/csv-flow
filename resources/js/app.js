import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { StoreContext } from 'storeon/react'
import { GlobalStyle } from './styled'
import routes from './routes'
import store from './stores'

/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */

require('./bootstrap');
const App = (props) => {
    return (
        <BrowserRouter>
            <StoreContext.Provider value={store}>
                <Switch>
                    {routes.map((item, idx) => (
                        <Route key={idx} {...item} />
                    ))}
                </Switch>
                <GlobalStyle />
            </StoreContext.Provider>
        </BrowserRouter>
    )
}

if (document.getElementById('root')) {
    ReactDOM.render(<App />, document.getElementById('root'))
}