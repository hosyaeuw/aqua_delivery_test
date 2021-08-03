import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import { AuthLoader, ChatLoader } from './pages'

import { getToken } from './utils/utils'

import './style.scss'

const Chat = React.lazy(() => import('./pages/chat/Chat'));
const Auth = React.lazy(() => import('./pages/auth/Auth'));

const App = () => {
    const token = getToken()

    const routeGuard = (from: React.ReactNode, to: React.ReactNode) => !!token ? from : to

    return (
        <div className="root-container">
            <Switch>
                <Route path="/" render={() => routeGuard(
                    <React.Suspense fallback={<ChatLoader />}>
                        <Chat />
                    </React.Suspense>,
                    <Redirect to='/auth/' />)} exact
                />
                <Route path="/auth" render={() => routeGuard(
                    <Redirect to='/' />,
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
