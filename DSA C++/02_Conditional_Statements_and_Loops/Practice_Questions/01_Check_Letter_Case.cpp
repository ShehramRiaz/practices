#include <iostream>
using namespace std;

int main()
{
  char ch;

  cout << "Enter a letter: ";
  cin >> ch;

  if (ch >= 'a' && ch <= 'z')
  {
    cout << "Character is Lower Case\n";
  }
  else if (ch >= 'A' && ch <= 'Z')
  {
    cout << "Character is Upper Case\n";
  }
  else
  {
    cout << "Enter English Letter Only!!!\n";
  }
  return 0;
}