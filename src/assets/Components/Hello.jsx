import React from 'react'
import ChangeHoc from './ChangeHoc'


const Hello = () => {
  return (
    <div>
        <h2>Hello World 🌍</h2>
    </div>
  )
}

export default ChangeHoc(Hello)