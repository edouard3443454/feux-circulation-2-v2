let a = 0
input.onButtonPressed(Button.A, function () {
    a = 1
})
function lum () {
	
}
function pieton () {
	
}
basic.forever(function () {
    if (a == 1) {
        pins.digitalWritePin(DigitalPin.P2, 1)
        pieton()
        a = 0
    } else {
        lum()
    }
})
