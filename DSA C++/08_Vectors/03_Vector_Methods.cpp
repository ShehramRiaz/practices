#include <iostream>
#include <vector>

using namespace std;

int main()
{
  vector<int> vec;

  cout << "Initial Size = " << vec.size() << "\n";           // 0
  cout << "Initial Capacity = " << vec.capacity() << "\n\n"; // 0

  vec.push_back(25);
  vec.push_back(35);
  vec.push_back(45);

  cout << "Size after pushing = " << vec.size() << "\n";           // 3
  cout << "Capacity after pushing = " << vec.capacity() << "\n\n"; // 4

  vec.pop_back(); // only size is affected

  cout << "Size after poping = " << vec.size() << "\n";           // 2
  cout << "Capacity after poping = " << vec.capacity() << "\n\n"; // 4

  for (int value : vec)
  {
    cout << value << "\n";
  }

  cout << "\nFirst Value = " << vec.front() << "\n";
  cout << "Last Value = " << vec.back() << "\n";
  return 0;
}