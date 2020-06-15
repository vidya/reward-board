import React from 'react'
import { useDrag } from 'react-dnd'
import { ItemTypes } from '../ItemTypes'

const style = {
    cursor: 'move',
}

export const RewardItemSource = ({ name }) => {
    const [{ isDragging }, drag] = useDrag({
        item: { name, type: ItemTypes.Reward },
        end: (item, monitor) => {
            const dropResult = monitor.getDropResult()
            if (item && dropResult) {
                console.log(`RewardItemSource: You dropped ${item.name} into ${dropResult.name}!`)
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
