#include <iostream>
using namespace std;

int digitSum(int num)
{
  int sum = 0;

  if (num < 0)
  {
    num *= -1;
  }

  while (num > 0)
  {
    int lastDigit = num % 10;
    num /= 10;
    sum += lastDigit;
  }

  return sum;
}

int main()
{
  cout << digitSum(5674) << endl;
  cout << digitSum(-5674) << endl;
  cout << digitSum(0) << endl;
  return 0;
}