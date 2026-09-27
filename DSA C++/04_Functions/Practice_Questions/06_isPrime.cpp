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

int main()
{
  cout << "5 is prime: " << isPrime(5) << endl;
  cout << "9 is prime: " << isPrime(9) << endl;
  cout << "1 is prime: " << isPrime(1) << endl;
  cout << "11 is prime: " << isPrime(11) << endl;
  return 0;
}