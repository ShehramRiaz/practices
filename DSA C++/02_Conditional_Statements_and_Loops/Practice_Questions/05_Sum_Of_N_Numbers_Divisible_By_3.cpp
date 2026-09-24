#include <iostream>
using namespace std;

int main()
{
  int n = 10, sum = 0;

  for (int i = 0; i < n; i++)
  {
    if (i % 3 == 0)
    {
      sum += i;
    }
  }

  cout << "Sum of first N numbers divisible by 3 = " << sum << endl;
  return 0;
}