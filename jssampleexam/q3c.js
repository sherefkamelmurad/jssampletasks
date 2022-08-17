const arr = [];

const max = Math.max(...arr);

const indexes = [];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === max) {
    indexes.push(i);
  }
}

document.write(indexes) 
