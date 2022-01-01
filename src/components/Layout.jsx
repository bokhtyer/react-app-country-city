import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from '../components/Home'
import Add from '../components/Add'
export default function Layout() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="add" element={<Add />}></Route>
            </Routes>
        </>
    )
}
