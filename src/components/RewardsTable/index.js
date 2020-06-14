import React, { useState } from 'react';
import './style.scss';
import { Table } from 'reactstrap';
import { Reward } from './Reward'
// import { Dustbin } from './Dustbin'
import { TableCell } from './TableCell'

const _ = require("lodash")


export  default function RewardsTable(props) {

    return (
        <div>
            <Table bordered  striped size="sm" id={'rewardsTable'}>
                <thead>
                <tr>
                    <th>Rewards</th>
                    <th colSpan={5}>Categories</th>
                </tr>
                <tr>
                    <th></th>
                    <th>C1</th>
                    <th>C2</th>
                    <th>C3</th>
                    <th>C4</th>
                    <th>C5</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td scope="row"><Reward name={'R1'} /></td>
                    <td><TableCell name={'C1'}/></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td scope="row"><Reward name={'R2'} /></td>
                    <td></td>
                    <td><TableCell name={'C2'} /></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td scope="row"><Reward name={'R3'} /></td>
                    <td></td>
                    <td></td>
                    <td><TableCell name={'C3'} /></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td scope="row"><Reward name={'R4'} /></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td><TableCell name={'C4'} /></td>
                    <td></td>
                </tr>
                <tr>
                    <td scope="row"><Reward name={'R5'} /></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td><TableCell name={'C5'} /></td>
                </tr>
                </tbody>
            </Table>

        </div>
    )
}
