#include <iostream>
#include <vector>

using namespace std;

int bruteForce(vector<int> &vec)
{
  int maxSubArrSum = INT_MIN;

  for (int start = 0; start < vec.size(); start++)
  {
    for (int end = start; end < vec.size(); end++)
    {
      int currSum = 0;
      for (int i = start; i <= end; i++)
      {
        currSum += vec[i];
      }

      maxSubArrSum = max(currSum, maxSubArrSum);
    }
  }

  return maxSubArrSum;
}

int OptimizedBruteForce(vector<int> &vec)
{
  int maxSubArrSum = INT_MIN;

  for (int start = 0; start < vec.size(); start++)
  {
    int currSum = 0;
    for (int end = start; end < vec.size(); end++)
    {
      currSum += vec[end];

      maxSubArrSum = max(currSum, maxSubArrSum);
    }
  }

  return maxSubArrSum;
}

int kadaneAlgorithm(vector<int> &vec)
{
  int maxSubArrSum = INT_MIN;
  int currSum = 0;

  for (int value : vec)
  {
    currSum += value;
    maxSubArrSum = max(maxSubArrSum, currSum);

    if (currSum < 0)
    {
      currSum = 0;
    }
  }

  return maxSubArrSum;
}

int main()
{
  vector<int> vec = {1, -3, 5, -4};
  cout << "Max Sub Array Sum (Brute Force) = " << bruteForce(vec) << "\n";
  cout << "Max Sub Array Sum (Optimized Brute Force) = " << OptimizedBruteForce(vec) << "\n";
  cout << "Max Sub Array Sum (Kadane's Algorithm) = " << kadaneAlgorithm(vec) << "\n";
  return 0;
}