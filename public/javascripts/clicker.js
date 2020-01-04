
console.log("Clicker JS Loaded")

function clicked(){
    console.log("Clicked")

    anime({
        targets: '.clickerImage',
        keyframes: [
            {scale: 1.2},
            {scale: 1}
          ],
          duration: 800,
          easing: 'easeOutElastic(1, .8)'
    })

}

anime({
    targets: '.clickerImage',
    translateX: 250,
    rotate: '1turn',
    backgroundColor: '#FFF',
    duration: 800
  })