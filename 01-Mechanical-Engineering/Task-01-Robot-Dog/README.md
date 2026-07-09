# Task 01 - Robot Dog Mechanical Design

## Design Preview

![3D View](robot%20dog%203d%20view.png)

![Side View](robot%20dog%20side%20view.png)

## Body and Structure

This is a simple four-legged robot dog that is designed to walk and carry up to 8 kg.

The design is simple and includes a dedicated space on the top for the battery (the upper rectangle), a front camera, and a balanced leg arrangement to distribute the weight evenly between all four legs.

## Joints and Degrees of Freedom

Each leg has two joints: a hip joint and a knee joint. This gives the robot a total of 8 degrees of freedom.

## Motor Selection

Servo motors are selected because they are suitable for this simple mechanical design.

## Initial Torque Calculation

For the initial torque calculation, it is assumed that the robot carries a total load of 8 kg. Therefore, each leg supports approximately 2 kg.

The force is calculated as:

```text
F = m × g
F = 2 × 9.81 = 19.62 N
```

Assuming the leg length is 0.1 m:

```text
T = F × r
T = 19.62 × 0.1 = 1.96 N·m
```

The required torque is approximately 2 N·m, so it is recommended to use a servo motor with a torque higher than 2 N·m.

## Stability and Walking Method

To improve stability, the battery is placed near the center of the robot so that the weight is distributed evenly.

The robot is expected to walk slowly, with each leg moving one at a time to increase stability during walking.

## Expected Mechanical Problems

Some mechanical problems may occur, such as high stress on the joints if the load increases, or reduced stability when moving on uneven or inclined surfaces.
