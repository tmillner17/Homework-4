function randomNumber() {
    return (Math.floor(Math.random()*120)+19)
}
function randomCrystal() {
    return  Math.floor(Math.random()*(12 - 1 + 1) + 1)
}

// document.getElementById('your-goal').textContent = randomNumber()
$('#your-goal').text("Your Goal: " + randomNumber())
let blueCrystal = randomCrystal()
let crystal = randomCrystal()
let diamond = randomCrystal()
let purpleDiamond = randomCrystal()
let yourTotal = 0
function setEventListener() {
    $("#blue-crystal").on("click", function(){
        yourTotal += blueCrystal
        $('#your-total').text('Your Total:' + yourTotal)
    })
    $('#crystal').on("click", function(){
        yourTotal += crystal
        $('#your-total').text('Your Total:' + yourTotal)
    })
    $('#diamond').on("click", function(){
        yourTotal += diamond
        $('#your-total').text('Your Total:' + yourTotal)
    })
    $('#purple-crystal').on("click", function(){
        yourTotal += purpleDiamond
        $('#your-total').text('Your Total:' + yourTotal)
    })
}
setEventListener()

function youWin() {
    if (yourTotal > randomNumber) {
        
    }
}