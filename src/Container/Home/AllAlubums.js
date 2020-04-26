import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Row, Col, Image } from 'react-bootstrap';
import Actions from '../../Actions';
import SongList from '../../CommonComponent/songList';

export class AllAlubums extends Component {

    handleAddSong = (index, key) => {
        let songDetail  = this.props.albumList[key].songList[index];
        this.props.addSong(songDetail);
    }

    render() {
        const { albumList } = this.props;        
        return (
            <Row className={'album_row'}>
            {
                albumList.map((item, key) => {
                    const { singerName, subTitle, singerImage, songList } = item;
                    return (
                        <Col xs={4} md={4} key={key} >
                            <h3>{singerName}</h3>
                            <h6><i>{subTitle}</i></h6>
                            <Image src={singerImage} className={'singer_image'}/>
                            <SongList 
                                songData={songList}
                                rightIcon={require('../../Assets/Images/addIcon.png')}
                                rightIconOnClick = {(index) => this.handleAddSong(index, key)}
                                listClassName = {'list_class'}
                            />
                        </Col>
                    )
                })
            }
            </Row>
        )
    }
}

const mapStateToProps = (state) => {
    const { albumList } = state.songListReducer;
    return {
        albumList
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addSong : (songDetail) => dispatch(Actions.addSong(songDetail))
    }
    
}

export default connect(mapStateToProps, mapDispatchToProps)(AllAlubums)
