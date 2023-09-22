"""
Created by: Ernest
Created on: Sep 2023
This module is a Micro:bit MicroPython program
"""

#veriable for processor temperature
microbit_temp = 0

from microbit import *

display.clear()
display.show(Image.HAPPY)

while True:
    if button_a.is_pressed():
        display.clear()
        microbit_temp = temperature()
        display.show('temperature is ' + str(microbit_temp) + ' C.')
        display.show(Image.YES)
