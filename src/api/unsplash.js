import axios from 'axios';

export default axios.create({
  headers: {
    Authorization: `Client-ID ${process.env.ACCESS_KEY}`
  },

  baseURL: 'https://api.unsplash.com'
});
