controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    info.changeLifeBy(-1)
    info.changeScoreBy(2)
})
info.setLife(15)
info.startCountdown(2)
