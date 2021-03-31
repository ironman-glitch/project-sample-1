let count = 0
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
basic.forever(function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    if (pins.digitalReadPin(DigitalPin.P11) == 1) {
        count = 0
        while (count < 600) {
            basic.pause(100)
            count += 1
            if (pins.digitalReadPin(DigitalPin.P1) == 1) {
                count = 600
                while (pins.digitalReadPin(DigitalPin.P1) == 1) {
                    basic.showLeds(`
                        . . . . .
                        . . # . .
                        . # . . .
                        . . . # .
                        . . . . .
                        `)
                }
            }
        }
    }
})
