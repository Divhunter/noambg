import React from 'react'
import {Routes, Route } from 'react-router-dom'
import Wrapper from './pages/Wrapper'
import Error from './pages/Error'
import ScrollToTop from './functions/ScrollToTop'

// styles
import './styles/m-app.css'
import './styles/t-d-app.css'

const App = () => {
    
    return (
        <div>
            <Routes>
                <Route path='/noambg' element={ <Wrapper /> } />
                <Route path='/*' element={ <Error /> } />
            </Routes>
            <ScrollToTop />
        </div>
    ) 
}

export default App