#include <iostream>
using namespace std;

int arrayProduct(int arr[], int size)
{
  int product = 1;

  for (int i = 0; i < size; i++)
  {
    product *= arr[i];
  }

  return product;
}

int main()
{
  int arr[] = {5, 4, 6, 3, 2};

  cout << arrayProduct(arr, 5) << endl;
  return 0;
}