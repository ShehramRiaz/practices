#include <iostream>
using namespace std;

bool isPrime(int number)
{
  if (number < 2)
  {
    return false;
  }

  for (int i = 2; i * i <= number; i++)
  {
    if (number % i == 0)
    {
      return false;
    }
  }

  return true;
}

void printFirstNPrimes(int n)
{
  int count = 0;
  int number = 2;

  while (count < n)
  {
    if (isPrime(number))
    {
      cout << number << " ";
      count++;
    }

    number++;
  }
}

int main()
{
  printFirstNPrimes(5);
  return 0;
}