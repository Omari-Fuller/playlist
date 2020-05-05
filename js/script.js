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



$("#add").click(function(){
    var userSong=$("#song").val();
    var usersongartists=$("#artist").val();
    var songlengths=$("#length").val();
    let newobject= {
        song: userSong,
        artists: usersongartists,
        songlengths :songlengths,
    }
    playlist.push(newobject);
   $('#songs').html("");/// clears everything in songs
    playlist.forEach(function(songobject) {
        $('#songs').append("<ul>"  +  songobject.song +" " +songobject.artists+" " + songobject.songlengths +"</ul>" );
   });
  
});
