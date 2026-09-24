#include <iostream>
using namespace std;

int main()
{
  int n;
  bool isPrime = true;

  cout << "Enter a number: ";
  cin >> n;

  if (n < 2)
  {
    isPrime = false;
  }
  else
  {
    for (int i = 2; i <= n / 2; i++)
    {
      if (n % i == 0)
      {
        isPrime = false;
        break;
      }
    }
  }

  cout << (isPrime ? "Prime" : "Non-Prime") << endl;

  return 0;
}