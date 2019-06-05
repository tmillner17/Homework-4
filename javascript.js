function randomNumber() {
    return (Math.floor(Math.random()*120)+19)
}

// document.getElementById('your-goal').textContent = randomNumber()
$('#your-goal').text("Your Goal: " + randomNumber())
let blueCrystal = '5'
let crystal = '1'
let diamond = '20'
let purpleDiamond = '10'
let yourTotal = ''
function setEventListener() {
    $("#blue-crystal").on("click", function(){
        $('#your-total').text('Your Total:' + blueCrystal)
    })
    $('#crystal').on("click", function(){
        $('#your-total').text('Your Total:' + crystal)
    })
    $('#diamond').on("click", function(){
        $('#your-total').text('Your Total:' + diamond)
    })
    $('#purple-crystal').on("click", function(){
        $('#your-total').text('Your Total:' + purpleDiamond)
    })
}
setEventListener()

if (yourTotal === randomNumber)