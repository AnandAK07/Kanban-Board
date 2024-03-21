import React, { useEffect, useRef } from 'react'
import { X } from 'react-feather';

const Dropdown = (props) => {
    const dropdownRef = useRef();

    const handleClick = (event) => {
        if (dropdownRef && !dropdownRef.current.contains(event.target)) {
            // if (props.onClose) props.onClose();
        }
    }

    const handleClose=()=>{
        props.onClose();
    }

    useEffect(() => {
        document.addEventListener('click', handleClick);

        return () => {
            document.removeEventListener('click', handleClick)
        }
    },[])
    return (
        <div ref={dropdownRef} className='dropdown' style={{ position: 'absolute', top: '100%', right: '0' }}>
            {props.children}
            <X onClick={handleClose}/>
        </div>
    )
}

export default Dropdown