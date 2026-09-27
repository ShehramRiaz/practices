#include <iostream>
using namespace std;

int nthFibonacci(int n)
{
  if (n < 0)
  {
    return -1;
  }

  int firstFib = 0;
  int secondFib = 1;
  int nextFib = firstFib + secondFib;

  int count = 2;

  if (n == 0)
  {
    return firstFib;
  }

  if (n == 1)
  {
    return secondFib;
  }

  while (count <= n)
  {
    firstFib = secondFib;
    secondFib = nextFib;
    nextFib = firstFib + secondFib;
    count++;
  }

  return secondFib;
}

int main()
{

  cout << "5th fibonacci = " << nthFibonacci(5);
  return 0;
}