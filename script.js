console.log("Welcome to Spotify-Personal");

//Initialize the variables

var songIndex=1;
var AudioElement = new Audio('songs/1.mp3');
var masterPlayer=document.getElementById("masterPlayer");
var gif=document.getElementById("gif");
var masterSongName=document.getElementById("masterSongName");
var ProgressBar=document.getElementById("myProgressBar");
var songItem=Array.from(document.getElementsByClassName("songItem"));

//Array of SongList
let song=[
    {songName:"Let Me Love You" ,filePath:"songs/1.mp3" ,coverPath:"covers/leMeLoveU.jpg"},
    {songName:"Rang De Basanti" ,filePath:"songs/2.mp3" ,coverPath:"covers/2.jpg"},
    {songName:"Aashique" ,filePath:"songs/3.mp3" ,coverPath:"covers/3.jpg"},
    {songName:"Secret Superstar" ,filePath:"songs/4.mp3" ,coverPath:"covers/4.jpg"},
    {songName:"Lose Yourself" ,filePath:"songs/5.mp3" ,coverPath:"covers/5.jpg"},
    {songName:"Jonny" ,filePath:"songs/6.mp3" ,coverPath:"covers/6.jpg"},
]

songItem.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src=song[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=song[i].songName;
});
//eventListner



//Play/Pause button
masterPlayer.addEventListener('click', function(){
    if(AudioElement.paused || AudioElement.currentTime<=0){
        AudioElement.play();
        masterPlayer.classList.remove("fa-play-circle");
        masterPlayer.classList.add("fa-pause-circle");
        gif.style.opacity=1;
    }
    else{
        AudioElement.pause();
        masterPlayer.classList.remove("fa-pause-circle");
        masterPlayer.classList.add("fa-play-circle");
        gif.style.opacity=0;
    }   
})

//progressbar update
AudioElement.addEventListener('timeupdate',function(){
    progress= parseInt(AudioElement.currentTime/AudioElement.duration * 100);
    ProgressBar.value=progress;
})

//moveSong to desired place
ProgressBar.addEventListener('change',() =>{
    AudioElement.currentTime=(ProgressBar.value*AudioElement.duration)/100;
})

//play Different songs
const makeAllPlays= () =>{
    Array.from(document.getElementsByClassName("songItemPlay")).forEach((element) =>{
        element.classList.remove("fa-pause-circle");
        element.classList.add("fa-play-circle");
    })
}

Array.from(document.getElementsByClassName("songItemPlay")).forEach((element) => {
    element.addEventListener('click', (e) =>{
        if(AudioElement.paused){
            makeAllPlays();
            songIndex=parseInt(e.target.id)+1;
            masterSongName.innerText=song[songIndex-1].songName;
            e.target.classList.remove("fa-play-circle");
            e.target.classList.add("fa-pause-circle");

            AudioElement.src='songs/'+songIndex+'.mp3';
            AudioElement.play();

            gif.style.opacity=1;
            AudioElement.currentTime=0;
            masterPlayer.classList.remove("fa-play-circle");
            masterPlayer.classList.add("fa-pause-circle");
        }else{
            e.target.classList.remove("fa-pause-circle");
            e.target.classList.add("fa-play-circle");
            AudioElement.pause();
            AudioElement.currentTime=(ProgressBar.value*AudioElement.duration)/100;
            masterPlayer.classList.remove("fa-pause-circle");
            masterPlayer.classList.add("fa-play-circle");
            gif.style.opacity=0;
        }
    })
})

document.getElementById("forward").addEventListener('click', () =>{
        if(songIndex>5){
            songIndex=1;
        }else{
            songIndex+=1;
        }
        makeAllPlays();
        masterSongName.innerText=song[songIndex-1].songName;
        AudioElement.src='songs/'+songIndex+'.mp3';
        AudioElement.play();
        gif.style.opacity=1;
        AudioElement.currentTime=0;
        masterPlayer.classList.remove("fa-play-circle");
        masterPlayer.classList.add("fa-pause-circle");
})

document.getElementById("backward").addEventListener('click', () =>{
    if(songIndex<=1){
        songIndex=6;
    }else{
        songIndex-=1;
    }
    makeAllPlays();
    masterSongName.innerText=song[songIndex-1].songName;
    AudioElement.src='songs/'+songIndex+'.mp3';
    AudioElement.play();
    gif.style.opacity=1;
    AudioElement.currentTime=0;
    masterPlayer.classList.remove("fa-play-circle");
    masterPlayer.classList.add("fa-pause-circle");
})