#include <iostream>
using namespace std;

int main()
{
  int marks[] = {56, 21, 54, 34, 27, 90, 98, 91};

  for (int i = 0; i < sizeof(marks) / sizeof(int); i++)
  {
    cout << marks[i] << endl;
  }
  return 0;
}