#include <iostream>
using namespace std;

int main()
{
  cout << "sizeof int = " << sizeof(int) << " bytes\n\n";

  // int can be omitted
  cout << "sizeof short int = " << sizeof(short int) << " bytes\n";
  cout << "sizeof short = " << sizeof(short) << " bytes\n\n";

  cout << "sizeof long int = " << sizeof(long int) << " bytes\n";
  cout << "sizeof long = " << sizeof(long) << " bytes\n\n";

  cout << "sizeof long long int = " << sizeof(long long int) << " bytes\n";
  cout << "sizeof long long = " << sizeof(long long) << " bytes\n\n";

  unsigned int age = 10;
  unsigned marks = -100; // MSB is treated as value resulting in bigger number

  cout << "age = " << age << endl;
  cout << "marks = " << marks << endl;
  return 0;
}