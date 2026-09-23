#include <iostream>
using namespace std;

int main()
{
  int a = 10, b = 3;

  cout << "Sum = " << a + b << endl; // 13
  cout << "Sub = " << a - b << endl; // 7
  cout << "Mul = " << a * b << endl; // 30

  cout << "Div = " << a / b << endl; // 3

  // Type Casting
  cout << "Full Div = " << (double)a / b << endl; // 3.33333

  cout << "Mod = " << a % b << endl; // 1

  return 0;
}