import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Landing from 'app/assets/landing.png'
import layoutStyles from "app/styles/layout/authLayoutStyles.module.css";


export const AuthLayout = () => {
  return (
    <div className={layoutStyles.layout}>
      {/* <figure className={layoutStyles.hero}>
        <img src={Landing} alt="Demo" />
      </figure> */}
      <section className={layoutStyles.content}>
        {/* <Outlet /> */}
        <div className="outlet">
          <h1>Login</h1>
          <main className={`${layoutStyles.dialog} ${layoutStyles.login}`}>
            <input type="text" placeholder='user_name'/>
            <input type="password" placeholder='password' />
            <button>Login</button>
          </main>
            <Link to=''>Sign Up instead?</Link>
        </div>
        <div className="info">
          <p>Flaunt your talent</p>
        </div>
      </section>
    </div>
  )
}
