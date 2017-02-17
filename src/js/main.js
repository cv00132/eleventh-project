import $ from 'jquery';
import token from './client-id';
import getMusic from './ajax-request';
import { resultsTemplate, playStream } from "./template";


$("#search").click(initiateSearch);

function initiateSearch (event) {
  event.preventDefault();
  $(".results").empty();
  var value = $(".searchBar").val();
  getMusic(value).then(sortData);

}

function sortData (data) {
    var track = {};
  for (var i = 0; i < data.length; i++) {
    var dataPulled = data[i];
    track.artwork = dataPulled.artwork_url;
    track.userImage = dataPulled.user.avatar_url;
    track.title = dataPulled.title;
    track.artist = dataPulled.user.username;
    track.stream = dataPulled.stream_url;
    $(".results").append(resultsTemplate(track));
  }
    $(".image").click(playAudio)
}

function playAudio (event) {
  var target = $(event.currentTarget)
  // console.log(target)
  var streamLink = target.children("span").html()
  playStream(streamLink)
}
