#include <iostream>
#include <vector>

using namespace std;

int main()
{
  vector<int> vec1;
  vector<char> vec2 = {'a', 'b', 'c', 'd'};
  vector<int> vec3(5, 2); // vector of 5 elements with each value = 2;

  cout << vec2[0] << endl;
  cout << vec2[1] << endl;
  cout << vec2[2] << endl;
  cout << vec2[3] << endl;

  cout << vec3[0] << endl;
  cout << vec3[1] << endl;
  cout << vec3[2] << endl;
  cout << vec3[3] << endl;
  cout << vec3[4] << endl;
  return 0;
}