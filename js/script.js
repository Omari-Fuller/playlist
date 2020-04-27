let songList = ["Dior", "TheBox","NoticeMe","outoflove","Leanwitme"]

let songLength = ["300", "240", "280", "180", "200"]
let songArtists= ["popsmoke", "roddyrich", "pnbrock", "liltecca", "juicewrld"];

///songList.forEach(function(song) {
   /// $('#songs').append("<ul>" + song  + "</ul>");
///});

///songLength.forEach(function(song) {
   /// $("#lengths").append("<ul>" + song  + "</ul>");
///});

///songArtists.forEach(function(song) {
   /// $("#artists").append ("<ul>" + song  + "</ul>");
///});

let Diorsong= {
artists:"popsmoke",
songlengths:"300",
song:"dior",
};

let theboxsong={
   artists:"roddyrich",
   songlengths:"240", 
    song:"thebox",
}

let noticemesong={
    artists: "pnbrock",
    songlengths: "280",
    song:"noticeme",
}

let outoflovesong={
    artists: "liltecca",
    songlengths: "180",
    song:"outoflove",
}

let leanwitmesong={
    artists: "juicewrld",
    songlengths: "200",
    song:"leanwitme",
}

let playlist=[Diorsong, theboxsong, noticemesong, outoflovesong, leanwitmesong,];

playlist.forEach(function(songobject) {
    $('#songs').append("<ul>"  +  songobject.song + "</ul>" );
    $('#artists').append("<ul>"  +  songobject.artists + "</ul>" );    
    $('#lengths').append("<ul>"  +  songobject.songlengths + "</ul>" );
});