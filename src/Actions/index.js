import { ADD_SONG, REMOVE_SONG, UPDATE_SONG_LIST } from "./actionType";

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

const updateSongList = (updatedArray, title) => {
    return {
        type : UPDATE_SONG_LIST,
        payload : updatedArray,
        title : title
    }
}

export default {
    addSong,
    removeSong,
    updateSongList
}