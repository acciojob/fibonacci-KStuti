function fibonacci(n) {
    let a = 0;
	let b = 1;
	let c;
	let i;
		if(n==1){	
			return a;
		}
		else if(n==2){
			return b;
		}
       
        for (let i = 3; i <=n; i++) {
         c = a + b;
            a = b;
            b = c;
        }
        return b;
    }

module.exports =fibbonacci;
