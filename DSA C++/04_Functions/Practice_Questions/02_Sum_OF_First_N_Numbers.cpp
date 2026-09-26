#include <iostream>
using namespace std;

int sumN(int n)
{
  int sum = 0;

  if (n < 1)
  {
    return sum;
  }

  for (int i = 1; i <= n; i++)
  {
    sum += i;
  }

  return sum;
}

int main()
{
  cout << "Sum of First -7 Number = " << sumN(-7) << endl;
  cout << "Sum of First 5 Number = " << sumN(5) << endl;
  return 0;
}