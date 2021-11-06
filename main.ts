input.onGesture(Gesture.Shake, function () {
    basic.showLeds(`
        # . . . #
        . # . # .
        # . . . #
        . . . . .
        . . # . .
        `)
    basic.pause(1000)
    basic.showLeds(`
        . # . # .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
})
input.onButtonPressed(Button.A, function () {
    basic.showString("Hello, And welcome to MyBud AI!")
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        # . . . #
        # # . # #
        . . . . .
        . # # # .
        # . . . #
        `)
})
input.onButtonPressed(Button.B, function () {
    basic.showString("Made by Andreas")
})
input.onGesture(Gesture.FreeFall, function () {
    basic.showLeds(`
        . # . # .
        . . . . .
        . # # # .
        # . . . #
        # # # # #
        `)
    basic.pause(2000)
    basic.showLeds(`
        # . . . #
        . # . # .
        # . . . #
        . . . . .
        . . # . .
        `)
    basic.pause(1000)
    basic.showLeds(`
        . # . # .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
})
basic.showString("AI")
basic.showLeds(`
    . # . # .
    . # . # .
    . . . . .
    # . . . #
    . # # # .
    `)
loops.everyInterval(3500, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        # . . . #
        . # # # .
        `)
    basic.showLeds(`
        . # . # .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
})
