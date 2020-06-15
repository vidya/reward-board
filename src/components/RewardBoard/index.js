import React, { useState } from 'react';
import './style.scss';

import { RewardItemSource } from './RewardItemSource'
import { CategoryDropTarget } from './CategoryDropTarget'

const  CategoryHeadings = ({targets}) => (
    <ul id={'categoryHeadings'}>
        {
            targets.map(target => <li key={`${target.id}`}>{`${target.name}`}</li>)
        }
    </ul>
)

const SwimLane = ({ lane }) => (
    <ul className={'swimLane'}>
        <li className={'laneName'}>
            <RewardItemSource name={`${lane.name}`} />
        </li>
        {lane.categoryRewards.map(reward => (
            <li  key={`${reward.id}`} className={'swimLaneReward'}>
                <CategoryDropTarget
                    laneName={`${lane.name}`}
                    name={`${reward.name}`}
                    />
            </li>))
        }
    </ul>
)

const TopColumnHeadings = () => (
    <div id={'headingsRow'}>
        <ul id={'colHeadings'}>
            <li className={'colHeading'} >Rewards</li>
            <li className={'colHeading'} >Categories</li>
        </ul>
    </div>
)

const SwimLanes = ({lanes}) => (
    <div id={'swimLanes'}>
        <ul id={'swimLanes'}>
            {
                lanes.map(lane => <li key={`${lane.id}`}>
                    <SwimLane lane={lane} />
                </li>)
            }
        </ul>
    </div>
)

export  default function RewardBoard(props) {
    const rewardItemSources = [
        { id: 1, name: "R1"},
        { id: 2, name: "R2"},
        { id: 3, name: "R3"},
        { id: 4, name: "R4"},
        { id: 5, name: "R5"},
    ]

    const categoryDropTargets = [
        { id: 1, name: "C1"},
        { id: 2, name: "C2"},
        { id: 3, name: "C3"},
        { id: 4, name: "C4"},
        { id: 5, name: "C5"},
    ]

    const [dropTargets, setDropTargets] = useState(categoryDropTargets)

    let swimLanes = rewardItemSources.map(item => ({id: item.id, name: item.name, categoryRewards: []}))
    swimLanes[0].categoryRewards.push({id: "1", name:"C1"})
    swimLanes[1].categoryRewards.push({id: "2", name:"C2"})
    swimLanes[1].categoryRewards.push({id: "3", name:"C2"})

    return (
        <div id={'rewardsBoard'}>
            <TopColumnHeadings />

            <CategoryHeadings targets={categoryDropTargets} />
            <SwimLanes lanes={swimLanes} />
        </div>
    )
}
