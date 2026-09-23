#include <iostream>
using namespace std;

int main()
{
  cout << "3 > 2: " << (3 > 2) << endl; // true => 1
  cout << "3 < 2: " << (3 < 2) << endl; // false => 0

  cout << "3 >= 3: " << (3 >= 3) << endl; // true => 1
  cout << "3 <= 5: " << (3 <= 5) << endl; // true => 1

  cout << "5 == 5: " << (5 == 5) << endl; // true => 1
  cout << "5 != 7: " << (5 != 7) << endl; // true => 1
  return 0;
}