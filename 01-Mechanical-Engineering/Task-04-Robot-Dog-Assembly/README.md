# Task 04 - Robot Dog Assembly and Large Robot Design

## Project Preview

### Final Assembly

![Robot Dog Assembly](robot-dog-assembly.PNG)

### Exploded View

![Robot Dog Exploded View](robot-dog-exploded-view.PNG)

## Project Description

This task has two parts.

The first part is a proposed design and control algorithm for a large robot dog. The design includes the body, legs, motors, sensors, power system, and walking method.

The second part is assembling a smaller robot dog in Onshape. I connected the body, cover, four servo motors, servo horns, legs, and screws. I also created an exploded view to show how the parts are connected.

## Onshape Assembly

The small robot dog was assembled from separate imported parts.

The main parts are:

- Main body
- Body cover
- Four SG90 servo motors
- Four servo horns
- Two left legs
- Two right legs
- Cover screws
- Servo mounting screws
- Servo horn screws

I used `Group` to make each servo motor move as one unit because every servo was imported as many separate parts.

I used `Fastened Mate` for the body cover, servo motors, servo horns, and screws. I used `Revolute Mate` for the legs because they need to rotate around the servo shafts.

## Large Robot Dog Concept

The proposed robot is much larger and stronger than the small SG90 model.

The approximate design targets are:

- Length: 700 mm
- Width: 350 mm
- Standing height: 500 mm
- Total mass: about 20 kg
- Payload: about 5 kg
- Three joints for each leg
- Twelve actuators in total

The body can be made from an aluminum frame with lightweight covers. Carbon fiber tubes can also be used in the legs to reduce weight. Rubber feet will improve grip and reduce slipping.

## Joints and Degrees of Freedom

Each leg has three degrees of freedom:

1. Hip movement to the side.
2. Hip movement forward and backward.
3. Knee movement.

This gives the robot 12 degrees of freedom in total.

Three joints per leg will give the robot better balance and more natural movement compared to the small model that uses only one servo for each leg.

## Motors

The proposed design uses 12 CubeMars AK80-8 brushless actuators.

One actuator is used for every joint. The AK80-8 includes a brushless motor, gearbox, driver, and encoder in one unit.

Main motor specifications:

- Rated voltage: 48 V
- Rated torque: 10 Nm
- Peak torque: 25 Nm
- Gear ratio: 8:1
- Motor weight: 570 g
- CAN communication
- Position, speed, and torque control

These motors are more suitable for a large quadruped robot than SG90 servo motors because they provide much higher torque and include position feedback.

## Simple Torque Calculation

The estimated total mass is 20 kg.

The static load on each leg is:

`Force = (20 × 9.81) / 4`

`Force = 49.05 N`

If the estimated distance from the joint to the load is 0.20 m:

`Torque = Force × Distance`

`Torque = 49.05 × 0.20`

`Torque = 9.81 Nm`

A safety factor of 2 is used for movement and impact:

`Required peak torque = 9.81 × 2`

`Required peak torque = 19.62 Nm`

The AK80-8 has a peak torque of 25 Nm, which is higher than the estimated requirement. More detailed simulation and testing would still be needed before building the real robot.

## Electronics and Sensors

The proposed robot uses:

- NVIDIA Jetson Orin Nano as the main computer
- STM32 microcontroller for real-time motor control
- BNO085 IMU for body orientation and balance
- Joint encoders inside the actuators
- Force sensors in the feet
- Depth camera for obstacle detection
- Emergency stop button
- 48 V lithium battery with a BMS
- DC-DC converters for the computer and sensors

The Jetson processes the camera data and plans the movement. The microcontroller reads the sensors and sends commands to the motors through CAN communication.

## Walking Algorithm

The robot follows these steps:

1. Start the system.
2. Check the battery, motors, and sensors.
3. Read the IMU, joint encoders, and foot sensors.
4. Estimate the body angle and leg positions.
5. Select the required movement such as standing, walking, or turning.
6. Generate the position of each foot.
7. Use inverse kinematics to calculate the required joint angles.
8. Correct the joint angles using the IMU data.
9. Send position and torque commands to the motors.
10. Repeat the control loop continuously.
11. Stop the robot if it detects high temperature, high current, low battery, or a dangerous body angle.

## Simple Pseudocode

```text
START

Initialize motors and sensors

IF system check fails
    Stop the robot
END IF

WHILE robot is running

    Read IMU
    Read joint encoders
    Read foot sensors
    Read movement command

    Estimate body position and angle
    Select walking pattern
    Calculate foot paths
    Calculate joint angles using inverse kinematics
    Correct balance using IMU data
    Send commands to all motors

    IF unsafe condition is detected
        Stop all motors
    END IF

END WHILE

END
```

## Exploded View

The exploded view was created after completing the full assembly.

The cover, screws, servo motors, servo horns, and legs were moved away from the main body. Explode lines were added to show the location and assembly direction of each part.

## Onshape Link

[View the Robot Dog Assembly and Exploded View](https://cad.onshape.com/documents/57cc1fdfeb14bfde529807fd/w/78d8b1576243eec1d1117c34/e/306058162401dfeb45ebad88?renderMode=0&rightPanel=explodedViewPanel&uiState=6a6fabfd1660821f534dffc0)

## Files

- `robot-dog-assembly.png`
- `robot-dog-exploded-view.png`
- `README.md`
