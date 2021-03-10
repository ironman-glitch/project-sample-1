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
