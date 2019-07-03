
#include <stdio.h>

int IsWP(int *pressure, int *cost, int n){
        int P;
        int j;
        for(int i=0; i<n ; i++){
                j=i;
                P=0;
                while(1){
                        P+=(pressure[j]-cost[j]);
                        if(P<0) break;
                        else{
                                j=(j+1)%n;
                                if(j==i){
                                        return i;
                                        }
                                }
                        }
                }
        return -1;
}

int main()
{
    
    int pressure[] = {10,5,4,2,1};
    int cost[] = {1,1,1,1,1};
    int possible = IsWP(pressure, cost, 5);
    if(possible!=-1){
         printf("the best index is %d \n", possible); // must return 0
    }else{
        printf("not possible\n");
    }
   
    int pressure2[] = {10,5,4,2,1};
    int cost2[] = {100,1,1,1,1};
    possible = IsWP(pressure2, cost2, 5);
    if(possible!=-1){
         printf("the best index is %d \n", possible); 
    }else{
        printf("not possible\n"); // must be impossible
    }
   
    int pressure3[] = {10,5,4,2,1,1000,0,0};
    int cost3[] = {100,100,100,100,100,1,1,1};
    possible = IsWP(pressure3, cost3, 8);
    if(possible!=-1){
         printf("the best index is %d \n", possible); // must return 5
    }else{
        printf("not possible\n"); 
    }
   

    return 0;
}
