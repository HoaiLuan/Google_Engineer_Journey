for(let i=1; i <= 30; i++){
    if (i % 3 === 0 && i % 5 === 0){    // ← LÊN ĐẦU
        console.log("FizzBuzz");
    } else if (i % 3 === 0){
        console.log("Fizz");
    } else if (i % 5 === 0){
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

function tenFunction(thamSo){
    if(thamSo >=90){
        return "A";
    }else if(thamSo >=80){
        return "B";
    }else if(thamSo >=70){
        return "C";
    }else if(thamSo >=60){
        return "D";
    }else{
        return "F";
    }
}

let kq = tenFunction(123);
console.log(kq); 