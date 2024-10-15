// AOS
AOS.init();

// Music
var tempMusic = "";
var music = document.querySelector(".music");
if (tempMusic) {
  music.src = tempMusic;
}

// Door mulai
function mulai() {
  // Back to top
  window.scrollTo(0, 0);

  // Sound door
  var soundDoor = document.querySelector(".sound-door");
  soundDoor.play();

  // Door section
  var doorSection = $("#door-section");
  var doors = document.querySelectorAll(".door");
  doors.forEach(function (door, index) {
    var direction = index === 0 ? -1 : 1;
    door.style.transform = "rotateY(" + 70 * direction + "deg)";
  });

  // Set timeout music
  setTimeout(function () {
    // Music play
    music.play();
    doorSection.css("transform", "scale(6)");
  }, 600);

  // Set timeout door section
  setTimeout(function () {
    doorSection.css("opacity", 0);
    $("body").removeClass("overflow-hidden");
    $("body").addClass("transition");
    doorSection.css("display", "none");
  }, 2000);
}

// Button music
var isPlaying = true;

function toggleMusic(event) {
  event.preventDefault();

  const musicButton = document.getElementById("music-button");

  if (isPlaying) {
    musicButton.innerHTML = '<i class="fas fa-fw fa-pause"></i>';
    musicButton.classList.remove("rotate");
    musicButton.style.transform = "translateY(0)";
    music.pause();
  } else {
    musicButton.innerHTML = '<i class="fas fa-fw fa-compact-disc"></i>';
    musicButton.classList.add("rotate");
    music.play();
  }

  isPlaying = !isPlaying;
}

// Countdown wedding
var countdownDate = new Date("Nov 10, 2024 10:30").getTime();

var x = setInterval(function () {
  var now = new Date().getTime();

  var distance = countdownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minute = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var second = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("countdown-wedding").innerHTML = `
    <div class="col-lg-1 col-3"><div class="text-center p-2 rounded text-light"><h5>${days}</h5> Hari</div></div>
    <div class="col-lg-1 col-3"><div class="text-center p-2 rounded text-light"><h5>${hours}</h5> Jam</div></div>
    <div class="col-lg-1 col-3"><div class="text-center p-2 rounded text-light"><h5>${minute}</h5> Menit</div></div>
    <div class="col-lg-1 col-3"><div class="text-center p-2 rounded text-light"><h5>${second}</h5> Detik</div></div>
  `;

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown-wedding").innerHTML =
      "<span class='text-center p-3 rounded text-light m-2'><h2>Sudah Dimulai!</h2></span>";
  }
}, 1000);

// Nama sambutan
const urlParams = new URLSearchParams(window.location.search);
const panggilan = urlParams.get("p");
const nama = urlParams.get("n");
console.log(panggilan, nama); // Check if these are "Kazekage" and "Gaara"
const namaSambutan = document.querySelector("#nama-sambutan");
namaSambutan.innerText = ` ${panggilan} ${nama}`;

// Get the hero section element
const heroSection = document.getElementById("hero-section");

// Add a CSS class to disable scrolling
heroSection.classList.add("no-scroll");

// Add event listener to the "Buka Undangan" button
document.querySelector(".btn-get-started").addEventListener("click", () => {
  // Remove the CSS class to enable scrolling
  heroSection.classList.remove("no-scroll");
});

// Comment Section Handling
document.getElementById("my-form").addEventListener("submit", function (event) {
  event.preventDefault();

  // Get the values from the form
  const name = document.getElementById("nama").value;
  const comment = document.getElementById("ucapan").value;

  // Create a comment element
  const commentElement = document.createElement("div");
  commentElement.className = "comment-box"; // Apply the CSS class
  commentElement.innerHTML = `<strong>${name}</strong>: ${comment}`;

  // Append the comment to the comments section
  document.getElementById("commentsSection").appendChild(commentElement);

  // Optionally, store the comment in local storage
  let comments = JSON.parse(localStorage.getItem("comments")) || [];
  comments.push({ name, comment });
  localStorage.setItem("comments", JSON.stringify(comments));

  // Clear the form
  document.getElementById("my-form").reset();
});

// Load comments from local storage on page load
window.onload = function () {
  const comments = JSON.parse(localStorage.getItem("comments")) || [];
  comments.forEach(({ name, comment }) => {
    const commentElement = document.createElement("div");
    commentElement.className = "comment-box"; // Apply the CSS class
    commentElement.innerHTML = `<strong>${name}</strong>: ${comment}`;
    document.getElementById("commentsSection").appendChild(commentElement);
  });
};

// function clearComments() {
//   localStorage.removeItem("comments");
//   const commentsSection = document.getElementById("commentsSection");
//   while (commentsSection.firstChild) {
//     commentsSection.removeChild(commentsSection.firstChild);
//   }
// }
