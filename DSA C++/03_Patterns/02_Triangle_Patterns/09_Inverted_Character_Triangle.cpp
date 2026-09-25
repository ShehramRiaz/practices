#include <iostream>
using namespace std;

int main()
{
  int n = 4;
  char ch = 'A';

  for (int i = 0; i < n; i++)
  {

    // Print Spaced
    for (int j = 0; j < i; j++)
    {
      cout << "  ";
    }

    // Print Characters
    for (int j = 1; j <= n - i; j++)
    {
      cout << ch << " ";
    }

    cout << "\n";
    ch++;
  }

  return 0;
}