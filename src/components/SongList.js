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
    }
    render() {
        return (
            <div className="ui list">
                    {this.props.songs.map(song => {
                        return (
                        <div className="content" key={song.title} onClick={() => this.click(song)}>
                            <a className="item">{song.title}</a>
                            <div className="description">{song.duration}</div>
                        </div>
                        );
                    })}
            </div>
        )
    }
}

const getMyState = state => {
    return { songs: state.songs };
}

export default connect(getMyState)(SongList);