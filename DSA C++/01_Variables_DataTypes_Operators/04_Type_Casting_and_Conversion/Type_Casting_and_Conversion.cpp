#include <iostream>
using namespace std;

int main()
{
  // Type Conversion (Implicit)
  char grade = 'A';
  int asciiValue = grade;

  cout << asciiValue << endl; // 65

  // Type Casting (Explicit)
  double price = 99.89989;
  int newPrice = (int)price;

  cout << newPrice << endl; // 99
  return 0;
}