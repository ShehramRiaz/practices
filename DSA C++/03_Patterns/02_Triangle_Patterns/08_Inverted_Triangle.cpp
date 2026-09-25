#include <iostream>
using namespace std;

int main()
{
  int n = 4;

  for (int i = 0; i < n; i++)
  {
    // Print Spaced
    for (int j = 0; j < i; j++)
    {
      cout << "  ";
    }

    // Print Numbers
    for (int j = 1; j <= n - i; j++)
    {
      cout << i + 1 << " ";
    }

    cout << "\n";
  }

  return 0;
}