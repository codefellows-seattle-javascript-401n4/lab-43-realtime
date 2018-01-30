import './style/main.scss';

import React from 'react';
import ReactDom from 'react-dom'
import {MemoryRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import {store} from './app/store'
import App from './components/app'

// TODO: instead of pulling in createStore and creating it here, pull in created store as an import
// import createStore from './app/store'
// const store = createStore();

class Main extends React.Component {

    render() {
        return (
            <Provider store={store}>
                <MemoryRouter>
                    <App/>
                </MemoryRouter>
            </Provider>
        )
    }

}

ReactDom.render(<Main/>, document.getElementById('root'));
