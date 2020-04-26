import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import { convertNumberToTime } from '../../Methods';
import SongList from '../../CommonComponent/songList';
import { connect } from 'react-redux';
import Actions from '../../Actions';

class PlayList extends Component {

    handleRemoveSong = (index, title) => {
        this.props.removeSong(index, title);
    }
    
    render() {
        const { title, songLimit, songData, totalTime, mainClassName, bodyClassName } = this.props;
        return (
            <Card className={mainClassName}>
                <Card.Header>
                    <h4>{title + " (" +convertNumberToTime(totalTime)+")"}</h4>
                    <h6><i>{'Limit : '+ convertNumberToTime(songLimit)+ ' minites only' }</i></h6>
                </Card.Header>
                <Card.Body className={bodyClassName}>
                    <SongList 
                        songData={songData}
                        leftIcon={require('../../Assets/Images/close.png')}
                        leftIconOnClick = {(index) => this.handleRemoveSong(index, title)}
                        leftIconClassName={'left_icon'}
                        listClassName={'list_class'}
                    />
                </Card.Body>
            </Card>
        )
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        removeSong : (index, title) => dispatch(Actions.removeSong(index, title))
    }
}

export default connect(null , mapDispatchToProps)(PlayList)