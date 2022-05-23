input.onButtonPressed(Button.A, function () {
    Magneet_Aan = true
})
input.onButtonPressed(Button.B, function () {
    Magneet_Aan = false
})
let Magneet_Aan = false
Magneet_Aan = true
basic.forever(function () {
    if (Magneet_Aan) {
        basic.showIcon(IconNames.Yes)
        pins.analogWritePin(AnalogPin.P0, 1023)
    } else {
        basic.showIcon(IconNames.No)
        pins.analogWritePin(AnalogPin.P0, 0)
    }
})
