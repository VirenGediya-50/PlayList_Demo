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

    handleDragEnd = (event) => {
        const startIndex = event.dataTransfer.getData("startID");
        const parentID = event.dataTransfer.getData("parentId");
        const lastIndex = event.target.id;

        if( parentID ===  event.target.parentElement.id){
            let newArray= this.props.songData;
            
            if(startIndex > lastIndex){
                const newObj = newArray[startIndex];
                newArray.splice((startIndex), 1);
                newArray.splice(lastIndex, 0, newObj);
            }else{
                const newObj = newArray[startIndex];
                newArray.splice((startIndex), 1);
                newArray.splice(lastIndex, 0, newObj);
            }

            this.props.updateSongList(newArray, parentID);
        }else{
            alert("Side is not Match");
        }
    }
    
    handleDragStart = (event, result) => {
        event.dataTransfer.setData("startID", event.target.id);
        event.dataTransfer.setData("parentId", event.target.parentElement.id);
    }

    render() {
        const { title, songLimit, songData, totalTime, mainClassName, bodyClassName } = this.props;
        return (
            <Card className={mainClassName}>
                <Card.Header>
                    <h4>{title + " (" +convertNumberToTime(totalTime)+")"}</h4>
                    <h6><i>{'Limit : '+ convertNumberToTime(songLimit)+ ' minites only' }</i></h6>
                </Card.Header>
                <Card.Body id={title} className={bodyClassName}>
                    <SongList 
                        title={title}
                        draggable={true}
                        songData={songData}
                        leftIcon={require('../../Assets/Images/close.png')}
                        leftIconOnClick = {(index) => this.handleRemoveSong(index, title)}
                        leftIconClassName={'left_icon'}
                        listClassName={'list_class'}
                        handleDragEnd ={this.handleDragEnd}
                        handleDragStart ={this.handleDragStart}
                    />
                </Card.Body>
            </Card>
        )
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        removeSong : (index, title) => dispatch(Actions.removeSong(index, title)),
        updateSongList : (updatedArray, side) => dispatch(Actions.updateSongList(updatedArray, side))
    }
}

export default connect(null , mapDispatchToProps)(PlayList)