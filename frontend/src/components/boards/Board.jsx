import React, { useState } from 'react'
import './Board.css'
import { MoreHorizontal } from 'react-feather'
import Card from '../card/Card'
import Editable from '../editable/Editable'
import Dropdown from '../dropdown/Dropdown'

const Board = () => {
    const [showDropdown, setShowDropdown] = useState(false)
    return (
        <div className='board'>
            <div className='board_top'>
                <p className='board_top_title'>To Do <span> 2</span></p>
                <div className="board_top_more">
                    <div onClick={()=>setShowDropdown(true)}>
                    <MoreHorizontal/>
                    </div>
                    {showDropdown && (
                        <Dropdown onClose={() => setShowDropdown(false)}>
                            <div className='board_dropdown'>
                                <p>Delete Board</p>
                            </div>
                        </Dropdown>
                    )}
                    
                </div>
            </div>
            <div className="board_cards custom-scroll">
                <Card />
                <Card />
                <Editable displayClass="board_cards_add" text="Add Card" placeholder="Enter Card Title" />
            </div>
        </div>
    )
}

export default Board