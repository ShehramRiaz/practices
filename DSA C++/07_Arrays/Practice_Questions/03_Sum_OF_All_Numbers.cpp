#include <iostream>
using namespace std;

int arraySum(int arr[], int size)
{
  int sum = 0;

  for (int i = 0; i < size; i++)
  {
    sum += arr[i];
  }

  return sum;
}

int main()
{
  int arr[] = {5, 4, 6, 3, 2};
  cout << arraySum(arr, 5) << endl;
  return 0;
}