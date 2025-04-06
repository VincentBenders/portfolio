import React, { Component } from 'react'
import { Link, Outlet } from 'react-router'

export default class Layout extends Component {
  render() {
    return (
        <>
        <nav className={'border-black'}>
            <Link className={'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded'} to={"/"}>Portfolio</Link>
            <Link className={'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded'} to={"/about"}>About Me</Link>
           

        </nav>
        <main>
            <Outlet/>
        </main>

    </>
    )
  }
}
