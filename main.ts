//% color="#AA278D" icon="\uf26c"
namespace myGlobals {
    let _lives = 3

    //% block="lives"
    export function getLives(): number {
        return _lives
    }

    //% block="set lives to %value"
    export function setLives(value: number): void {
        _lives = value
    }
}

