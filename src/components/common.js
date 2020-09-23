export const updateObjectInArray = (songs, titleSong, newObjProps) => {
    return songs.map(song => {
        if (song.title.label === titleSong) {
            return {...song, ...newObjProps}
        }
        return song;
    })
}