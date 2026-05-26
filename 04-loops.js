const prompt = require('prompt-sync')();
// for(let i = 10 ; i >=1; i--){
//     console.log(i);
// }

// for(let i = 0 ; i <=10 ; i+=2){
//     console.log(i);
// }

// for (let i = 0 ; i <=50;i+=5){
//     console.log(i);
// }

// console.log("While loop");
// let i = 1;
// while (i<=5){
//     console.log(i);
//     i++;
// }

// /// khi dùng while khi đoán 1 cái gì đó mà chưa biết số lần lặp lại là bao nhiêu
// let target =9
// let guess = 0
// let attempts = 0

// while (guess !== target){
//     guess =Math.floor(Math.random()*10);
//     attempts++;
// }
// console.log(`Target: ${target}, Guess: ${guess}, Attempts: ${attempts}`);

// let queue = [1,2,3,4,5];
// while(queue.length >0){
//     let item = queue.shift();
//     console.log(item);
// }
// console.log("Queue is empty");

// console.log("Do-While loop");
// let count = 1;
// do{
//     console.log(count);
//     count++;
// }
// while(count <=5);

// let choice;
// do{
//     choice = prompt("1=play, 2=Settings, 0=Quit");
// }while(choice !== "0");
// chỉ lấy kết quả mà không cần tìm vị trí của phần tử trong mảng thì dùng for...of sẽ hiệu quả hơn vì nó cung cấp giá trị của phần tử trực tiếp mà không cần phải truy cập thông qua chỉ số. Điều này làm cho mã ngắn gọn và dễ đọc hơn khi bạn chỉ quan tâm đến giá trị của phần tử mà không cần biết vị trí của nó trong mảng.
// let word = "hello";
// for (let char of word){
//     console.log(char);
// }
// let numbers = [10,20,30];
// let sum = 0;
// for(let num of numbers){
//     sum += num;
// }
// console.log(sum);
// khi cần tìm vị trí của phần tử trong mảng thì dùng for...of sẽ không hiệu quả, vì nó không cung cấp chỉ số của phần tử. Trong trường hợp này, bạn nên sử dụng for...in hoặc phương thức .entries() để có được cả chỉ số và giá trị của phần tử.
// let fruits = ["apple", "banana", "cherry"];

// for (let [index, fruit] of fruits.entries()) {
//     console.log(`${index}: ${fruit}`);
// }
// // Output:
// // 0: apple
// // 1: banana
// // 2: cherry
// Loop     Cho         Trả về
// for...of Array, String VALUE
// for...in OBJECT,KEY (tên property)
// console.log("FOR...IN (OBJECT)");
// let user = {
//     name:"Luân",
//     age:23,
//     email:"tranhoailuan080623@gmail.com",
//     role:"Developer"
// }
// for (let key in user){
//     console.log(`${key}: ${user[key]}`);
// }

// let car ={
//     brand:"Toyota",
//     model:"Camry",
//     year:2020,
//     color:"Red"
// }
// let count = 0;
// for (let key in car){
//    count++;
// }
// console.log(`Number of properties in car: ${count}`);

// console.log("Break and Continue");
// for (let i=1 ; i<=10; i++){
//     if (i === 5){
//         break; // Dừng vòng lặp khi i bằng 5
//     }
//     console.log(i);
// }
// // continue
// for (let i=1 ; i<=10; i++){
//     if (i%2 === 0){
//         continue; // Bỏ qua số chẵn và tiếp tục với số lẻ
//     }
//     console.log(i);
// }

//USER CASE 1 tìm element đầu tiên
// let Users = [
//     {name: "A" , rode:"User"},
//     {name:"B",rode:"User"},
//     {name:"C",rode:"Admin"},
//     {name:"D",rode:"Admin"},
// ]
// let FistAdmin = null;
// for(let user of Users){
//     if (user.rode === "Admin"){
//         FistAdmin = user;
//         break; // Dừng vòng lặp sau khi tìm thấy Admin đầu tiên
//     }
// }
// console.log(FistAdmin.name);

//USER CASE 2 lọc invalid data
// let scores = [85,10,92,200,78];
// let validSum = 0;
// for (let score of scores){
//     if (score < 0 || score > 100){
//         continue; // Bỏ qua điểm không hợp lệ
//     }
//     validSum += score; // Chỉ cộng điểm hợp lệ
// }
// console.log(`Total valid scores: ${validSum}`);

// console.log("Nested Loops");
// for (let i = 1; i <= 3; i++){
//     for (let j = 1; j <= 3; j++){
//         console.log(`i: ${i}, j: ${j}`);
//     }
// }

// for (let i = 1; i <= 3; i++){
//     console.log(`Outer loop iteration: ${i}`);
//     for (let j = 1; j <= 5; j++){
//           console.log(`${i} x ${j} = ${i*j}`);
//     }
// }

// Array methods preview

// let numbers = [1,2,3,4,5];

// console.log("ForEach:");
// numbers.forEach(num =>{
//     console.log(num*2);
// })
// // Map là một phương thức tạo ra một mảng mới bằng cách áp dụng một hàm cho mỗi phần tử của mảng gốc. Nó trả về một mảng mới chứa kết quả của việc áp dụng hàm cho từng phần tử của mảng gốc, trong khi forEach chỉ thực hiện một hành động nào đó trên mỗi phần tử mà không trả về giá trị mới. Do đó, nếu bạn muốn tạo ra một mảng mới dựa trên các phần tử của mảng gốc, bạn nên sử dụng map thay vì forEach.
// console.log("Map:");
// let doubled = numbers.map(num => num*2);
// console.log(doubled);
// //Filter là lọc các element thỏa condition
// console.log("Filter:");
// let evenNumbers = numbers.filter(num => num%2 === 0);
// console.log(evenNumbers);
// //gộp array thanh 1 giá trị duy nhất
// console.log("Reduce:");
// let total = numbers.reduce((sum , num) => sum + num, 0);
// console.log(total);
// // tìm phần tử đầu tiên thỏa condition
// console.log("Find:");
// let firstBig = numbers.find(num => num > 3);
// console.log(firstBig);


// React component render danh sách
const users = [{name: "A"}, {name: "B"}, {name: "C"}];
return (
    <ul>
        {users.map(user => <li>{user.name}</li>)}
    </ul>
);

// ╔════════════════════════════════════════╗
// ║          LOOPS CHEAT SHEET             ║
// ╚════════════════════════════════════════╝

// 🔄 BASIC LOOPS
// ─────────────────────────────────
// for       │ Biết trước số lần
// while     │ Không biết số lần
// do-while  │ Chạy ít nhất 1 lần

// 🔄 ARRAY/OBJECT LOOPS
// ─────────────────────────────────
// for...of  │ Duyệt ARRAY → value
// for...in  │ Duyệt OBJECT → key

// 🔄 CONTROL FLOW
// ─────────────────────────────────
// break     │ Thoát loop ngay
// continue  │ Skip iteration

// 🔄 MODERN (preview)
// ─────────────────────────────────
// forEach   │ Chạy func mỗi element
// map       │ Tạo array mới
// filter    │ Lọc elements
// reduce    │ Gộp thành 1 value

// ⚠️ TRAPS:
// - Quên i++ trong while = infinite loop
// - Off-by-one (< vs <=)
// - Nested > 2 levels = chậm

// 🎯 RULES:
// - For loop khi biết số lần
// - For...of cho array (modern)
// - For...in cho object
// - Array methods > nested loops