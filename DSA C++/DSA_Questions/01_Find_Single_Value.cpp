#include <iostream>
#include <vector>

using namespace std;

/*
n ^ n = 0;
n ^ 0 = n;
*/

int singleValue(vector<int> &vec)
{
  int value = 0;

  for (int val : vec)
  {
    value ^= val;
  }

  return value;
}

int main()
{
  vector<int> vec = {1, 2, 3, 7, 3, 2, 1};

  cout << "Single Value = " << singleValue(vec) << "\n";

  return 0;
}