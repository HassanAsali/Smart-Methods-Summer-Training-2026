# Task 01 - Image Classification using Teachable Machine

## Project Preview

![Training Dataset](teachable-machine.png)

![Prediction Result](prediction-output.png)

The model was trained to recognize three different objects:

- Mobile Phone
- Computer Mouse
- Digital Camera

---

## Project Description

In this task, I used Google's Teachable Machine to make an image classification model.

I trained the model using three different classes, then exported it as a TensorFlow Keras model.

After that, I used a Python script to test the model with a new image.

---

## Training Data

Each class has 23 images.

Classes:

- Mobile Phone
- Computer Mouse
- Digital Camera

---

## Model

The model was exported as TensorFlow Keras.

The exported files are:

- keras_model.h5
- labels.txt

---

## Python Script

The Python script is very simple.

First, it loads the trained model
then it reads the labels
after that, I give it an image to test
the model predicts which class the image belongs to
Finally, it shows the predicted class and the confidence score.

---

## Test Result

I tested the model using a new image that was not used during training.

Example output:

```
Predicted Class: Computer Mouse
Confidence Score: 0.8783
```

The model was able to recognize the object correctly.

---

## Files

- image_classification.py
- keras_model.h5
- labels.txt
- for test.jpg
- teachable-machine.png
- prediction-output.png

---

## Notes

This task helped me learn how to train a simple image classification model using Teachable Machine and test it with Python.
