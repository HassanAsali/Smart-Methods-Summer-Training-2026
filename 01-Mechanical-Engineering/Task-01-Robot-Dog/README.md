# Task 01 - Robot Dog Mechanical Design

## Design Preview

![3D View](robot%20dog%203d%20view.png)

![Side View](robot%20dog%20side%20view.png)

## Body and Structure

This robot has four legs and is designed to carry about 8 kg.

The body is rectangular with a space on the top for the battery and a front camera. The legs are placed to help balance the robot while walking.

## Joints

Each leg has two joints:
- Hip joint
- Knee joint

So the robot has a total of 8 degrees of freedom.

## Motors

I chose servo motors because they are simple to use and good enough for this basic design.

## Torque Calculation

If the robot carries 8 kg, then each leg carries about 2 kg.

Force:

```text
F = m × g
F = 2 × 9.81
F = 19.62 N
```

If the leg length is about 0.1 m:

```text
T = F × r
T = 19.62 × 0.1
T = 1.96 N·m
```

So I will need a servo motor with torque a little higher than 2 N·m.

## Stability

To improve the balance, I placed the battery near the middle of the robot so the weight is distributed better.

## Walking

The robot is designed to walk slowly by moving one leg at a time to keep its balance.

## Possible Problems

Some problems may happen if the robot carries more weight than expected or walks on uneven ground. The joints may also have more stress.
