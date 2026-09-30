#include <iostream>
#include <vector>

using namespace std;

int linearSearch(vector<int> &vec, int target)
{
  for (int i = 0; i < vec.size(); i++)
  {
    if (vec[i] == target)
    {
      return i;
    }
  }

  return -1;
}

int main()
{
  vector<int> vec = {5, 67, 4, 3, 5, 79};

  cout << "Target index = " << linearSearch(vec, 3) << "\n"; // 3
  cout << "Target index = " << linearSearch(vec, 346) << "\n"; // -1

  return 0;
}