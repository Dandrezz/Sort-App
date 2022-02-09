import React from 'react';
import { Route, BrowserRouter, Switch, Redirect } from "react-router-dom";
import HeapSortScreen from '../components/HeapSortScreen';
import HomeScreen from '../components/HomeScreen';
import InserSortScreen from '../components/InserSortScreen';
import QuickSortScreen from '../components/QuickSortScreen';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/heapsort" component={HeapSortScreen}/>
                <Route exact path="/quicksort" component={QuickSortScreen}/>
                <Route exact path="/insertsort" component={InserSortScreen}/>
                <Route exact path="/" component={HomeScreen}/>
                <Redirect to="/"/>
            </Switch>
        </BrowserRouter>
    )
}

export default AppRouter
