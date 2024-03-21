import React from 'react'
import './Card.css'
import Chip from '../chip/Chip'
import { AlignLeft, CheckSquare, Clock, MessageCircle, MoreHorizontal } from 'react-feather'

const Card = (props) => {
    return (
        <div className='card'>
            <div className="card_top">
                <div className="card_top_labels">
                    {props.card?.labels?.map((item) => (
                        <Chip color={item.color} />
                    ))}
                    {/* <Chip text={item.text} color={item.color} /> */}

                </div>
                <MoreHorizontal />
            </div>
            <div className="card_title">
                {props.card?.title}
            </div>
            <div className="card_footer">
                <p><AlignLeft />{props.card.date}</p>
                <p><MessageCircle /></p>
            </div>
        </div>
    )
}

export default Card