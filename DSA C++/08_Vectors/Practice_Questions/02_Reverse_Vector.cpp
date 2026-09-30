#include <iostream>
#include <vector>

using namespace std;

void ReverseVector(vector<int> &vec)
{
  int start = 0;
  int end = vec.size() - 1;

  while (start < end)
  {
    swap(vec[start], vec[end]);
    start++;
    end--;
  }
}

int main()
{
  vector<int> vec = {10, 20, 30, 40, 50, 60};

  ReverseVector(vec);

  for (int value : vec)
  {
    cout << value << "\n";
  }
  return 0;
}