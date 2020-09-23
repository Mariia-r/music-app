import * as axios from "axios";

const musicUrl = "https://itunes.apple.com/us/rss/topalbums/limit=100/json";

export const getSongsData = () => {
    return axios.get(musicUrl)
        .then(response => {
            return response.data.feed.entry;
        })
        .catch(error => console.log(error));
};
