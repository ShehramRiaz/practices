#include <iostream>
using namespace std;

void printIntersection(int arr1[], int size1, int arr2[], int size2)
{
  for (int i = 0; i < size1; i++)
  {
    for (int j = 0; j < size2; j++)
    {
      if (arr1[i] == arr2[j])
      {
        cout << arr1[i] << " ";
        break;
      }
    }
  }
}

int main()
{
  int arr1[] = {1, 2, 3, 4, 5, 6};
  int arr2[] = {4, 5, 6, 7, 8, 9};

  printIntersection(arr1, 6, arr2, 6);
  return 0;
}