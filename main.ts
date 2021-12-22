input.onButtonPressed(Button.A, function () {
    a = 1
})
let a = 0
a = 0
basic.forever(function () {
    if (a == 1) {
        if (pins.analogReadPin(AnalogPin.P0) == 1) {
            pins.digitalWritePin(DigitalPin.P0, 1)
            pins.digitalWritePin(DigitalPin.P8, 1)
            basic.pause(5000)
            pins.digitalWritePin(DigitalPin.P0, 0)
            pins.digitalWritePin(DigitalPin.P1, 1)
            basic.pause(1000)
            pins.digitalWritePin(DigitalPin.P1, 0)
            pins.digitalWritePin(DigitalPin.P2, 1)
            basic.pause(2000)
            pins.digitalWritePin(DigitalPin.P8, 0)
            pins.digitalWritePin(DigitalPin.P16, 1)
            basic.pause(5000)
            pins.digitalWritePin(DigitalPin.P16, 0)
            for (let index = 0; index < 4; index++) {
                pins.digitalWritePin(DigitalPin.P8, 1)
                basic.pause(1000)
                pins.digitalWritePin(DigitalPin.P8, 0)
            }
            basic.pause(2000)
            pins.digitalWritePin(DigitalPin.P2, 0)
            a = 0
        }
    } else {
        pins.digitalWritePin(DigitalPin.P2, 0)
        pins.digitalWritePin(DigitalPin.P0, 1)
        pins.digitalWritePin(DigitalPin.P8, 1)
        basic.pause(5000)
        pins.digitalWritePin(DigitalPin.P0, 0)
        pins.digitalWritePin(DigitalPin.P1, 1)
        basic.pause(1000)
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P2, 1)
        basic.pause(2000)
    }
})
