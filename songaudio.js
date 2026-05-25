const songs = [{
    title:"Tanjiro no uta",
    artist:"Akano",
    image:"tanjiro no uta.png",
    audio:"Kamado Tanjiro no UtaDemon Slayer_ Kimetsu no Yaiba (鬼滅の刃) [Demon Slayer ep 19 Ending Song].mp3"
},

{
    title:"ドキメキダイアリー",
    artist:"Pokemon Horizons,asmi",
    image:"Dokimeki-Diary.jpg",
    audio:"Dokimeki Diary (asmi ft. Chinozo)  Pokémon Horizons OP  ROMENGJP Lyrics.mp3"
},
 
{
    title:"Only One Story",
    artist:"Zerobaseone",
    image:"Only One Story.webp",
    audio:"only one zerobaseone.mp3"
},

{
    title:"Koiiro",
    artist:"Mosawo",
    image:"koiiro.png",
    audio:"Mosawo - Koiiro Lirik Terjemahan Indonesia もさを - 恋色.mp3",
},

{
    title:"lulu",
    artist:"Mrs.GREEN APLE",
    image:"lulu.webp",
    audio:"Mrs. GREEN APPLE「lulu.」Official Music Video [MjeiIal1ZR0].mp3"
},

{
    title:"Try Everything",
    artist:"Shakira",
    image:"zootopia.jpg",
    audio:"Shakira - Try Everything (Official Video).mp3"
},

{
    title:"Zoo-From",
    artist:"Disney,Shakira",
    image:"zo.jpg",
    audio:"Shakira - Zoo (From Zootopia 2).mp3"
},

{
    title:"starlight",
    artist:"ultra Chotokkyu",
    image:"starlight.jpg",
    audio:"STARLIGHT (Ultraman Ginga Ending) Lyrics.mp3"
},

{
    title:"あの夢をなぞって",
    artist:"YOASOBI",
    image:"yoa.jpg",
    audio:"YOASOBIあの夢をなぞって Official Music Video.mp3"
},

{
    title:"Kamado nezuko no uta",
    artist:"Akano",
    image:"nezuko no uta.jpg",
    audio:"Kamado Nezuko no Uta (From Demon Slayer_ Kimetsu no Yaiba).mp3"
},

{
    title:"When Can I See You Again?",
    artist:"Owl City - Wreck-It Ralph",
    image:"wreck it ralph.jpg",
    audio:"When Can I See You Again - Owl City HD (Wreck It Ralph Soundtrack).mp3"
},

{
    title:"The Story of Us",
    artist:"Milet",
    image:"The Story of Us.jpg",
    audio:"miletThe Story of UsMUSIC VIDEO (TVアニメ葬送のフリーレン第期エンディングテーマ).mp3"
},

{
    title:"Memories",
    artist:"Maki Otsuki",
    image:"Memories (one piece).jpg",
    audio:"One Piece - Memories [AMV].mp3"
},

{
    title:"Shape of My Heart",
    artist:"Backstreet Boys",
    image:"shape of my heart.jpg",
    audio:"Backstreet Boys - Shape of My Heart (Lyrics).mp3"
},

{
    title:"Your Letter",
    artist:"Lee Suhyun",
    image:"your latter.jpg",
    audio:"Your Letter (연의 편지).mp3"
},

{
    title:"The Fate of Ophelia",
    artist:"Taylor Swift",
    image:"taylor swift.jpg",
    audio:"Taylor Swift - The Fate of Ophelia.mp3"
},
];

const cards = 
document.querySelectorAll(".card-musik");

const playerImg = 
document.getElementById("player-img");

const playerTitle = 
document.getElementById("player-title");

const playerArtist =
document.getElementById("player-artist");

const audio = 
document.getElementById("audio-player");

const playBtn = 
document.getElementById("play-btn");

const nextBtn = 
document.getElementById("next-btn");

const prevBtn = 
document.getElementById("prev-btn");

let currentSong = 0;

/* klik card lagu */
cards.forEach((card, index) => {
    card.addEventListener("click", () => {
        currentSong = index;
        playerImg.src = 
        songs[index].image;

        playerTitle.innerHTML = 
        songs[index].title;

        playerArtist.innerHTML = 
        songs[index].artist;

        audio.src = 
        songs[index].audio;
        audio.play();

        playBtn.innerHTML = 
        ' <i class="fa-solid fa-pause"></i>';
    });
});

