//aos
AOS.init()

// music
var tempMusic = ''
music = document.querySelector('.music')
if (tempMusic) {
	music.src = tempMusic
}

// gate mulai
function mulai() {
	// back to top
	window.scrollTo(0, 0)

	// sound gate
	var soundGate = document.querySelector('.sound-gate')
	soundGate.play()

	//gate section
	var gateSection = $('#gate-section')
	var gates = document.querySelectorAll('.gate')
	gates.forEach(function (gate, index) {
		var direction = (index=== 0) ? -1 : 1
		gate.style.transform = 'rotateY('+ (70 * direction) + 'deg)'
	})

	// set timeout music
	setTimeout(function () {
		// music play
		music.play()
		gateSection.css('transform','scale(6)')	
	}, 600)

	// set timeout gate section
	setTimeout(function () {
		gateSection.css('opacity', 0)
		$('body').removeClass ('overflow-hidden')
		$('body').addClass('transition')
		gateSection.css('display', 'none')
	}, 2000)
}

// button music
var isPlaying = true

function toggleMusic(event) {
	event.preventDefault()

	const musicButton = document.getElementById('music-button')
	
	if (isPlaying) {
		musicButton.innerHTML = '<i class="fas fa-fw fa-pause"></i>'
		musicButton.classList.remove('rotate')
		musicButton.style.transform = 'translateY(0)'
		music.pause()
	} else {
		musicButton.innerHTML = '<i class="fas fa-fw fa-compact-disc"></i>'
		musicButton.classList.add('rotate')
		music.play()
	}

	isPlaying = !isPlaying
}

// countdown wedding
var countdownDate = new Date("Oct 10, 2024 10:30").getTime()

var x = setInterval(function () {
	var now = new Date().getTime()

	var distance = countdownDate - now

	var days = Math.floor(distance / (1000 * 60 * 60 * 24))
	var hours = Math.floor((distance % (1000 * 60 * 60 *24)) / (1000 * 60 * 60))
	var minute = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
	var second = Math.floor((distance % (1000 * 60)) / 1000)

	document.getElementById('countdown-wedding').innerHTML = `
		<div class="col-lg-1 col-3"><div class="text-center p-2 rounded text-light"><h5>${days}</h5> Hari</div></div>
        <div class="col-lg-1 col-3"><div class="text-center p-2 rounded text-light"><h5>${hours}</h5> Jam</div></div>
        <div class="col-lg-1 col-3"><div class="text-center p-2 rounded text-light"><h5>${minute}</h5> Menit</div></div>
        <div class="col-lg-1 col-3"><div class="text-center p-2 rounded text-light"><h5>${second}</h5> Detik</div></div>
	`

	if (distance < 0) {
		clearInterval(x)
		document.getElementById('countdown-wedding').innerHTML = "<span class='text-center p-3 rounded text-light m-2'><h2>Sudah Dimulai!</h2></span>"
	}
}, 1000)

// nama sambutan
const urlParams = new URLSearchParams(window.location.search);
const panggilan = urlParams.get('p');
const nama = urlParams.get('n');
console.log(panggilan, nama); // Check if these are "Kazekage" and "Gaara"
const namaSambutan = document.querySelector('#nama-sambutan');
namaSambutan.innerText = ` ${panggilan} ${nama}`;


// Get the hero section element
const heroSection = document.getElementById('hero-section');

// Add a CSS class to disable scrolling
heroSection.classList.add('no-scroll');

// Add event listener to the "Buka Undangan" button
document.querySelector('.btn-get-started').addEventListener('click', () => {
  // Remove the CSS class to enable scrolling
  heroSection.classList.remove('no-scroll');
});

window.addEventListener("load", function() {
  const form = document.getElementById('my-form');
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    const data = new FormData(form);
    const action = e.target.action;
    fetch(action, {
      method: 'POST',
      body: data,
    })
    .then(() => {
      alert("Konfirmasi kehadiran berhasil terkirim");
    })
  });
});

const copyBtns = document.querySelectorAll('.copy-btn');

	copyBtns.forEach((btn) => {
 	 btn.addEventListener('click', () => {
    new ClipboardJS(btn).then(() => {
      alert('Nomor berhasil disalin');
    });
  });
});