let a = 0
input.onButtonPressed(Button.A, function () {
    if (input.temperature() < 25) {
        basic.showString("Switch off Air Conditioner")
    }
})
input.onButtonPressed(Button.AB, function () {
    a = 0
    for (let index = 0; index < 4; index++) {
        if (a == 0) {
            a += 1
        }
        basic.showString("" + (a))
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showString("20211039")
})
