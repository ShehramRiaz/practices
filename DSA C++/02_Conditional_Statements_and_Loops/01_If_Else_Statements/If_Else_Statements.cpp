#include <iostream>
using namespace std;

int main()
{
  int marks;

  cout << "Enter your marks: ";
  cin >> marks;

  if (marks > 100 || marks < 0)
  {
    cout << "Invalid Marks\n";
  }
  else if (marks >= 90)
  {
    cout << "Your grade is A\n";
  }
  else if (marks >= 80)
  {
    cout << "Your grade is B\n";
  }
  else if (marks >= 70)
  {
    cout << "Your grade is C\n";
  }
  else if (marks >= 60)
  {
    cout << "Your grade is D\n";
  }
  else
  {
    cout << "Your grade is F\n";
  }
  return 0;
}