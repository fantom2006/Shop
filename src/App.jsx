import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import style from './App.module.css'
import LastTime from './components/footer/LastTime/LastTime'
import Catalog from './components/header/category/catalog/Catalog'
import HeaderTop from './components/header/middle-header/header-top/HeaderTop'
import Input from './components/header/middle-header/input/Input'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <div>
        <div className="HeaderApp">
          <Catalog/>
          <div className={style.topApp}>
            <HeaderTop/>
            <Input/>
          </div>
          <div className="rightApp">
            <div className="rightLanguage">
      </div>
            dsgsdfs

          </div>
        </div>
      </div>
     
     {/*Header*/}
     <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='*' element={<Error/>} /> 
      <Route path='corzina' element={<Corzina/>}/>
     </Routes>
          {/*Footer*/}

    </>
  )
}

export default App
