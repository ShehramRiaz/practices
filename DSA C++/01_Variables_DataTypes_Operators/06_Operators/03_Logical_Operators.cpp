#include <iostream>
using namespace std;

int main()
{
  cout << "true && true: " << (true && true) << endl;     // 1
  cout << "true && false: " << (true && false) << endl;   // 0
  cout << "false && true: " << (false && true) << endl;   // 0
  cout << "false && false: " << (false && false) << endl; // 0

  cout << endl;

  cout << "true || true: " << (true || true) << endl;     // 1
  cout << "true || false: " << (true || false) << endl;   // 1
  cout << "false || true: " << (false || true) << endl;   // 1
  cout << "false || false: " << (false || false) << endl; // 0

  cout << endl;

  cout << "!true: " << !true << endl;   // 0
  cout << "!false: " << !false << endl; // 1
  return 0;
}