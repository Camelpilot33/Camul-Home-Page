#include <iostream>
#include <string>
using namespace std;

void strev(char* str)
{
    int len = strlen(str);
    int i;
    for (i = 0; i < len / 2; i++)
    {
        char temp = str[i];
        str[i] = str[len - i - 1];
        str[len - i - 1] = temp;
    }
}
int val(char c)
{
    if (c >= '0' && c <= '9')
        return (int)c - '0';
    else
        return (int)c - 'A' + 10;
}
int toDeci(string str, int base)
{
    int len = str.size();
    int power = 1;
    int num = 0;
    for (int i = len - 1; i >= 0; i--) {
        if (val(str[i]) >= base) {
            printf("Invalid Number");
            return -1;
        }
        num += val(str[i]) * power;
        power = power * base;
    }
    return num;
}
char reVal(int num)
{
    if (num >= 0 && num <= 9)
        return (char)(num + '0');
    else
        return (char)(num - 10 + 'A');
}
string fromDeci(int base, int inputNum)
{
    string res = "";
    while (inputNum > 0) {
        res += reVal(inputNum % base);
        inputNum /= base;
    }
    reverse(res.begin(), res.end());
    return res;
}
void convertBase(string s, int a, int b)
{
    int num = toDeci(s, a);
    string ans = fromDeci(b, num);
    cout << ans;
}
int freq(string text) {
    int max = 0;
    int count = 0;
    char maxCharcter;
    for (char q = ' '; q <= '~'; q++) {
        count = 0;
        for (int i = 0; i < text.length(); i++){
            if (text[i] == q)
                count++;
        }
        if (count > max){
            max = count;
            maxCharcter = q;
        }
    }
    return max;
}

int findModeCount(int num, int base, string start) {
    char res[100];
    int s = toDeci(start,base);
    string big = "";
    for (int i = 0; i < num; i++) {
        big += fromDeci(base, s + i);
    }
    return freq(big);
}

int main()
{
    int n = 15, b = 8;
    string s = "2";
    cout<<findModeCount(n,b,s);
}
