#include <iostream>
using namespace std;

int reverseInt(int n)
{
  int reversed = 0;

  while (n > 0)
  {
    int lastDigit = n % 10;
    n /= 10;

    reversed = reversed * 10 + lastDigit;
  }

  return reversed;
}

int main()
{
  cout << "Reverse of 653 = " << reverseInt(653) << endl; // 356
  cout << "Reverse of 7815 = " << reverseInt(7815) << endl; // 5187
  return 0;
}