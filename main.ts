input.onButtonPressed(Button.A, function () {
    servos.P0.setAngle(90)
})
input.onButtonPressed(Button.B, function () {
    servos.P0.run(50)
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
