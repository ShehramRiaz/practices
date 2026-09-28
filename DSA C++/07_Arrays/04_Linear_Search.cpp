#include <iostream>
using namespace std;

int linearSearch(int array[], int size, int target)
{
  for (int i = 0; i < size; i++)
  {
    if (array[i] == target)
    {
      return i;
    }
  }

  return -1;
}

int main()
{
  int marks[5] = {34, 65, 765, 56, 4};

  cout << "Required Index = " << linearSearch(marks, 5, 56) << endl; // 3
  cout << "Required Index = " << linearSearch(marks, 5, 56354) << endl; // -1
  return 0;
}