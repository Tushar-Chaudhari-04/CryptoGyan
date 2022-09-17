import React from 'react'
import styled from 'styled-components'
import "../css/Spinner.css"

const Spinner = () => {

  return (
    <div class="spinner-grow text-success spin" role="status" >
    <span class="visually-hidden">Loading...</span>
    </div>
  )
}

export default Spinner