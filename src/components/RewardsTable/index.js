import React, { useState } from 'react';
import './style.scss';
import { Table } from 'reactstrap';


const _ = require("lodash")


export  default function RewardsTable(props) {

    return (
        <div>
            <h3>Rewards Table</h3>

            <Table striped bordered hover size="sm"  id={'rewardsTable'}>
                <thead>
                <tr>
                    <th>Categories</th>
                    <th colSpan={5}>Rewards</th>
                </tr>
                <tr>
                    <th></th>
                    <th>R1</th>
                    <th>R2</th>
                    <th>R3</th>
                    <th>R4</th>
                    <th>R5</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="row">C1</th>
                    <th>R1</th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                </tr>
                <tr>
                    <th scope="row">C2</th>
                    <th></th>
                    <th>R2</th>
                    <th></th>
                    <th></th>
                    <th></th>
                </tr>
                <tr>
                    <th scope="row">C3</th>
                    <th></th>
                    <th></th>
                    <th>R3</th>
                    <th></th>
                    <th></th>
                </tr>
                <tr>
                    <th scope="row">C4</th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th>R4</th>
                    <th></th>
                </tr>
                <tr>
                    <th scope="row">C5</th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th>R5</th>
                </tr>
                </tbody>
            </Table>

        </div>
    )
}
