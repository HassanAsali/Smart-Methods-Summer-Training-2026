int left1 = 2;
int left2 = 3;
int right1 = 4;
int right2 = 5;

void setup()
{
  pinMode(left1, OUTPUT);
  pinMode(left2, OUTPUT);
  pinMode(right1, OUTPUT);
  pinMode(right2, OUTPUT);
}

void loop()
{
  // Move forward for 30 seconds
  digitalWrite(left1, HIGH);
  digitalWrite(left2, LOW);
  digitalWrite(right1, HIGH);
  digitalWrite(right2, LOW);
  delay(30000);

  // Move backward for 60 seconds
  digitalWrite(left1, LOW);
  digitalWrite(left2, HIGH);
  digitalWrite(right1, LOW);
  digitalWrite(right2, HIGH);
  delay(60000);

  // Turn right and left for 60 seconds
  for (int i = 0; i < 6; i++)
  {
    // Turn right for 5 seconds
    digitalWrite(left1, HIGH);
    digitalWrite(left2, LOW);
    digitalWrite(right1, LOW);
    digitalWrite(right2, HIGH);
    delay(5000);

    // Turn left for 5 seconds
    digitalWrite(left1, LOW);
    digitalWrite(left2, HIGH);
    digitalWrite(right1, HIGH);
    digitalWrite(right2, LOW);
    delay(5000);
  }
}