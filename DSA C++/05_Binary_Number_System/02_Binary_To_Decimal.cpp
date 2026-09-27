#include <iostream>
using namespace std;

int binToDec(int binNum)
{
  int decNum = 0, pow = 1;

  while (binNum > 0)
  {
    int lastDigit = binNum % 10;
    decNum += lastDigit * pow;

    binNum /= 10;
    pow *= 2;
  }

  return decNum;
}

int main()
{
  cout << "Decimal of 101 = " << binToDec(101) << endl;
  cout << "Decimal of 1101 = " << binToDec(1101) << endl;
  cout << "Decimal of 101010 = " << binToDec(101010) << endl;
  return 0;
}