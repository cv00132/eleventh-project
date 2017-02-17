import $ from 'jquery';
import getMusic from './ajax-request.js';
import token from './client-id.js';


$("#search").click(initiateSearch);

function initiateSearch (event) {
  var value = $(".searchBar").val();
  getMusic(value).then(sortData);

}

function sortData(data) {
  for (var i = 0, i < data.length; i++) {
  var track = {};
  track.artwork_url = data[i].artwork_url;
  console.log(track)
  }
}
