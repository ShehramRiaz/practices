#include <iostream>
using namespace std;

int main()
{
  // Declring Array;
  int marks[5];

  // Declaration and Initialization
  double price[4] = {99.78, 67.73, 78.00, 7.6};
  char grades[100] = {'A', 'B', 'F', 'A'}; // still 96 locations available

  // Size inference
  int ages[] = {5, 10, 89}; // array size 3

  // Accessing and updating array elements
  cout << "Ages\n";
  cout << ages[0] << endl; // 5
  cout << ages[1] << endl; // 10
  cout << ages[2] << endl; // 89

  cout << "Update index 2\n";
  ages[2] = 45;
  cout << ages[2] << endl;

  // Accessing out of range elements
  int array[5] = {1, 2, 3, 4, 5};
  cout << array[100] << endl; // Garbage value

  return 0;
}