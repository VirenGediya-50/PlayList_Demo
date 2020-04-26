import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { convertNumberToTime } from '../Methods';
 
const SongList = (props) => {
    const { songData, mainClass, rightIcon, leftIcon, rightIconOnClick, leftIconOnClick, rightIconClassName, leftIconClassName, listClassName  } = props;
    
    return (
        <ListGroup variant="flush" className={mainClass}>
            {songData.length > 0 ?
                songData.map((song, index) => (
                    <ListGroup.Item key={index} className={listClassName}>
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