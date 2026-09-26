#include <iostream>
using namespace std;

void sayHello()
{
  cout << "Hello Everyone!!\n";
}

double sum(double a, double b)
{
  return a + b;
}

int main()
{
  sayHello();
  sayHello();

  cout << sum(5.34, 6.8) << endl;
  return 0;
}