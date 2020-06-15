import React from 'react';
import './App.css';

import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

import RewardBoard from "./components/RewardBoard/"

function App() {
  return (
    <div className="App">
      <header className="App-header">
          Reward Board
      </header>
        <DndProvider backend={HTML5Backend}>
            <RewardBoard />
        </DndProvider>

    </div>
  );
}

export default App;
