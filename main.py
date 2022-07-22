def maqSlightLeft(x):#左に曲がる（ライントレース用）
    # maqueen.motor_run(maqueen.Motors.M1, maqueen.Dir.CW, 50)
    # maqueen.motor_run(maqueen.Motors.M2, maqueen.Dir.CW, 255)
    if x == 0:
        maqueen.motor_run(maqueen.Motors.M1, maqueen.Dir.CW, 30)
        maqueen.motor_run(maqueen.Motors.M2, maqueen.Dir.CW, 255)
    else:
            maqueen.motor_run(maqueen.Motors.M1, maqueen.Dir.CW, 170)
            maqueen.motor_run(maqueen.Motors.M2, maqueen.Dir.CW, 205)
            basic.pause(5250 * x)
            maqStop()
def maqSlightRight(y):#右に曲がる（ライントレース用)
    if y == 0:
        maqueen.motor_run(maqueen.Motors.M1, maqueen.Dir.CW, 255)
        maqueen.motor_run(maqueen.Motors.M2, maqueen.Dir.CW, 30)
    else:
            maqueen.motor_run(maqueen.Motors.M1, maqueen.Dir.CW, 170)
            maqueen.motor_run(maqueen.Motors.M2, maqueen.Dir.CW, 205)
            basic.pause(5250 * y)
            maqStop()

def maqStop():
    maqueen.motor_run(maqueen.Motors.M1, maqueen.Dir.CW, 0)
    maqueen.motor_run(maqueen.Motors.M2, maqueen.Dir.CW, 0)

def maqForward(x):
    if x == 0:
        maqueen.motor_run(maqueen.Motors.M1, maqueen.Dir.CW, 170)
        maqueen.motor_run(maqueen.Motors.M2, maqueen.Dir.CW, 205)
    else:
        maqueen.motor_run(maqueen.Motors.M1, maqueen.Dir.CW, 170)
        maqueen.motor_run(maqueen.Motors.M2, maqueen.Dir.CW, 205)
        basic.pause(5250 * x)
        maqStop()
#右折
def maqTurnRight():
    music.play_tone(330,music.beat(BeatFraction.WHOLE))
    basic.pause(100)
    for i in range(3):
        maqueen.write_led(maqueen.LED.LED_RIGHT, maqueen.LEDswitch.TURN_ON)
        basic.pause(100)
        maqueen.write_led(maqueen.LED.LED_RIGHT, maqueen.LEDswitch.TURN_OFF)
        basic.pause(100)
    maqueen.motor_run(maqueen.Motors.M1, maqueen.Dir.CW, 255)#左255
    maqueen.motor_run(maqueen.Motors.M2, maqueen.Dir.CW, 0)#右0
    basic.pause(500)
    maqStop()
#左折
def maqTurnLeft():
    music.play_tone(262,music.beat(BeatFraction.WHOLE))
    basic.pause(100)
    for i in range(3):
        maqueen.write_led(maqueen.LED.LED_LEFT, maqueen.LEDswitch.TURN_ON)
        basic.pause(100)
        maqueen.write_led(maqueen.LED.LED_LEFT, maqueen.LEDswitch.TURN_OFF)
        basic.pause(100)
    maqueen.motor_run(maqueen.Motors.M1, maqueen.Dir.CW, 0)
    maqueen.motor_run(maqueen.Motors.M2, maqueen.Dir.CW, 255)
    basic.pause(600)
    maqStop()
#追加課題
#右折
def maqSteerRight(z):
    if z == 0:
        for i in range(3):
            maqueen.write_led(maqueen.LED.LED_RIGHT, maqueen.LEDswitch.TURN_ON)
            basic.pause(100)
            maqueen.write_led(maqueen.LED.LED_RIGHT, maqueen.LEDswitch.TURN_OFF)
            basic.pause(100)
        maqueen.motor_run(maqueen.Motors.M1, maqueen.Dir.CW, 255)#左255
        maqueen.motor_run(maqueen.Motors.M2, maqueen.Dir.CW, 0)#右0
        basic.pause(500)
#左折
def maqStreerLeft(y):
    if y == 0:
        for i in range(3):
            maqueen.write_led(maqueen.LED.LED_LEFT, maqueen.LEDswitch.TURN_ON)
            basic.pause(100)
            maqueen.write_led(maqueen.LED.LED_LEFT, maqueen.LEDswitch.TURN_OFF)
            basic.pause(100)
        maqueen.motor_run(maqueen.Motors.M1, maqueen.Dir.CW, 0)
        maqueen.motor_run(maqueen.Motors.M2, maqueen.Dir.CW, 160)
        basic.pause(y)
    

#後退
def maqBackward(x):
    if x == 0:
        maqueen.motor_run(maqueen.Motors.M1, maqueen.Dir.CCW, 170)
        maqueen.motor_run(maqueen.Motors.M2, maqueen.Dir.CCW, 205)
    else:
        maqueen.motor_run(maqueen.Motors.M1, maqueen.Dir.CCW, 170)
        maqueen.motor_run(maqueen.Motors.M2, maqueen.Dir.CCW, 205)
        basic.pause(5250 * x)
        maqStop()

####################################################################

#黒が０、白が１
def on_forever():
    #左が０かつ右が０
    if maqueen.read_patrol(maqueen.Patrol.PATROL_LEFT) == 0 and maqueen.read_patrol(maqueen.Patrol.PATROL_RIGHT) == 0:
        # basic.show_string("S")
        maqueen.motor_run(maqueen.Motors.ALL, maqueen.Dir.CW, 200)
    #左が１かつ右が０
    elif maqueen.read_patrol(maqueen.Patrol.PATROL_LEFT) == 1 and maqueen.read_patrol(maqueen.Patrol.PATROL_RIGHT) == 0:
        # basic.show_string("R")
        # maqueen.motor_run(maqueen.Motors.M1, maqueen.Dir.CW, 200)
        # maqueen.motor_run(maqueen.Motors.M2, maqueen.Dir.CW, 50)
        maqSlightRight(0)
    #左が０かつ右が１
    elif maqueen.read_patrol(maqueen.Patrol.PATROL_LEFT) == 0 and maqueen.read_patrol(maqueen.Patrol.PATROL_RIGHT) == 1 :
        # basic.show_string("L")
        # maqueen.motor_run(maqueen.Motors.M1, maqueen.Dir.CW, 50)
        # maqueen.motor_run(maqueen.Motors.M2, maqueen.Dir.CW, 200)
        maqSlightLeft(0)

basic.forever(on_forever)



