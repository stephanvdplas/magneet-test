input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < aantal_stokken; index++) {
        music.playMelody("C5 A B G A F G E ", 1000)
        timer = 0
        tijd = randint(min_tijd, max_tijd)
        // Wacht een willekeurig aantal seconden tussen min_tijd en max_tijd
        while (timer < tijd) {
            basic.showIcon(IconNames.Heart)
            basic.showIcon(IconNames.SmallHeart)
            timer += 1
        }
        Laat_vallen(lijst.shift())
    }
    music.playMelody("C5 A B G A F G E ", 1000)
    basic.pause(5000)
    control.reset()
})
function Laat_vallen (stok: number) {
    pins.digitalWritePin(stok + 112, 1)
basic.showNumber(stok)
    basic.pause(1000)
    pins.digitalWritePin(stok + 112, 0)
}
input.onButtonPressed(Button.B, function () {
    control.reset()
})
/**
 * Initializatie variabelen
 */
let tijd = 0
let timer = 0
let willekeurig = 0
let lijst: number[] = []
let max_tijd = 0
let min_tijd = 0
let aantal_stokken = 0
aantal_stokken = 4
min_tijd = 2
max_tijd = 5
let _1234: number[] = []
lijst = []
// Tijdelijke lijst vullen op volgorde, om te gebruiken om de willekeurige lijst te vullen
for (let index = 0; index <= aantal_stokken - 1; index++) {
    _1234.push(index)
}
// Lijst vullen met alee getallen één keer, op willekeurige volgorde, bv. 4 2 1 3
for (let index = 0; index < aantal_stokken; index++) {
    willekeurig = _1234._pickRandom()
    lijst.push(willekeurig + 1)
    _1234.removeAt(_1234.indexOf(willekeurig))
}
music.playMelody("C D E F G A B C5 ", 1000)
basic.showIcon(IconNames.Yes)
