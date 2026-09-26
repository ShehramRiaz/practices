#include <iostream>
using namespace std;

int main()
{
  int n = 4;

  // TOP
  for (int i = 0; i < n; i++)
  {
    // Stars
    for (int j = 0; j < i + 1; j++)
    {
      cout << "* ";
    }

    // Spaces
    for (int j = 0; j < 2 * (n - i - 1); j++)
    {
      cout << "  ";
    }

    // Stars
    for (int j = 0; j < i + 1; j++)
    {
      cout << "* ";
    }

    cout << "\n";
  }

  // Bottom
  for (int i = 0; i < n; i++)
  {
    // Stars
    for (int j = 0; j < n - i; j++)
    {
      cout << "* ";
    }

    // Spaces
    for (int j = 0; j < 2 * i; j++)
    {
      cout << "  ";
    }

    // Stars
    for (int j = 0; j < n - i; j++)
    {
      cout << "* ";
    }

    cout << "\n";
  }

  return 0;
}