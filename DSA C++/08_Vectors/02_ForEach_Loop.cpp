#include <iostream>
#include <vector>

using namespace std;

int main()
{
  vector<int> marks = {65, 65, 78, 99, 89, 98, 67, 54, 32, 12, 21, 65};

  for (int mark : marks)
  {
    cout << mark << " ";
  }

  cout << endl;
  return 0;
}