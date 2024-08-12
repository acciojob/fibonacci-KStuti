function fibonacci(num) {
// your code here
	
    if (num <= 0){
        return "Invalid input. Please provide a positive integer."
	}
    if (num == 1){
        return 0
	}
    if (num == 2){
        return 1
	}
    else{
        a, b = 0, 1
        for _ in range(2, num)
            a, b = b, a + b
        return b
		}
print(fibonacci(1))  
print(fibonacci(5))  
	
}

module.exports = fibonacci;
