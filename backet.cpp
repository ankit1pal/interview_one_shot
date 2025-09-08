#include<stdio.h>
#include<vector>
#include<algorithm>
#include<iostream>
#include<stack>

int main() {
    string s="((())())()";
    int n=2;
    while(stack.size()>n){
        if(stack.empty()){
            break;
        }
        if(stack.top()=='('){
            stack.pop();
        }
        stack.pop();
    }
    return 0;
}