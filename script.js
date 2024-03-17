document.addEventListener("DOMContentLoaded", function() {
  var leftImage = document.querySelector(".left_side_image img");
  var rightImage = document.querySelector(".right_side_image img");
  var leftImages = [
      "image/vollyball.png",
      "image/run.png",
      "image/basketball.png"
      // Add more volleyball image paths here if needed
  ];
  var rightImages = [
      "image/basketball.png",
      "image/javlin.png",
      "image/vollyball.png"
      // Add more basketball image paths here if needed
  ];
  var currentIndex = 0;

  setInterval(function() {
      changeImages();
  }, 2000); // Change images every 5 seconds

  function changeImages() {
      leftImage.src = leftImages[currentIndex];
      rightImage.src = rightImages[currentIndex];
      currentIndex = (currentIndex + 1) % leftImages.length;

    
  }
});



window.addEventListener('scroll', function() {
  var leftCard = document.querySelector('.card:nth-child(odd)');
  var rightCard = document.querySelector('.card:nth-child(even)');
  var leftCardTop = leftCard.getBoundingClientRect().top;
  var rightCardTop = rightCard.getBoundingClientRect().top;
  if (leftCardTop <= window.innerHeight * 0.75) {
    leftCard.style.cssText = 'transform: translateX(0); opacity: 1;';
  }
  if (rightCardTop <= window.innerHeight * 0.75) {
    rightCard.style.cssText = 'transform: translateX(0); opacity: 1;';
  }
});



document.addEventListener('DOMContentLoaded', function () {
  const sliderContent = document.querySelector('.slider-content');
  const videoPlayer = document.getElementById('video-player');
  const images = document.querySelectorAll('.slider-image');
  const arrows = document.querySelectorAll('.arrow');
  
  let currentIndex = 0;

  // Show the video first and hide the images initially
  videoPlayer.style.display = 'block';
  
  images.forEach(image => image.style.display = 'none');

  // Change content on arrow click
  arrows.forEach(arrow => {
    arrow.addEventListener('click', function () {
      if (arrow.classList.contains('left')) {
        currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
      } else {
        currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
      }
      toggleContent();
    });
  });

  function toggleContent() {
    if (currentIndex === 0) {
      videoPlayer.style.display = 'block';
      images.forEach(image => image.style.display = 'none');
    } else {
      videoPlayer.style.display = 'none';
      images.forEach((image, index) => {
        if (index === currentIndex) {
          image.style.display = 'block';
        } else {
          image.style.display = 'none';
        }
      });
    }
  }
});


// Function to open the lightbox
function openLightbox(imageSrc) {
  document.getElementById("lightbox-image").src = imageSrc;
  document.getElementById("lightbox").style.display = "block";
}

// Function to close the lightbox
function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

// Function to show the previous image
function prevImage() {
  var currentImageSrc = document.getElementById("lightbox-image").src;
  var images = document.querySelectorAll(".img");
  var currentIndex = Array.from(images).findIndex(image => image.src === currentImageSrc);
  var prevIndex = (currentIndex - 1 + images.length) % images.length;
  var prevImageSrc = images[prevIndex].src;
  document.getElementById("lightbox-image").src = prevImageSrc;
}

// Function to show the next image
function nextImage() {
  var currentImageSrc = document.getElementById("lightbox-image").src;
  var images = document.querySelectorAll(".img");
  var currentIndex = Array.from(images).findIndex(image => image.src === currentImageSrc);
  var nextIndex = (currentIndex + 1) % images.length;
  var nextImageSrc = images[nextIndex].src;
  document.getElementById("lightbox-image").src = nextImageSrc;
}

document.addEventListener('keydown', function(event) {
  if (event.key === 'ArrowLeft') {
    prevImage(); // Call prevImage function when left arrow key is pressed
  } else if (event.key === 'ArrowRight') {
    nextImage(); // Call nextImage function when right arrow key is pressed
  }
});






