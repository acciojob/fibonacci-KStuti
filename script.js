function fibonacci(N)
{
let a = 0; 
let b = 1;  
let c = 0; 
let currentPosition = 3;
while (currentPosition <= N) { 
    c = a + b;
     a = b; 
      b = c; 
    ++currentPosition;
}
return c;
}