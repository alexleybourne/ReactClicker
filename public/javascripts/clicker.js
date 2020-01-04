
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

// Mouse Hover Button Animation
function enterClicker() { 
    anime({
        targets: ".clickerImage",
        scale: 1.2,
        elasticity: 10
      })
}

function leaveClicker() { 
    anime({
        targets: ".clickerImage",
        scale: 1.0,
        elasticity: 10
      })
}


