#include <iostream>
using namespace std;

int minNum(int numbers[], int size)
{
  int minimum = numbers[0];

  for (int i = 1; i < size; i++)
  {
    minimum = min(numbers[i], minimum);
  }

  return minimum;
}

int main()
{
  int marks[] = {4, 675, 45, 345, 35, 43, 21, 12, -49, -90, -57, -346};

  cout << "Minimum = " << minNum(marks, sizeof(marks) / sizeof(int)) << endl;
  return 0;
}