input.onButtonPressed(Button.A, function () {
    servos.P0.setAngle(90)
})
input.onButtonPressed(Button.B, function () {
    servos.P0.setAngle(69)
})
basic.showLeds(`
    # . . . .
    # # . . .
    . . # # .
    . . # # .
    . . . . #
    `)
basic.forever(function () {
	
})
