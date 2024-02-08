import React from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import NewToDo from './NewToDo'
import EditToDo from './EditToDo'

export const Router = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path='/' element={<App />} />
                <Route path='/new' element={<NewToDo />} />
                <Route path='/edit/:id' element={<EditToDo />} />
            </Routes>
        </HashRouter>
    )
}
