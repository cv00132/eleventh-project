import $ from 'jquery';
import token from "./client-id";

function resultsTemplate(track) {
    return `
    <div class = "searchResults">
    <div class = "image">
    <span>${track.stream}?client_id=${token}</span>
      <img src="${track.artwork || track.userImage}">
    </div>
    <div class="songTitle">
      ${track.title}
    </div>
    <div class="bandName">
      ${track.artist}
    </div>
    </div>
  `
};

function playStream(track) {
    $(".musicPlayer").empty();
    return $(".musicPlayer").html(`
      <audio src = "${track}" controls autoplay>
      </audio>
    `)
};

export {
    resultsTemplate,
    playStream
};
