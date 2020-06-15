import React, { useState } from 'react';
import './style.scss';

import { Table } from 'reactstrap';
import { RewardItemSource } from './RewardItemSource'

import { CategoryDropTarget } from './CategoryDropTarget'

const _ = require("lodash")

const  CategoryHeadings = ({targets}) => (
    <ul id={'categoryHeadings'}>
        {
            targets.map(target => <li key={`${target.id}`}>{`${target.name}`}</li>)
        }
    </ul>
)

const SwimLane = ({ lane }) => (
    <ul className={'swimLane'}>
        <li className={'laneName'}>{`${lane.name}`}</li>
        {lane.categoryRewards.map(reward => <li className={'swimLaneReward'}>{`${reward.name}`}</li>)}
    </ul>
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
    swimLanes[0].categoryRewards.push({id: "1", name:"R1"})
    swimLanes[1].categoryRewards.push({id: "2", name:"R2"})
    swimLanes[1].categoryRewards.push({id: "3", name:"R2"})

    return (
        <div id={'rewardsBoard'}>
            <div id={'headingsRow'}>
                <ul id={'colHeadings'}>
                   <li className={'colHeading'} >Rewards</li>
                   <li className={'colHeading'} >Categories</li>
                </ul>
            </div>
            <CategoryHeadings targets={categoryDropTargets} />
            <SwimLanes lanes={swimLanes} />
        </div>
    )

    // return (
    //     <div>
    //         <Table bordered  striped size="sm" id={'rewardsTable'}>
    //             <thead>
    //             <tr>
    //                 <th>Rewards</th>
    //                 <th colSpan={5}>Categories</th>
    //             </tr>
    //             <tr>
    //                 <th>{'xyz'}</th>
    //                 <React.Fragment>
    //                     < categoryHeadings />
    //                 </React.Fragment>
    //
    //             </tr>
    //             </thead>
    //             <tbody>
    //             <tr>
    //                 <td scope="row"><RewardItemSource name={'R1'} /></td>
    //                 <td><CategoryDropTarget name={'C1'}/></td>
    //                 <td></td>
    //                 <td></td>
    //                 <td></td>
    //                 <td></td>
    //             </tr>
    //             <tr>
    //                 <td scope="row"><RewardItemSource name={'R2'} /></td>
    //                 <td></td>
    //                 <td><CategoryDropTarget name={'C2'} /></td>
    //                 <td></td>
    //                 <td></td>
    //                 <td></td>
    //             </tr>
    //             <tr>
    //                 <td scope="row"><RewardItemSource name={'R3'} /></td>
    //                 <td></td>
    //                 <td></td>
    //                 <td><CategoryDropTarget name={'C3'} /></td>
    //                 <td></td>
    //                 <td></td>
    //             </tr>
    //             <tr>
    //                 <td scope="row"><RewardItemSource name={'R4'} /></td>
    //                 <td></td>
    //                 <td></td>
    //                 <td></td>
    //                 <td><CategoryDropTarget name={'C4'} /></td>
    //                 <td></td>
    //             </tr>
    //             <tr>
    //                 <td scope="row"><RewardItemSource name={'R5'} /></td>
    //                 <td></td>
    //                 <td></td>
    //                 <td></td>
    //                 <td></td>
    //                 <td><CategoryDropTarget name={'C5'} /></td>
    //             </tr>
    //             </tbody>
    //         </Table>
    //
    //     </div>
    // )
}
