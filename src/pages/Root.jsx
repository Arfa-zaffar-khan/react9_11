import React, { Suspense } from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'
import Loader from '../components/Loader'
import { Provider } from 'react-redux'
import store from '../store/store'

export default function Root() {
  return (
    <>
    <Provider store={store}>
    <Header/>
    <Suspense fallback={<Loader />}>
    <Outlet />
    </Suspense>
    <div>footer</div>
    </Provider>
    </>
   
  )
}
