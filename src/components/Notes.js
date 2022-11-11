import React from 'react'
import Header from './notes/Nav'
import Home from '../components/notes/Home'
import CreateNote from '../components/notes/CreateNote'
import EditNote from '../components/notes/EditNote'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

export default function Notes({setIsLogin}) {
    return (
        <Router>
        <div className="notes-page">
            <Header setIsLogin={setIsLogin} />
            <Routes>
                <Route path="/" element={<Home/>} exact />
                <Route path="/create" element={<CreateNote/>} exact />
                <Route path="/edit/:id" element={<EditNote/>} exact />
            </Routes>
            
        </div>
        </Router>
    )
}
