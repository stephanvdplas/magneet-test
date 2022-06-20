input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < aantal_stokken; index++) {
        music.playMelody("C5 A B G A F G E ", 1000)
        timer = 0
        tijd = randint(min_tijd, max_tijd)
        while (timer < tijd) {
            basic.showIcon(IconNames.Heart)
            basic.showIcon(IconNames.SmallHeart)
            timer += 1
        }
        stok = lijst.shift()
        pins.digitalWritePin(stok + 112, 1)
basic.showNumber(stok)
        basic.pause(1000)
        pins.digitalWritePin(stok + 112, 0)
    }
    music.playMelody("C5 A B G A F G E ", 1000)
    basic.pause(5000)
    control.reset()
})
input.onButtonPressed(Button.B, function () {
    control.reset()
})
let stok = 0
let tijd = 0
let timer = 0
let willekeurig = 0
let lijst: number[] = []
let max_tijd = 0
let min_tijd = 0
let aantal_stokken = 0
aantal_stokken = 4
min_tijd = 4
max_tijd = 10
let _1234: number[] = []
lijst = []
for (let index = 0; index <= aantal_stokken - 1; index++) {
    _1234.push(index)
}
for (let index = 0; index < aantal_stokken; index++) {
    willekeurig = _1234._pickRandom()
    lijst.push(willekeurig + 1)
    _1234.removeAt(_1234.indexOf(willekeurig))
}
music.playMelody("C D E F G A B C5 ", 1000)
basic.showIcon(IconNames.Yes)
