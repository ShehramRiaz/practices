#include <iostream>
using namespace std;

int decToBin(int decNumber)
{
  int binary = 0, power = 1;

  while (decNumber > 0)
  {
    int remainder = decNumber % 2;
    decNumber /= 2;
    binary += remainder * power; 
    power *= 10;
  }

  return binary;
}

int main()
{
  for (int i = 0; i <= 10; i++)
  {
    cout << "Binary of " << i << " = " << decToBin(i) << endl;
  }
  return 0;
}