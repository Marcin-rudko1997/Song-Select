import {combineReducers} from 'redux';

const songListReducer = () => {
    return [
        {title: 'No Scrubs', duration: '3:45'},
        {title: 'Macarena', duration: '5:23'},
        {title: 'Barbie girl', duration: '4:15'},
        {title: 'Yeah', duration: '2:35'}
    ]
};

const selectedSongReducer = (selectedSong = null, action) => {
    if(action.type === 'SONG_SELECTED') {
        return action.payload;
    }
    return selectedSong;
}

export default combineReducers({
    songs: songListReducer,
    selectedSong: selectedSongReducer
})