/* tombol play pause */
playBtn.addEventListener("click", () => {

    if(audio.src === "") return;

    if(audio.paused){
        audio.play();
        playBtn.innerHTML =
         '<i class="fa-solid fa-pause"></i>';
    } else {
        audio.pause();
        playBtn.innerHTML =
        ' <i class="fa-solid fa-play"></i>'
    }
});

function loadSong(index){

    playerImg.src =
    songs[index].image;

    playerTitle.innerHTML =
    songs[index].title;

    playerArtist.innerHTML =
    songs[index].artist;

    audio.src =
    songs[index].audio;

    audio.play();

    playBtn.innerHTML =
    '<i class="fa-solid fa-pause"></i>';
} 
/* tombol next */
nextBtn.addEventListener("click", () =>
{
    currentSong++;
    if(currentSong >= songs.length){
        currentSong = 0;
    }
    loadSong(currentSong);
});
/*tombol prev*/
prevBtn.addEventListener("click", () =>
{
    currentSong--;
    if(currentSong < 0){
        currentSong = songs.length - 1;
    }
    loadSong(currentSong);
});

audio.addEventListener("ended", () => {
    currentSong++;
    if(currentSong >= songs.length){
        currentSong = 0;
    }
    loadSong(currentSong);
});

const progress = 
document.getElementById("progress");

const currentTime =
document.getElementById("current-time");

const duration =
document.getElementById("duration");

/*format waktu*/
function formatTime(time){

    if(isNaN(time)){
        return "0:00";
    }
    let minutes =
    Math.floor(time / 60);

    let seconds =
    Math.floor(time % 60);

    if(seconds < 10){
        seconds = "0" + seconds;
    }
    return minutes + ":" + seconds;
}
/*durasi lagu*/
audio.addEventListener("loadedmetadata",
    () => {
        progress.max = audio.duration;

        duration.innerHTML = 
        formatTime(audio.duration);
    }
);
/*jalan otomatis*/
audio.addEventListener("timeupdate", () => {

     progress.value = audio.currentTime;
     
    let progressPercent =
    (audio.currentTime / audio.duration) * 100;

     progress.style.setProperty(
        "--progress", 
        progressPercent + "%"
     );

     currentTime.innerHTML =
     formatTime(audio.currentTime);

     duration.innerHTML = 
     formatTime(audio.duration);
});
/*bisa digeser*/
progress.addEventListener("input", () => {
    audio.currentTime =
    progress.value;
});

let baca = false
const btn = document.getElementById('btn')
const text = document.getElementById('extra')
btn.addEventListener('click',()=>{ 
  text.classList.toggle('show')
  baca = !baca
  btn.textContent = baca ? 'Tampilkan sedikit' : 'Tampilkan lebih'
});

const closePlayer =
document.getElementById("close-player");

closePlayer.addEventListener("click", () => {

    audio.pause();
    audio.currentTime = 0;
    audio.src = "";
    playerImg.src = "music.webp";
    playerTitle.innerHTML = "pilih lagu";
    playerArtist.innerHTML = "favorit";
    playBtn.innerHTML = '<i class="fa-solid fa-play"></i>';

    progress.value = 0;

    progress.style.setProperty("--progress", "0%");

    currentTime.innerHTML = "0:00";
    duration.innerHTML = "0:00";
});

const links = 
document.querySelectorAll("nav a");

const loadingBar = 
document.querySelector(".loading-bar");

/* tombol Home */
const homeBtn = 
document.querySelector('nav a[href="index.html"]');

/* tombol Musik */
const musikBtn = 
document.querySelector('nav a[href="musik.html"]');

function pageLoading(link){
    link.addEventListener("click", (e) => {

        e.preventDefault();
        loadingBar.style.width ="100%";

        let target = 
        link.getAttribute("href");

        setTimeout(() => {
            window.location.href = 
            target;
        }, 600);
    });
}
/* jalankan */
if(homeBtn){
    pageLoading(homeBtn);
}
if(musikBtn){
    pageLoading(musikBtn);
}
