let songList = ["Dior", "TheBox","NoticeMe","Ballin","Leanwitme"]

let songLength = ["300", "240", "280", "180", "200"]


songList.forEach(function(song) {
    $('#songs').append("<ul>" + song  + "</ul>");
});

songLength.forEach(function(song) {
    $(songlength).append (song +"</br>")
});


