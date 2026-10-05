#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

int majorityBruteForce(vector<int> &vec)
{
  for (int value : vec)
  {
    int count = 0;

    for (int element : vec)
    {
      if (value == element)
      {
        count++;
      }
    }

    if (count > vec.size() / 2)
    {
      return value;
    }
  }

  return vec.front();
}

int majorityOptimized(vector<int> &vec)
{
  int majority = vec[0];
  int count = 1;

  // sort
  sort(vec.begin(), vec.end());

  for (int i = 1; i < vec.size(); i++)
  {
    if (vec[i] == vec[i - 1])
    {
      count++;
    }
    else
    {
      count = 1;
      majority = vec[i];
    }

    if (count > vec.size() / 2)
    {
      return majority;
    }
  }

  return -1; // Never
}

int mooreAlgorithm(vector<int> vec)
{
  int count = 0;
  int majority = vec[0];

  for (int value : vec)
  {
    if (count == 0)
      majority = value;

    if (value == majority)
      count++;
    else
      count--;
  }

  return majority;
}

int main()
{
  vector<int> nums = {1, 2, 2, 3, 2, 2, 5};

  cout << "Majority (Brute Force) = " << majorityBruteForce(nums) << "\n";
  cout << "Majority (Optimized) = " << majorityOptimized(nums) << "\n";
  cout << "Majority (Moore's Algorithm) = " << mooreAlgorithm(nums) << "\n";
  return 0;
}