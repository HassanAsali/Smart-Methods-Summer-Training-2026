#include <Servo.h>

Servo servo1;
Servo servo2;
Servo servo3;
Servo servo4;

int position = 0;

void setup()
{
  servo1.attach(2);
  servo2.attach(4);
  servo3.attach(7);
  servo4.attach(8);

  // Sweep from 0 to 180 degrees
  for (position = 0; position <= 180; position += 2)
  {
    servo1.write(position);
    servo2.write(position);
    servo3.write(position);
    servo4.write(position);
    delay(11);
  }

  // Sweep back from 180 to 0 degrees
  for (position = 180; position >= 0; position -= 2)
  {
    servo1.write(position);
    servo2.write(position);
    servo3.write(position);
    servo4.write(position);
    delay(11);
  }

  // Hold all servo motors at 90 degrees
  servo1.write(90);
  servo2.write(90);
  servo3.write(90);
  servo4.write(90);
}

void loop()
{
}