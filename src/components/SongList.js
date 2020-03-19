import React, { Component } from 'react';
import { connect } from "react-redux";
import { selectSong } from "../actions";

class SongList extends Component {
    constructor(props) {
        console.log(props);
        super(props);
        this.state = {
        }
    }
    click = (song) => {
       this.props.dispatch(selectSong(song));
       console.log(this.props);
    }
    render() {
        return (
            <div className="ui list">
                    {this.props.songs.map(song => {
                        return (
                        <div className="item" key={song.title} onClick={() => this.click(song)}>
                            <div className="right floated content">
                                <button className="ui button primary">Select</button>
                            </div>
                            <div className="content">{song.title}</div>
                            <div className="content">{song.duration}</div>
                        </div>
                        );
                    })}
            </div>
        )
    }
}

const getMyState = state => {
    return { 
        songs: state.songs,
        selectedSong: state.selectedSong
    };
}

export default connect(getMyState)(SongList);