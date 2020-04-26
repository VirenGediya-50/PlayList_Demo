import React, { Component } from 'react'
import { connect } from 'react-redux'
import PlayList from './PlayList';

export class AllPlaylists extends Component {
    render() {
        const { sideASongs, sideBSongs } = this.props;
        
        return (
            <div>
                <PlayList 
                    title={'Side A'} 
                    totalTime={sideASongs.totalTime} 
                    songLimit={sideASongs.songLimit} 
                    songData={sideASongs.songs} 
                    bodyClassName={'track_body'}
                />
                <PlayList 
                    title={'Side B'} 
                    totalTime={sideBSongs.totalTime} 
                    songLimit={sideBSongs.songLimit} 
                    songData={sideBSongs.songs}
                    mainClassName={'track_b_class'}
                    bodyClassName={'track_body'}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    
    const { sideASongs, sideBSongs } = state.playListReducer;
    return { 
        sideASongs,
        sideBSongs
    }
}


export default connect(mapStateToProps)(AllPlaylists)
