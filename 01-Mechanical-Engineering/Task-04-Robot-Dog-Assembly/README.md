# Task 04 - Robot Dog Assembly and Exploded View

## Project Preview

### Final Assembly

![Robot Dog Assembly](robot-dog-assembly.PNG)

### Exploded View

![Robot Dog Exploded View](robot-dog-exploded-view.PNG)

## Project Description

This task was to assemble a robot dog in Onshape and create an exploded view.

The robot was assembled from separate imported parts. I connected the body, cover, four servo motors, servo horns, legs, and screws.

I also wrote a simple control algorithm to explain how the four servo motors can move the legs.

## Components

The main components are:

- Main body
- Body cover
- Four SG90 servo motors
- Four servo horns
- Two left legs
- Two right legs
- Cover screws
- Servo mounting screws
- Servo horn screws

## Assembly Process

I started by inserting the main body and fixing it in the Assembly.

Each SG90 servo was imported as many separate parts. I used `Group` to make all the parts of each servo move together as one unit.

I installed one servo in each corner of the body. The body cover was placed above the main body, then the four legs and servo horns were added.

Finally, I installed the cover screws, servo mounting screws, and servo horn screws.

## Mates Used

I used different Mates during the assembly:

- `Group` was used for the separate parts of each servo.
- `Fastened Mate` was used for the servo motors, body cover, servo horns, and screws.
- `Revolute Mate` was used between the legs and servo shafts.

The `Revolute Mate` allows every leg to rotate around its servo shaft without separating from the robot.

## Motors and Movement

The robot uses four SG90 servo motors.

Each servo controls one leg. The servo horn transfers the rotation from the servo shaft to the leg.

The legs can move forward and backward by changing the servo angles. The movement of the four servos must be coordinated so the robot can walk without losing balance.

## Simple Walking Algorithm

The robot can use a simple diagonal walking sequence.

The front-left leg and rear-right leg move together. After they return to the ground, the front-right leg and rear-left leg move.

The walking process is:

1. Start the system.
2. Move all servos to the standing position.
3. Move the front-left and rear-right legs forward.
4. Return both legs to the ground.
5. Move the front-right and rear-left legs forward.
6. Return both legs to the ground.
7. Repeat the sequence to continue walking.
8. Return all legs to the standing position when the stop command is received.


## Exploded View

The exploded view was created after completing the full assembly.

The cover, screws, servo motors, servo horns, and legs were moved away from the main body.

Explode lines were added to show the correct position and assembly direction of every part.

## Onshape Link

[View the Robot Dog Assembly and Exploded View](https://cad.onshape.com/documents/57cc1fdfeb14bfde529807fd/w/78d8b1576243eec1d1117c34/e/306058162401dfeb45ebad88?renderMode=0&rightPanel=explodedViewPanel&uiState=6a6fabfd1660821f534dffc0)

## Files

- `robot-dog-assembly.png`
- `robot-dog-exploded-view.png`
- `README.md`
