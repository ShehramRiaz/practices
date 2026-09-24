#include <iostream>
using namespace std;

int main()
{
  int num;

  cout << "Enter a number: ";
  cin >> num;

  cout << (num >= 0 ? "Positive" : "Negative") << endl;
  return 0;
}