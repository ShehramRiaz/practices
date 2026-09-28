#include <iostream>
using namespace std;

int maxNum(int numbers[], int size)
{
  int maximum = numbers[0];

  for (int i = 1; i < size; i++)
  {
    maximum = max(numbers[i], maximum);
  }

  return maximum;
}

int main()
{
  int marks[] = {4, 675, 45, 345, 35, 43, 21, 12, -49, -90, -57, -346};

  cout << "Maximum = " << maxNum(marks, sizeof(marks) / sizeof(int)) << endl;
  return 0;
}