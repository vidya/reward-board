import React from 'react'
import { useDrop } from 'react-dnd'
import { ItemTypes } from '../ItemTypes'
import { RewardItemSource }  from "../RewardItemSource";

const style = {
    // height: '4rem',
    // width: '4rem',
    // height: '12rem',
    // width: '12rem',

    // marginRight: '1.5rem',
    // marginBottom: '1.5rem',
    // color: 'lightgreen',
    // padding: '1rem',
    // textAlign: 'center',
    // fontSize: '1rem',
    // lineHeight: 'normal',
    // float: 'left',
}

export const CategoryDropTarget = (props) => {
    const myDropTarget = (props) => {
        alert(`dropItem: ${props.name}`)
        return <div ref={drop}>{props.name}</div>
    }
    const [{ canDrop, isOver, dropResult, dropItem }, drop] = useDrop({
        accept: ItemTypes.Reward,
        drop: () => (
            { name: myDropTarget(dropItem) }
            ),
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
            dropResult: monitor.getDropResult(),
            dropItem: monitor.getItem()
        }),
    })
    const isActive = canDrop && isOver
    // let backgroundColor = '#222'
    let backgroundColor = 'green'
    if (isActive) {
        backgroundColor = 'darkgreen'
        console.log(`(category, reward): (${props.name}, ${dropItem.name})`)
        alert(`(category, reward): (${props.name}, ${dropItem.name})`)

    } else if (canDrop) {
        backgroundColor = 'darkkhaki'
    }

    if (dropItem) {
        return (
            <div ref={drop} style={{ ...style, backgroundColor }}>
                { props.name}
                <RewardItemSource name={dropItem.name} />
            </div>
        )
    }
    else {
        return (
            <div ref={drop} style={{ ...style, backgroundColor }}>
                {/*{isActive ? 'Drop' : 'Drag'}*/}
                {''}
            </div>
        )
    }
}
