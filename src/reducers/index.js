import { combineReducers } from "redux";

const songsReducer = () => {
    return [
        {
            title: 'First song',
            duration: '4:05',
        },
        {
            title: 'Second song',
            duration: '3:45',
        },
        {
            title: 'Third song',
            duration: '2:15',
        }
    ];
}

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type == 'SONG_SELECTED') {
        return action.payload.song;
    }
    return selectedSong;
}

export default combineReducers({
    songs:songsReducer,
    selectedSong: selectedSongReducer
})
