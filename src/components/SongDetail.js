import React from 'react';
import {connect} from 'react-redux';

//Problem with song object to solve

const SongDetail = ({ song }) => {
    if(!song) {
        return <div>Select a song</div>
    }
    return (
        <div>
            <h3>Details for:</h3>
            <p>
                Title: {song.song.title}
                <br/>
                Duration: {song.song.duration}
            </p>
        </div>
    );
}


const mapStateToProps = (state) => {
    return {song: state.selectedSong};
}

export default connect(mapStateToProps)(SongDetail);