import React, { useState } from 'react'
import './Board.css'
import { MoreHorizontal } from 'react-feather'
import Card from '../card/Card'
import Editable from '../editable/Editable'
import Dropdown from '../dropdown/Dropdown'

const Board = (props) => {
    const [showDropdown, setShowDropdown] = useState(false)



    console.log(showDropdown)
    return (
        <div className='board'>
            <div className='board_top'>
                <p className='board_top_title'>{props.board?.title}<span>{` ${props.board?.cards?.length}`}</span></p>
                <div className="board_top_more" onClick={()=>setShowDropdown(true)}>
                        <MoreHorizontal />
                    {showDropdown && (
                        <Dropdown onClose={()=>setShowDropdown(false)}>
                            <div className='board_dropdown'>
                                <p>Delete Board</p>
                            </div>
                        </Dropdown>
                    )}
                </div>
            </div>
            <div className="board_cards custom-scroll">
            {props.board?.cards?.map((item)=>{
                return <Card key={item.id} card={item}/>
            })}
                <Editable displayClass="board_cards_add" text="Add Card" placeholder="Enter Card Title" />
            </div>
        </div>
    )
}

export default Board