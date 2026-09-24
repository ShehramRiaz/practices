#include <iostream>
using namespace std;

int main()
{
  int n, oddSum = 0;

  cout << "Enter a number: ";
  cin >> n;

  for (int i = 1, j = 1; j <= n; i++)
  {
    if (i % 2 != 0)
    {
      oddSum += i;
      j++;
    }
  }

  cout << "Sum of first " << n << " Odd numbers = " << oddSum << "\n";
  return 0;
}