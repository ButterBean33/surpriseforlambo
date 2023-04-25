document.getElementById("reveal-button").addEventListener("click", function() {
    var surprise = document.getElementById("surprise");
    var sillySong = document.getElementById("silly-song");

    surprise.classList.remove("hidden");
    sillySong.play();
});
