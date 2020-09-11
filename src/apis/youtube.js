import axios from 'axios';

const KEY = 'AIzaSyADZ-D1iCyTIPMz9zoEW_IFVC0MSmxtK5I';


export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY
  }
});

