#include <iostream>
using namespace std;

bool isPowerOfTwo(int n)
{
  return n > 0 && (n & (n - 1)) == 0;
}

int main()
{
  cout << "1 is power of 2: " << (isPowerOfTwo(1) ? "Yes" : "No") << endl;
  cout << "8 is power of 2: " << (isPowerOfTwo(8) ? "Yes" : "No") << endl;
  cout << "6 is power of 2: " << (isPowerOfTwo(6) ? "Yes" : "No") << endl;

  return 0;
}