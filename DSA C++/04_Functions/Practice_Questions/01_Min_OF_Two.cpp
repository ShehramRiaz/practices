#include <iostream>
using namespace std;

int minOfTwo(int a, int b)
{
  return a < b ? a : b;
}

int main()
{
  cout << minOfTwo(2, 5) << endl;
  cout << minOfTwo(24, 75) << endl;
  cout << minOfTwo(3, 3) << endl;
  return 0;
}