function randomNumber() {
    return (Math.floor(Math.random() * 101) + 19)
}
function randomCrystal() {
    return Math.floor(Math.random() * (12 - 1 + 1) + 1)
}

function setInitialValues() {
    blueCrystal = randomCrystal()
    crystal = randomCrystal()
    diamond = randomCrystal()
    purpleDiamond = randomCrystal()
    targetNumber = randomNumber()
    yourTotal = 0;
    $('#your-total').text('Your Total:' + yourTotal)
    $('#your-goal').text("Your Goal: " + targetNumber)
}

let targetNumber = randomNumber()

// document.getElementById('your-goal').textContent = randomNumber()
$('#your-goal').text("Your Goal: " + targetNumber)
let blueCrystal, crystal, diamond, purpleDiamond, yourTotal;
let yourLosses = 0
let yourWins = 0


setInitialValues();

$("#blue-crystal").on("click", function () {
    yourTotal += blueCrystal
    $('#your-total').text('Your Total:' + yourTotal)
    youWin()
})
$('#crystal').on("click", function () {
    yourTotal += crystal
    $('#your-total').text('Your Total:' + yourTotal)
    youWin()
})
$('#diamond').on("click", function () {
    yourTotal += diamond
    $('#your-total').text('Your Total:' + yourTotal)
    youWin()
})
$('#purple-crystal').on("click", function () {
    yourTotal += purpleDiamond
    $('#your-total').text('Your Total:' + yourTotal)
    youWin()
})
$('#btn').on('click', function () {
    setInitialValues(); 
    yourLosses++;
    $('#loses').text('Loses:' + yourLosses)
    console.log('btn', yourLosses)
}) 


function youWin() {
    console.log(yourTotal, targetNumber)
    if (yourTotal === targetNumber) {
        yourWins++
        $('#wins').text('Wins:' + yourWins)
        alert('You Win!')
        updateDom();
    }
    else if (yourTotal > targetNumber) {
        yourLosses++
        $('#loses').text('Loses:' + yourLosses)
        alert('You Lose!')
        updateDom();
    }
}
