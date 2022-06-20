input.onButtonPressed(Button.A, function () {
    tijd = randint(0, 25)
    while (timer < tijd) {
        basic.showIcon(IconNames.Heart)
        basic.showIcon(IconNames.SmallHeart)
        timer += 1
    }
    basic.showIcon(IconNames.Yes)
    timer = 0
    stok = lijst.pop()
    basic.showNumber(stok)
    if (stok == 1) {
        pins.digitalWritePin(DigitalPin.P13, 1)
        basic.pause(1000)
        pins.digitalWritePin(DigitalPin.P13, 0)
    } else if (stok == 2) {
        pins.digitalWritePin(DigitalPin.P14, 1)
        basic.pause(1000)
        pins.digitalWritePin(DigitalPin.P14, 0)
    } else if (stok == 3) {
        pins.digitalWritePin(DigitalPin.P15, 1)
        basic.pause(1000)
        pins.digitalWritePin(DigitalPin.P15, 0)
    } else {
        pins.digitalWritePin(DigitalPin.P16, 1)
        basic.pause(1000)
        pins.digitalWritePin(DigitalPin.P16, 0)
    }
})
input.onButtonPressed(Button.B, function () {
    control.reset()
})
let stok = 0
let tijd = 0
let willekeurig = 0
let lijst: number[] = []
let timer = 0
timer = 0
basic.showIcon(IconNames.Yes)
let _1234 = [
1,
2,
3,
4
]
lijst = []
for (let index = 0; index < 4; index++) {
    willekeurig = _1234._pickRandom()
    lijst.push(willekeurig)
    _1234.removeAt(willekeurig)
}
