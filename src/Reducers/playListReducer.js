import { ADD_SONG, REMOVE_SONG, UPDATE_SONG_LIST } from "../Actions/actionType";


const InitialState = {
    sideASongs : { totalTime:0 , songLimit : 1320, songs: [] },
    sideBSongs : { totalTime:0 , songLimit : 1320, songs: [] },
}

const playListReducer = (state = InitialState, action) => {
    switch (action.type) {
        case ADD_SONG:
            let newSongsArray = [];
            if((state.sideASongs.totalTime + action.payload.time) > state.sideASongs.songLimit || state.sideASongs.songs.length >= 8){
                console.log((state.sideBSongs.totalTime + action.payload.time) < state.sideBSongs.songLimit || state.sideBSongs.songs.length >= 8 );
                
                if((state.sideBSongs.totalTime + action.payload.time) < state.sideBSongs.songLimit && state.sideBSongs.songs.length < 8 ){
                    let totalBSongsTime = state.sideBSongs.totalTime + action.payload.time;
                    newSongsArray = state.sideBSongs.songs;
                    newSongsArray.push(action.payload)
                    return {...state, sideBSongs : { totalTime: totalBSongsTime ,songLimit: 1320, songs: [...newSongsArray]}};
                }else{
                    alert("Side B is full.")
                    return state;
                }
            }else{
                let totalASongsTime = state.sideASongs.totalTime + action.payload.time;
                newSongsArray = state.sideASongs.songs;
                newSongsArray.push(action.payload)
                return {...state, sideASongs : { totalTime: totalASongsTime ,songLimit: 1320, songs: [...newSongsArray]}};
            }
        case REMOVE_SONG:
            if(action.title === 'Side A'){
                let songsArray = state.sideASongs.songs;
                let totalTime = state.sideASongs.totalTime - songsArray[action.payload].time;
                songsArray.splice(action.payload,1);
                return {...state, sideASongs : { totalTime: totalTime ,songLimit: 1320, songs: [...songsArray]}};
            }else{
                let songsArray = state.sideBSongs.songs;
                let totalTime = state.sideBSongs.totalTime - songsArray[action.payload].time;
                songsArray.splice(action.payload,1);
                return {...state, sideBSongs : { totalTime: totalTime ,songLimit: 1320, songs: [...songsArray]}};
            }
        case UPDATE_SONG_LIST: 
            if(action.title === 'Side A'){
                return {...state, sideASongs : { totalTime: state.sideASongs.totalTime ,songLimit: 1320, songs: [...action.payload]}};
            }else{
                return {...state, sideBSongs : { totalTime: state.sideBSongs.totalTime ,songLimit: 1320, songs: [...action.payload]}};
            }

        default:
            return state;
    }

}

export default playListReducer;