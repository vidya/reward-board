import React from 'react';
import './App.css';
// import {RewardsTable} from '../src/Components/RewardsTable/'
import RewardsTable from "./components/RewardsTable/"
import Container from "./components/RewardsTable/Container"
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'


function App() {
  return (
    <div className="App">
      <header className="App-header">
          Rewards and Categories
      </header>
        <DndProvider backend={HTML5Backend}>
            <RewardsTable />
        </DndProvider>

    </div>
  );
}

export default App;
