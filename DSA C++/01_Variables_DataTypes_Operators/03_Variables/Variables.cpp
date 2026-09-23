#include <iostream>
using namespace std;

int main()
{
  // Datatypes and variable initialization
  int age = 20;
  char grade = 'A';
  float PI = 3.141f;
  double price = 6.984759494849;
  bool isAdult = true;

  // Printing variables

  cout << "Printing values" << endl;
  cout << age << endl;
  cout << grade << endl;
  cout << PI << endl;
  cout << price << endl;
  cout << isAdult << endl; // Booleans are printed as 0 or 1

  // Getting the sizes of variables
  cout << "Sizes of variables" << endl;
  cout << "Size of int " << sizeof age << endl;
  cout << "Size of char " << sizeof grade << endl;
  cout << "Size of float " << sizeof PI << endl;
  cout << "Size of double " << sizeof price << endl;
  cout << "Size of bool " << sizeof isAdult << endl;

  return 0;
}