'use strict'

function play(key) {
  // visual effect
  const drumKeyBox = document.querySelector(`div[data-key="${key}"]`);
  if (!drumKeyBox) return;
  drumKeyBox.classList.add('playing');
  // play sound
  const drumPlayer = drumKeyBox.querySelector('audio');
  drumPlayer.currentTime = 0;
  drumPlayer.play();
}

function stop(key) {
  // visual effect
  const drumKeyBox = document.querySelector(`div[data-key="${key}"]`);
  if (!drumKeyBox) return;
  drumKeyBox.classList.remove('playing');
}

// keyboard events
window.addEventListener('keydown', event => play(event.key));
window.addEventListener('keyup', event => stop(event.key));

// mouse and touch events
const allKeys = document.querySelectorAll('.key');
allKeys.forEach(element => {
  element.addEventListener('touchstart', event => {
    event.preventDefault();
    play(event.currentTarget.getAttribute('data-key'))
  });
  element.addEventListener('mousedown', event => play(event.currentTarget.getAttribute('data-key')));
  element.addEventListener('touchend', event => stop(event.currentTarget.getAttribute('data-key')));
  element.addEventListener('mouseup', event => stop(event.currentTarget.getAttribute('data-key')));
})
