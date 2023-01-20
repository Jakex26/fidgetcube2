let x = 0
input.onPinPressed(TouchPin.P0, function () {
    music.playMelody("C5 B A F E G B G ", 120)
})
input.onButtonPressed(Button.A, function () {
    basic.showNumber(x)
    x += 1
})
input.onGesture(Gesture.TiltLeft, function () {
    basic.showString("Water!")
})
input.onGesture(Gesture.ScreenDown, function () {
    led.stopAnimation()
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("" + (Math.randomBoolean()))
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(x)
    x += -1
})
input.onPinPressed(TouchPin.P1, function () {
    basic.showNumber(input.soundLevel())
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("BathRoom!")
})
input.onGesture(Gesture.TiltRight, function () {
    basic.showString("Water!")
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showNumber(input.temperature())
})
