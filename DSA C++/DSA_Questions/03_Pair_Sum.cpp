#include <iostream>
#include <vector>

using namespace std;

vector<int> pairSumBruteForce(vector<int> vec, int targetSum)
{
  vector<int> pair;

  for (int i = 0; i < vec.size(); i++)
  {
    for (int j = i + 1; j < vec.size(); j++)
    {
      if (vec[i] + vec[j] == targetSum)
      {
        pair.push_back(i);
        pair.push_back(j);

        return pair;
      }
    }
  }

  pair.push_back(-1);
  pair.push_back(-1);

  return pair;
}

vector<int> pairSumOptimized(vector<int> vec, int targetSum)
{
  vector<int> pair;

  int i = 0;
  int j = vec.size() - 1;

  while (i < j)
  {
    int pairSum = vec[i] + vec[j];
    if (pairSum < targetSum)
    {
      i++;
    }
    else if (pairSum > targetSum)
    {
      j--;
    }
    else
    {
      pair.push_back(i);
      pair.push_back(j);

      return pair;
    }
  }

  pair.push_back(-1);
  pair.push_back(-1);

  return pair;
}

int main()
{
  // Sorted Array
  vector<int> vec = {1, 4, 5, 8, 11, 14, 15, 21};

  vector<int> pairBruteForce = pairSumBruteForce(vec, 9);
  vector<int> pairOptimized = pairSumOptimized(vec, 9);

  cout << "Brute Force Pair Sum = (" << pairBruteForce[0] << ", " << pairBruteForce[1] << ")\n";
  cout << "Optimized Pair Sum = (" << pairOptimized[0] << ", " << pairOptimized[1] << ")\n\n";

  pairBruteForce = pairSumBruteForce(vec, 10);
  pairOptimized = pairSumOptimized(vec, 10);

  cout << "Brute Force Pair Sum = (" << pairBruteForce[0] << ", " << pairBruteForce[1] << ")\n";
  cout << "Optimized Pair Sum = (" << pairOptimized[0] << ", " << pairOptimized[1] << ")\n\n";
  return 0;
}