// Action creator
export const selectSong = (song) => {
    // Return an action
    console.log(song);
    return {
        type: 'SONG_SELECTED',
        payload: {
            song: song
        }
    };
};
