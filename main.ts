/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Ernest
 * Created on: Sep 2023
 * This program checks procesor temperature
*/

let microbitTemperature: number

basic.clearScreen()
basic.showIcon(IconNames.Happy)
basic.pause(1000)

input.onButtonPressed(Button.A, function () {
  microbitTemperature = input.temperature()
  basic.showNumber(microbitTemperature)
})
