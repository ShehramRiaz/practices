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

int main()
{
  cout << "-10! = " << factorial(-10) << endl;
  cout << "0! = " << factorial(0) << endl;
  cout << "1! = " << factorial(1) << endl;
  cout << "4! = " << factorial(4) << endl;
  return 0;
}