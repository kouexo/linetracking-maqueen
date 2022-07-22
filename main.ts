function maqSlightLeft(x: number) {
    // 左に曲がる（ライントレース用）
    //  maqueen.motor_run(maqueen.Motors.M1, maqueen.Dir.CW, 50)
    //  maqueen.motor_run(maqueen.Motors.M2, maqueen.Dir.CW, 255)
    if (x == 0) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 30)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 255)
    } else {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 170)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 205)
        basic.pause(5250 * x)
        maqStop()
    }
    
}

function maqSlightRight(y: number) {
    // 右に曲がる（ライントレース用)
    if (y == 0) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 255)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 30)
    } else {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 170)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 205)
        basic.pause(5250 * y)
        maqStop()
    }
    
}

function maqStop() {
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 0)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 0)
}

function maqForward(x: number) {
    if (x == 0) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 170)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 205)
    } else {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 170)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 205)
        basic.pause(5250 * x)
        maqStop()
    }
    
}

// 右折
function maqTurnRight() {
    music.playTone(330, music.beat(BeatFraction.Whole))
    basic.pause(100)
    for (let i = 0; i < 3; i++) {
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
        basic.pause(100)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
        basic.pause(100)
    }
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 255)
    // 左255
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 0)
    // 右0
    basic.pause(500)
    maqStop()
}

// 左折
function maqTurnLeft() {
    music.playTone(262, music.beat(BeatFraction.Whole))
    basic.pause(100)
    for (let i = 0; i < 3; i++) {
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
        basic.pause(100)
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
        basic.pause(100)
    }
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 0)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 255)
    basic.pause(600)
    maqStop()
}

// 追加課題
// 右折
function maqSteerRight(z: any) {
    if (z == 0) {
        for (let i = 0; i < 3; i++) {
            maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
            basic.pause(100)
            maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
            basic.pause(100)
        }
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 255)
        // 左255
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 0)
        // 右0
        basic.pause(500)
    }
    
}

// 左折
function maqStreerLeft(y: number) {
    if (y == 0) {
        for (let i = 0; i < 3; i++) {
            maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
            basic.pause(100)
            maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
            basic.pause(100)
        }
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 0)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 160)
        basic.pause(y)
    }
    
}

// 後退
function maqBackward(x: number) {
    if (x == 0) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 170)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 205)
    } else {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 170)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 205)
        basic.pause(5250 * x)
        maqStop()
    }
    
}

// ###################################################################
// 黒が０、白が１
basic.forever(function on_forever() {
    // 左が０かつ右が０
    if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 0) {
        //  basic.show_string("S")
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 200)
    } else if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 0) {
        // 左が１かつ右が０
        //  basic.show_string("R")
        //  maqueen.motor_run(maqueen.Motors.M1, maqueen.Dir.CW, 200)
        //  maqueen.motor_run(maqueen.Motors.M2, maqueen.Dir.CW, 50)
        maqSlightRight(0)
    } else if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 1) {
        // 左が０かつ右が１
        //  basic.show_string("L")
        //  maqueen.motor_run(maqueen.Motors.M1, maqueen.Dir.CW, 50)
        //  maqueen.motor_run(maqueen.Motors.M2, maqueen.Dir.CW, 200)
        maqSlightLeft(0)
    }
    
})
