import React from 'react';
import { connect } from "react-redux";

const songDetail = ({ selectedSong }) => {
    if (!selectedSong) {
        return <div>Select a song</div>
    } else {
        return (
          <div>
            <h3>Title:</h3>
            <p>{selectedSong.title}</p>
            <h3>Duration:</h3>
            <p>{selectedSong.duration}</p>
          </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
      selectedSong: state.selectedSong
    };
}

export default connect(mapStateToProps, {})(songDetail);