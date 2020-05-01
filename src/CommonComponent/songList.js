import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { convertNumberToTime } from '../Methods';

const SongList = (props) => {
    const { songData, title, mainClass, draggable, rightIcon, handleDragEnd, handleDragStart, leftIcon, rightIconOnClick, leftIconOnClick, rightIconClassName, leftIconClassName, listClassName  } = props;

    return (
        <ListGroup variant="flush" id={title} className={mainClass} >
            {songData.length > 0 ?
                songData.map((song, index) => (
                    <ListGroup.Item id={index} className={listClassName} draggable={draggable}
                        onDragStart={(event) => handleDragStart(event)}
                        onDrop={(event) => handleDragEnd(event)} 
                        onDragOver={(e) => e.preventDefault()}
                    >
                        {
                            rightIcon && (
                                <img
                                    alt={''}
                                    src={rightIcon}
                                    width={20}
                                    height={20}
                                    onClick={() => rightIconOnClick(index)}
                                    className={rightIconClassName}
                                />
                            )
                        }
                        {"  "+ (index + 1)}. {song.songName} ({convertNumberToTime(song.time)})

                        {
                            leftIcon && (
                                <img
                                    alt={''}
                                    width={20}
                                    height={20}
                                    src={leftIcon}
                                    onClick={() => leftIconOnClick(index)}
                                    className={leftIconClassName}
                                />
                            )
                        }
                    </ListGroup.Item>
                ))
            :
                <h6 className={'label_class'}><i>No songs available</i></h6>
            }
        </ListGroup>
    );
}
 
export default SongList;