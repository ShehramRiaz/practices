#include <iostream>
using namespace std;

int main()
{
  int n = 4;

  // TOP
  for (int i = 0; i < n; i++)
  {
    // Spaces
    for (int j = 0; j < n - i - 1; j++)
    {
      cout << "  ";
    }

    cout << "* ";

    if (i != 0)
    {
      // Print Inner Spaces
      for (int j = 0; j < 2 * i - 1; j++)
      {
        cout << "  ";
      }

      cout << "*";
    }

    cout << "\n";
  }

  // Bottom
  for (int i = 0; i < n - 1; i++)
  {
    // Spaces
    for (int j = 0; j < i + 1; j++)
    {
      cout << "  ";
    }

    cout << "* ";

    if (i != n - 2)
    {
      // Inner Spaces
      for (int j = 0; j < 2 * (n - i - 2) - 1; j++)
      {
        cout << "  ";
      }

      cout << "*";
    }

    cout << "\n";
  }

  return 0;
}