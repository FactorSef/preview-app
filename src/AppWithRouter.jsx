import React from 'react';
import { NavLink, Route, Switch, Redirect, useLocation, useParams } from 'react-router-dom'
import './App.scss';

export const Child = () => {
    const { id } = useParams();

    return <div>id: {id}</div>
}

export const App = () => {
    const location = useLocation();

    return (
        <div>
            <div className="liks">
                <NavLink to="/" exact>главная</NavLink>&nbsp;|&nbsp;
                <NavLink to="/news" >новости</NavLink>&nbsp;|&nbsp;
                <NavLink to="/blog" exact>блог</NavLink>&nbsp;|&nbsp;
                <NavLink to="/blog/2">блог с параметром</NavLink>
            </div>
            <div className="content">
                <Switch>
                    <Route path="/news">Новости</Route>
                    <Route path="/blog" exact>Блог</Route>
                    <Route path="/blog/:id" exact><Child/></Route>
                    <Route path="/404">404</Route>
                    
                    <Route path="/" exact><div>Лул</div></Route>
                    <Redirect from="*" to="/404" exact/>
                </Switch>
            </div>
        </div>
    )
}

export default App;