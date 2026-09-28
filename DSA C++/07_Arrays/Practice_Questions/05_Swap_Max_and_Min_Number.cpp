#include <iostream>
using namespace std;

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

int maxNumIndex(int numbers[], int size)
{
  int index = 0;
  int maximum = numbers[0];

  for (int i = 1; i < size; i++)
  {
    if (numbers[i] > maximum)
    {
      maximum = numbers[i];
      index = i;
    }
  }

  return index;
}

void swapMinMax(int arr[], int size)
{
  int minIndex = minNumIndex(arr, size);
  int maxIndex = maxNumIndex(arr, size);

  swap(arr[minIndex], arr[maxIndex]);
}

int main()
{
  int numbers[] = {4, 78, 36, 6756, 56, 23};
  swapMinMax(numbers, 6);

  for (int i = 0; i < 6; i++)
  {
    cout << numbers[i] << " ";
  }

  return 0;
}