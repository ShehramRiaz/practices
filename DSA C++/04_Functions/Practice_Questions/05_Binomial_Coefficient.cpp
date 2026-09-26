#include <iostream>
using namespace std;

int factorial(int n)
{
  int fact = 1;

  if (n < 2)
  {
    return fact;
  }

  for (int i = 2; i <= n; i++)
  {
    fact *= i;
  }

  return fact;
}

double nCr(int n, int r)
{
  return (double)factorial(n) / (factorial(r) * factorial(n - r));
}

int main()
{
  cout << "5C3 = " << nCr(5, 3) << endl;
  return 0;
}