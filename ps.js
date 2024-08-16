// prime numbers:- 

num =+prompt("Enter the number: ")
count = 0;
if(num>1){
    for(i=2;i<num;i++){
        // console.log(i)
        if(num%i==0){
            console.log("It is not a Prime number")
            count++
            break
        }
    }
    if(count==0){
        console.log("It is a Prime number")
    }
}else{
    console.log("It is a composite number")
}


number=prompt("Enter the number: ")
primesum=0
for(num of number){
    count = 0;
if(num>1){
    for(i=2;i<num;i++){
        // console.log(i)
        if(num%i==0){
            // console.log("It is not a Prime number")
            count++
            break
        }
    }
    if(count==0){
        // console.log("It is a Prime number")
        primesum+=Number(num)  //primesum=primesum+Number(num)
        
    }
    
}else{
    console.log("It is a composite number")
}
}
console.log("The sum of prime numbers is ", primesum)


number=prompt("Enter the number: ")
primesum=0
nonprimesum=0
for(num of number){
    count = 0;
if(num>1){
    for(i=2;i<num;i++){
        // console.log(i)
        if(num%i==0){
                    nonprimesum+=Number(num)
            count++
            break
        }
    }
    if(count==0){
        primesum+=Number(num)
        
    }
    
}else{
    console.log("It is a composite number")
}
}
console.log("The sum of Non-prime numbers is ", nonprimesum)


number=prompt("Enter the num: ")
primesum=0;
nonprimesum=0;
for(num of number){
    count=0;
    if(num>1){
        for(i=2;i<num;i++){
            if(num%i==0){
                nonprimesum+=Number(num)
                count++
                break
            }
        }
    if(count==0){
        primesum+=Number(num)
    }
}
}
if(primesum>nonprimesum){
    console.log("Primesum is bigger")
}else{
    console.log("Non-primesum is bigger")
}