#include <iostream>
using namespace std;

int main()
{
  int isValid = true;
  int age;

  cout << "Enter your age: ";

  do
  {
    if (!isValid)
    {
      cout << "The age must be positive\n";
      cout << "Re-Enter the age: ";
    }

    cin >> age;

    if (age <= 0)
    {
      isValid = false;
    }
  } while (age <= 0);

  cout << "Your age is " << age << endl;

  return 0;
}