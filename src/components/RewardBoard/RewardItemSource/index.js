import React from 'react'
import { useDrag } from 'react-dnd'
import { ItemTypes } from '../ItemTypes'

const style = {
    // border: '1px dashed gray',
    // backgroundColor: 'white',
    // padding: '0.5rem 1rem',
    // marginRight: '1.5rem',
    // marginBottom: '1.5rem',
    cursor: 'move',
    // float: 'left',
}

export const RewardItemSource = ({ name }) => {
    const [{ isDragging }, drag] = useDrag({
        item: { name, type: ItemTypes.Reward },
        end: (item, monitor) => {
            const dropResult = monitor.getDropResult()
            if (item && dropResult) {
                console.log(`RewardItemSource: You dropped ${item.name} into ${dropResult.name}!`)
                // alert(`You dropped ${item.name} into ${dropResult.name}!`)
            }
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    })
    const opacity = isDragging ? 0.4 : 1
    return (
        <div ref={drag} style={{ ...style, opacity }}>
            {name}
        </div>
    )
}
