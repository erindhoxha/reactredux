import React from 'react';
import { selectSong } from '../actions';
import SongList from './SongList';

const App = (props) => {
    return (
        <div>
            <h1>Select</h1>
            <SongList/>
        </div>
    )
}

export default App;