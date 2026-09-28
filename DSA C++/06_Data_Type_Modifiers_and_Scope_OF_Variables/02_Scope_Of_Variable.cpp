#include <iostream>
using namespace std;

void fun()
{
  int age = 20;
}

int main()
{
  if (true)
  {
    int x = 10;
  }
  else
  {
    int y = 20;
  }

  // cout << x << y << endl; // Error - Variables are block scoped

  for (int i = 0; i < 10; i++)
  {
  }

  // cout << i << endl; // Error

  fun();
  // cout << age << endl; // age is removed from the stack when the function returns or ends

  int marks = 100;
  if (true)
  {
    cout << marks << endl; // parent scope variables are accessible
  }

  char grade = 'A';
  // char grade = 'C'; // Error - Cannot redeclare same variables in same scope
  if (true)
  {
    char grade = 'B'; // Masking of outer variable with same identifier
    cout << grade << endl; // B
  }
  return 0;
}