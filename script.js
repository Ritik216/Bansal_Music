console.log("Welcome to spotify");

// Initialize the variables

let songIndex = 0;
let audioElement = new Audio("songs//1.mp3");
// audioElement.play();
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');

let songItems = Array.from(document.getElementsByClassName("songItem"));
let songs = [
    {songName: "Salama-Hundiyan", filePath: "songs//1.mp3", coverPath: "covers//1.jpg"},
    {songName: "Yaara_Tera_Warga", filePath: "songs//2.mp3", coverPath: "covers//2.jpg"},
    {songName: "8_Raflaan", filePath: "songs//3.mp3", coverPath: "covers//3.jpg"},
    {songName: "Dabya_Ni_Karde", filePath: "songs//4.mp3", coverPath: "covers//4.jpg"},
    {songName: "Naam_Tera", filePath: "songs//5.mp3", coverPath: "covers//5.jpg"},
    {songName: "Photo_Singaa", filePath: "songs//6.mp3", coverPath: "covers//6.jpg"},
    {songName: "Taj_Mahal", filePath: "songs//7.mp3", coverPath: "covers//7.jpg"},
    {songName: "Waalian", filePath: "songs//8.mp3", coverPath: "covers//8.jpg"},
    {songName: "Yaar_Haryana_Te", filePath: "songs//9.mp3", coverPath: "covers//9.jpg"},
    {songName: "Shadow_Singaa", filePath: "songs//10.mp3", coverPath: "covers//10.jpg"}
];

songItems.forEach((element, i)=>{
    // console.log(element, i);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
    
});

// Handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0)
    {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0 ;
    }
})

// Listen to Events

audioElement.addEventListener('timeupdate',()=>{
  
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = (myProgressBar.value * audioElement.duration)/100;
})

const makeAllPlays =()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs//${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime =0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})



document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9)
    {
        songIndex = 0;
    }
    else{
        songIndex = songIndex + 1;
    }
    audioElement.src = `songs//${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime =0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})
document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0)
    {
        songIndex = 0;
    }
    else{
        songIndex = songIndex - 1;
    }
    audioElement.src = `songs//${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime =0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})