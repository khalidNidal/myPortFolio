import React from 'react'
import SectionWrapper from '../hoc/SectionWrapper'
import {technologies} from "../const/index"
import { BallCanvas } from './canvas'

const Tech = () => {
  return (
    <>
    <div className=' container flex flex-wrap  justify-center items-center gap-10' >
      {technologies.map((technology) => (
       <div key = {technology.name}>
       <BallCanvas icon = {technology.icon}  />
       </div>
      ))}
      
      </div>
    </>
  )
}

export default Tech