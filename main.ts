input.onButtonPressed(Button.A, function () {
    turtle.forward(1)
})
input.onButtonPressed(Button.AB, function () {
    if (0 == pen) {
        turtle.pen(TurtlePenMode.Down)
        pen = 1
    } else {
        turtle.pen(TurtlePenMode.Up)
        pen = 0
    }
})
input.onButtonPressed(Button.B, function () {
    turtle.turnLeft()
})
input.onGesture(Gesture.Shake, function () {
    turtle.setPosition(0, 0)
    turtle.setBrightness(0)
    turtle.pen(TurtlePenMode.Down)
    for (let index = 0; index < 5; index++) {
        for (let index = 0; index < 5; index++) {
            turtle.forward(1)
        }
        turtle.turnLeft()
        turtle.forward(1)
        turtle.turnRight()
    }
})
let pen = 0
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
pen = 0
turtle.setPosition(2, 2)
