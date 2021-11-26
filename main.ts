let playercar: game.LedSprite = null
let score = 0
let gameon = false
let car0: game.LedSprite = null
let car1: game.LedSprite = null
let car2: game.LedSprite = null
let car3: game.LedSprite = null
let car4: game.LedSprite = null
input.onButtonPressed(Button.A, function () {
    if (playercar.get(LedSpriteProperty.X) > 0) {
        playercar.change(LedSpriteProperty.X, -1)
    }
})
input.onButtonPressed(Button.B, function () {
    if (playercar.get(LedSpriteProperty.X) < 4) {
        playercar.change(LedSpriteProperty.X, 1)
    }
})
basic.forever(function () {
    score = 0
    playercar = game.createSprite(2, 4)
    gameon = true
    while (gameon == true) {
        basic.pause(2000)
    }
    game.addScore(score)
    game.gameOver()
})
basic.forever(function () {
    basic.pause(100)
    if (gameon == true) {
        car0 = game.createSprite(0, 0)
        basic.pause(randint(0, 5000))
        while (gameon == true) {
            if (car0.get(LedSpriteProperty.Y) == 4) {
                if (playercar.isTouching(car0)) {
                    gameon = false
                } else {
                    score = score + 1
                    car0.set(LedSpriteProperty.Y, 0)
                    basic.pause(randint(0, 5000))
                }
            } else {
                car0.change(LedSpriteProperty.Y, 1)
                basic.pause(500)
            }
        }
    }
})
basic.forever(function () {
    basic.pause(100)
    if (gameon == true) {
        car1 = game.createSprite(1, 0)
        basic.pause(randint(0, 5000))
        while (gameon == true) {
            if (car1.get(LedSpriteProperty.Y) == 4) {
                if (playercar.isTouching(car1)) {
                    gameon = false
                } else {
                    score = score + 1
                    car1.set(LedSpriteProperty.Y, 0)
                    basic.pause(randint(0, 5000))
                }
            } else {
                car1.change(LedSpriteProperty.Y, 1)
                basic.pause(500)
            }
        }
    }
})
basic.forever(function () {
    basic.pause(100)
    if (gameon == true) {
        car2 = game.createSprite(2, 0)
        basic.pause(randint(0, 5000))
        while (gameon == true) {
            if (car2.get(LedSpriteProperty.Y) == 4) {
                if (playercar.isTouching(car2)) {
                    gameon = false
                } else {
                    score = score + 1
                    car2.set(LedSpriteProperty.Y, 0)
                    basic.pause(randint(0, 5000))
                }
            } else {
                car2.change(LedSpriteProperty.Y, 1)
                basic.pause(500)
            }
        }
    }
})
basic.forever(function () {
    basic.pause(100)
    if (gameon == true) {
        car3 = game.createSprite(3, 0)
        basic.pause(randint(0, 5000))
        while (gameon == true) {
            if (car3.get(LedSpriteProperty.Y) == 4) {
                if (playercar.isTouching(car3)) {
                    gameon = false
                } else {
                    score = score + 1
                    car3.set(LedSpriteProperty.Y, 0)
                    basic.pause(randint(0, 5000))
                }
            } else {
                car3.change(LedSpriteProperty.Y, 1)
                basic.pause(500)
            }
        }
    }
})
basic.forever(function () {
    basic.pause(100)
    if (gameon == true) {
        car4 = game.createSprite(4, 0)
        basic.pause(randint(0, 5000))
        while (gameon == true) {
            if (car4.get(LedSpriteProperty.Y) == 4) {
                if (playercar.isTouching(car4)) {
                    gameon = false
                } else {
                    score = score + 1
                    car4.set(LedSpriteProperty.Y, 0)
                    basic.pause(randint(0, 5000))
                }
            } else {
                car4.change(LedSpriteProperty.Y, 1)
                basic.pause(500)
            }
        }
    }
})
