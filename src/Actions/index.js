import { ADD_SONG, REMOVE_SONG } from "./actionType";

const addSong = (songDetails) => {
    return {
        type: ADD_SONG,
        payload : songDetails
    }
}

const removeSong = (index, title) => {
    return {
        type: REMOVE_SONG,
        payload : index,
        title : title
    }
}

export default {
    addSong,
    removeSong
}