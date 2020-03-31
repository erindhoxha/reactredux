import React from 'react';
import { selectSong } from '../actions';
import SongList from './SongList';
import SongDetail from './SongDetail';

const App = (props) => {
    return (
      <div className="ui container grid">
        <div className="ui row">
          <div className="desktop sixteen wide tablet six wide computer column mobile six wide">
            <h1>Select</h1>
            <SongList />
          </div>
          <div className="desktop sixteen wide tablet eight wide computer column mobile six wide">
            <h1>Select</h1>
            <SongDetail />
          </div>
        </div>
      </div>
    );
}

export default App;