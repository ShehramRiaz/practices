#include <iostream>
using namespace std;

void printUnique(int arr[], int size)
{
  for (int i = 0; i < size; i++)
  {
    bool isUnique = true;

    for (int j = 0; j < size; j++)
    {
      if (i != j && arr[i] == arr[j])
      {
        isUnique = false;
        break;
      }
    }

    if (isUnique)
    {
      cout << arr[i] << " ";
    }
  }
}

int main()
{
  int array[] = {1, 2, 3, 77, 1, 2, 3, 4};

  printUnique(array, sizeof(array) / sizeof(int));

  return 0;
}