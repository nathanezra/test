
#include <stdio.h>
int Maxdist(int *A, int len){
    if(len==1){
        return -1;
    }
    if(A[0]<=A[len-1]){
        return len-1;
    }else{
        int a=Maxdist(A+1,len-1);
        int b=Maxdist(A,len-1); a>b ? a : b;
        return a>b ? a : b;
    }
    
}
int main()
{
    int A[] = {10,5,4,2,1};
    int len = Maxdist(A,5);
    printf("the lengh is %d \n", len); //return -1 
    
    int B[] = {3,5,4,2};
    len = Maxdist(B,4);
    printf("the lengh is %d \n", len); //return 2
    
    int C[] = {10,5,-1,2,1,11,2,96,78,4,5,3,0};
    len = Maxdist(C,13);
    printf("the lengh is %d \n", len); //return 10
    return 0;
}
