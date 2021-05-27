const baseURL = 'https://www.apitutor.org/spotify/simple/v1/search';

// Note: AudioPlayer is defined in audio-player.js
const audioFile = 'https://p.scdn.co/mp3-preview/bfead324ff26bdd67bb793114f7ad3a7b328a48e?cid=9697a3a271d24deea38f8b7fbfa0e13c';
const audioPlayer = AudioPlayer('.player', audioFile);

const search = (ev) => {
    const term = document.querySelector('#search').value;
    console.log('search for:', term);
    // issue three Spotify queries at once...
    getTracks(term);
    getAlbums(term);
    getArtist(term);
    if (ev) {
        ev.preventDefault();
    }
}

const playTrack = (ev) => {
   // console.log(ev.currentTarget)
    const elem = ev.currentTarget;
    const previewURL = elem.dataset.previewTrack;
    console.log(previewURL)

    if (previewURL) {
         audioPlayer.setAudioFile(previewURL)
         audioPlayer.play()
    } else {
        console.log('there is no preview available')}

    document.querySelector('footer .track-item').innerHTML = elem.innerHTML;

    };




const getTracks = (term) => {
    document.querySelector('#tracks').innerHTML=``;
    console.log(`
        get tracks from spotify based on the search term
        "${term}" and load them into the #tracks section 
        of the DOM...`);
    url = baseURL + "?type=track&q=" + term;
    fetch (url)
        .then(response => response.json())
        .then(data => displayTracks(data));
};

 const getAlbums = (term) => {
    document.querySelector('#albums').innerHTML=``;
    console.log(`
        get albums from spotify based on the search term
        "${term}" and load them into the #albums section 
        of the DOM...`);
    url = baseURL + "?type=album&q=" + term;
    fetch (url)
        .then(response => response.json())
        .then(data => displayAlbums(data));
};

const getArtist = (term) => {
    url = baseURL + "?type=artist&q=" + term;
    console.log('hello')
    fetch (url)
        .then(response => response.json())
        .then(data => displayArtist(data[0]));
    };


document.querySelector('#search').onkeyup = (ev) => {
    // Number 13 is the "Enter" key on the keyboard
    console.log(ev.keyCode);
    if (ev.keyCode === 13) {
        ev.preventDefault();
        search();
    }

};

const displayTracks = (foundtracks) => {
    if (foundtracks[0] == null){
        document.querySelector("#tracks").innerHTML = "no tracks found";
    } else {
        const lentracks = foundtracks.length;
        for (t = 0; t < Math.min(5,lentracks);t++){
            template = `<section class="track-item preview" data-preview-track="${foundtracks[t].preview_url}" onclick="playTrack(event);">
                            <img src="${foundtracks[t].album.image_url}">
                            <i class="fas play-track fa-play" aria-hidden="true"></i>
                            <div class="label">
                                <h3>${foundtracks[t].name}</h3>
                                <p> ${foundtracks[t].artist.name} </p>
                            </div>
                        </section>`;
            document.querySelector("#tracks").innerHTML += template;   } 

    }
}

const displayArtist = (art) => {
    if (art == null){
        document.querySelector("#artist").innerHTML = "no artist found";
     } else {

    template = `<section class="artist-card" id="${art.id}">
                    <div>
                    <img src="${art.image_url}">
                        <h3>${art.name}</h3>
                        <div class="footer">
                            <a href="${art.spotify_url}" target="_blank">
                                view on spotify
                            </a>
                        </div>
                    </div>
                </section>`;
        document.querySelector('#artist').innerHTML = template;
        }
    }


const displayAlbums = (foundalbum) => {
    if (foundalbum[0] == null){
         document.querySelector("#albums").innerHTML = "no albums found";

    } else {
        console.log(foundalbum)
        const lenalbums= foundalbum.length;
        for (a = 0; a < lenalbums;a++){
        template = `<section class="album-card" id="${foundalbum[a].id}">
                    <div>
                         <img src="${foundalbum[a].image_url}">
                        <h3>${foundalbum[a].name}</h3>
                        <div class="footer">
                            <a href="${foundalbum[a].spotify_url}" target="_blank">
                                view on spotify
                            </a>
                        </div>
                    </div>
                </section>`;
    document.querySelector('#albums').innerHTML += template;  }
        }
    }


