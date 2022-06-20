input.onButtonPressed(Button.A, function () {
    tijd = randint(0, 25)
    while (timer < tijd) {
        basic.showIcon(IconNames.Heart)
        basic.showIcon(IconNames.SmallHeart)
        timer += 1
    }
    basic.showIcon(IconNames.Yes)
    timer = 0
})
let tijd = 0
let timer = 0
timer = 0
basic.showIcon(IconNames.Yes)
let _1234 = [
1,
2,
3,
4
]
for (let index = 0; index <= _1234.length; index++) {
    let lijst: number[] = []
    lijst[index] = _1234._pickRandom()
}
