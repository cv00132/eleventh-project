import $ from 'jquery';
import token from "./client-id";

function resultsTemplate(track) {
    return `
    <div class = "searchResults">
      <div class = "image">
        <span>${track.stream}?client_id=${token}</span>
          <img src="${track.artwork || track.userImage}"  class= "spinning">
          <div class="trackInfo">
            ${track.title}
            <br>
            ${track.artist}
          </div>
      </div>
      </div>
  `
};

function playStream(track) {
    $(".musicPlayer").empty();
    return $(".musicPlayer").html(`
      <audio src = "${track}" controls autoplay id= "audioTag">
      </audio>
    `)
};

export {
    resultsTemplate,
    playStream
};
