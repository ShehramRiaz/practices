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

int minNumIndex(int numbers[], int size)
{
  int index = 0;
  int minimum = numbers[0];

  for (int i = 1; i < size; i++)
  {
    if (numbers[i] < minimum)
    {
      minimum = numbers[i];
      index = i;
    }
  }

  return index;
}

int main()
{
  int marks[] = {4, 675, 45, 345, 35, 43, 21, 12, -49, -90, -57, -346};

  cout << "Minimum Value = " << minNum(marks, sizeof(marks) / sizeof(int)) << endl;
  cout << "Minimum Index = " << minNumIndex(marks, sizeof(marks) / sizeof(int)) << endl;
  return 0;
}