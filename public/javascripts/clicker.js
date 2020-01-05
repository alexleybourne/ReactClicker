let count = 0
let currentClicker = "Assets/OldComputer.png"

function pageLoaded(){
    console.log("Page Loaded")
}

function updateCount(){
    count++
    document.getElementById('counter').innerHTML = count + " Lines Coded"

    document.title = "Dev Clicker - " + count + " Lines Coded"

    anime({
        targets: '.counter',
        scale: [
            { value: 1.2, duration: 10, delay: 50 },
            { value: 1, duration: 10, delay: 50 }
        ]
    })

    // Update Clicker
    if (count > 19) {
        currentClicker = "Assets/MidComputer.png"
        document.getElementById("clicker").src = currentClicker
    }

}

function spawnItem() {
    let spawnArea = document.getElementById("spawnedItems").innerHTML
    spawnArea = `<img src=${currentClicker} class="spawnedObject" >`
}

function clicked(){
    console.log("Clicked")

    updateCount()
    spawnItem()

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





