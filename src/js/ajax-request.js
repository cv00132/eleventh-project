import $ from 'jquery';
import token from './client-id';

function getMusic(search) {
 return $.ajax({
    url: `https://api.soundcloud.com/tracks?client_id=${token}`,
    dataType: "json",
    data: {
      q: search
    }
  })
};

export default getMusic;
