#include <iostream>
using namespace std;

void doubleValues(int numbers[], int size)
{
  for (int i = 0; i < size; i++)
  {
    numbers[i] *= 2;
  }
}

int main()
{
  int arr[] = {1, 2, 3, 4, 5, 6, 7, 8, 9};

  doubleValues(arr, 9);

  for (int i = 0; i < 9; i++)
  {
    cout << arr[i] << " ";
  }

  return 0;
}