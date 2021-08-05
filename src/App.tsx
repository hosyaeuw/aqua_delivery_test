import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { AuthLoader, ChatLoader } from './pages'

import './style.scss'

const Chat = React.lazy(() => import('./pages/chat/Chat'));
const Auth = React.lazy(() => import('./pages/auth/Auth'));

const App = () => {

    return (
        <div className="root-container">
            <Switch>
                <Route path="/" render={() => (
                    <React.Suspense fallback={<ChatLoader />}>
                        <Chat />
                    </React.Suspense>)} exact
                />
                <Route path="/auth" render={() => (
                    <React.Suspense fallback={<AuthLoader />}>
                        <Auth />
                    </React.Suspense>
                )} exact
                />
            </Switch>
        </div>
    )
}

export default App;
