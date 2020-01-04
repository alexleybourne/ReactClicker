
console.log("Clicker JS Loaded")

function clicked(){
    console.log("Clicked")

    anime({
        targets: '.clickerImage',
        scale: [
            { value: 1.1, duration: 10, delay: 50 },
            { value: 1, duration: 10, delay: 50 }
        ]
      })
}

