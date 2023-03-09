import React from 'react'
import Createuser from './components/Createuser'
import Homecrud from './components/Homecrud'
import User from './components/User'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Editusers from './components/Editusers'


const App=()=>{

    return(
        <div>
            <BrowserRouter>
            <Homecrud/>
                <Routes>
                    <Route element={<Createuser/>} path='/lipu'/>
                    <Route element={<User/>} path='/user'/>
                    <Route element={<Editusers/>} path='/edit/:index'/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}
export default App