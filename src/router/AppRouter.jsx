import React from 'react';
import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom";
import HeapSortScreen from '../components/HeapSortScreen';
import HomeScreen from '../components/HomeScreen';
import InserSortScreen from '../components/InserSortScreen';
import QuickSortScreen from '../components/QuickSortScreen';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/heapsort" element={<HeapSortScreen/>}/>
                <Route exact path="/quicksort" element={<QuickSortScreen/>}/>
                <Route exact path="/insertsort" element={<InserSortScreen/>}/>
                <Route exact path="/" element={<HomeScreen/>}/>
                <Route path="*" element={<Navigate replace to="/" />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter
