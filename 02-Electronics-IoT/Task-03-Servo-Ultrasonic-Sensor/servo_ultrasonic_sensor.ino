#include <Servo.h>

Servo myServo;

int trigPin = 7;
int echoPin = 6;
int servoPin = 9;
int ledPin = 3;

long duration;
float distance;

void setup()
{
  pinMode(trigPin, OUTPUT);
  pinMode(echoPin, INPUT);
  pinMode(ledPin, OUTPUT);

  myServo.attach(servoPin);
  myServo.write(0);

  Serial.begin(9600);
}

void loop()
{
  digitalWrite(trigPin, LOW);
  delayMicroseconds(2);

  digitalWrite(trigPin, HIGH);
  delayMicroseconds(10);
  digitalWrite(trigPin, LOW);

  duration = pulseIn(echoPin, HIGH);
  distance = duration * 0.034 / 2;

  Serial.print("Distance: ");
  Serial.print(distance);
  Serial.println(" cm");

  if (distance > 0 && distance <= 10)
  {
    myServo.write(90);
    digitalWrite(ledPin, HIGH);
  }
  else
  {
    myServo.write(0);
    digitalWrite(ledPin, LOW);
  }

  delay(100);
}