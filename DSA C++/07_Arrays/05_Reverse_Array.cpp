#include <iostream>
using namespace std;

void reverseArray(int array[], int size)
{
  int start = 0, end = size - 1;

  while (start <= end)
  {
    swap(array[start], array[end]);
    start++;
    end--;
  }
}

int main()
{
  int arrayOdd[] = {1, 2, 3, 4, 5};
  int arrayEven[] = {1, 2, 3, 4, 5, 6, 7, 8};

  reverseArray(arrayOdd, 5);
  reverseArray(arrayEven, 8);

  for (int i = 0; i < 5; i++)
  {
    cout << arrayOdd[i] << " ";
  }

  cout << endl;

  for (int i = 0; i < 8; i++)
  {
    cout << arrayEven[i] << " ";
  }

  cout << endl;
  return 0;
}