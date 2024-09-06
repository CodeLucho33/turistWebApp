import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './components/Header'
import { Main } from './components/Main'
import { Card } from './components/Card'
import { paises } from './components/paises'

export default function App() {
  const [nombre, setNombre] = useState(paises[0].nombre)
  const [descripcion, setDescripcion] = useState(paises[0].breveDescripcion)
  const [actividadOne, setActividadOne] = useState(paises[0].actividad1)
  const [actividadTwo, setActividadTwo] = useState(paises[0].actividad2)
  const [actividadThree, setActividadThree] = useState(paises[0].actividad3)
  const [imgOne, setImgOne] = useState(paises[0].url1)
  const [imgTwo, setImgTwo] = useState(paises[0].url2)
  const [imgThree, setImgThree] = useState(paises[0].url3)
  const [whyOne, setWhyOne] = useState(paises[0].razon1)
  const [whyTwo, setWhyTwo] = useState(paises[0].razon2)
  const [whyThree, setWhyThree] = useState(paises[0].razon3)
  function handleClick() {
    const randomPlace = Math.floor(Math.random() * paises.length)
    const newPlace = paises[randomPlace]

    setNombre(newPlace.nombre)
    setDescripcion(newPlace.breveDescripcion)
    setActividadOne(newPlace.actividad1)
    setActividadTwo(newPlace.actividad2)
    setActividadThree(newPlace.actividad3)
    setImgOne(newPlace.url1)
    setImgTwo(newPlace.url2)
    setImgThree(newPlace.url3)
    setWhyOne(newPlace.razon1)
    setWhyTwo(newPlace.razon2)
    setWhyThree(newPlace.razon3)
  }




  return (
    <>
      <button className='btn-other-place' onClick={handleClick}>Find other place!</button>
      
      <Header
        name={nombre}
        descripcion={descripcion} />
      <Main
        name={nombre}
        uno={actividadOne}
        dos={actividadTwo}
        tres={actividadThree} 
        img1={imgOne}
        img2={imgTwo}
        img3={imgThree}
        why1={whyOne}
        why2={whyTwo}
        why3={whyThree}/>
      <Card />
    </>
  )
}


