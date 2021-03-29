let strip = neopixel.create(DigitalPin.P2, 4, NeoPixelMode.RGB)
let status = 0
let cont = 0
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P11) == 1) {
    	
    }
})
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P8) == 1) {
        strip.showRainbow(1, 360)
        basic.pause(100)
        strip.showRainbow(360, 720)
        basic.pause(100)
        strip.showRainbow(720, 900)
    }
})
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P1) == 1) {
        status = 1
    } else if (pins.digitalReadPin(DigitalPin.P2) == 1) {
        status = 1
    } else if (pins.digitalReadPin(DigitalPin.P11) == 1) {
        status = 1
    } else {
        status = 1
    }
    if ((status == 1 && pins.digitalReadPin(DigitalPin.P2) == 1 || pins.digitalReadPin(DigitalPin.P11) == 1 && false) && pins.digitalReadPin(DigitalPin.P11) == 0) {
        basic.showIcon(IconNames.Heart)
        cont = 1
    } else if ((status || false) && pins.digitalReadPin(DigitalPin.P2) == 1 && cont == 1) {
        for (let index = 0; index < 5; index++) {
            basic.showIcon(IconNames.Target)
            basic.pause(2000)
        }
        basic.clearScreen()
        cont = 0
    } else {
        basic.clearScreen()
    }
    basic.pause(200)
})
