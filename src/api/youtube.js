import axios from 'axios';
const youtubeKey = 'AIzaSyCreoRT-BLP3ggBjEqGqoP-DniKux_8avU';
const url = "https://www.googleapis.com/youtube/v3";

export default axios.create({
    baseURL: url,
    params:{
     part: 'snippet',
     type: 'video',
     key: youtubeKey,
     maxResults: 5   
    }
});