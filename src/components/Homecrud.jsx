import React from 'react'
import style from './home.module.css'
import {Link} from 'react-router-dom'


const Homecrud=()=>{

    return(
        <section id={style.nav}>
            <Link to='/lipu'>Createuser</Link>
            <Link to='/user'>User</Link>
        </section>
    )
}
export default Homecrud