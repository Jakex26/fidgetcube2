let x = 0
input.onButtonPressed(Button.A, function () {
    x += 1
})
input.onGesture(Gesture.ScreenDown, function () {
    led.stopAnimation()
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("Hello!")
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("BathRoom!")
})
