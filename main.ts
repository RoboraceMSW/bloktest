//% color="#AA278D" icon="\uf005"
namespace myGlobals {
    let _lives = 3

    /**
     * Get current lives
     */
    //% block="lives" 
    //% block.loc.category="Variables"
    //% blockNamespace="Variables"
    //% blockSetVariable="lives"
    export function getLives(): number {
        return _lives
    }

    /**
     * Set lives to a value
     */
    //% block="set lives to %value"
    //% block.loc.category="Variables"
    //% blockNamespace="Variables"
    export function setLives(value: number): void {
        _lives = value
    }
}

