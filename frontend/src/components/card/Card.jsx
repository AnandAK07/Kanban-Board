import React from 'react'
import './Card.css'
import Chip from '../chip/Chip'
import { CheckSquare, Clock, MoreHorizontal } from 'react-feather'

const Card = () => {
    return (
        <div className='card'>
            <div className="card_top">
                <div className="card_top_labels">
                    <Chip text="Frontend" color="green" />
                </div>
                <MoreHorizontal />
            </div>
            <div className="card_title">
                uaiebeeieb eieoe inei
            </div>
            <div className="card_footer">
                <p><Clock/>29 Sept</p>
                <p><CheckSquare/>1/4</p>
            </div>
        </div>
    )
}

export default Card