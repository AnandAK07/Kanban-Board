import React from 'react'
import './Chip.css'
import { X } from 'react-feather'

const Chip = (props) => {
    return (
        <div className='chip' style={{backgroundColor:props.color}}>
            {/* {props.text} */}
            {/* <span></span> */}
            {props.close&&<X onClick={props.onClose?props.onClose():""}/>}
        </div>
    )
}

export default Chip