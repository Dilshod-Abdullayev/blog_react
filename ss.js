let height = 10; 
let symbol = "#"; 

for (let i = 1; i <= height; i++) {
  let spaces = " ".repeat(height - i);
  let row = symbol.repeat(i * 2 - 1);
  console.log(spaces + row);
}