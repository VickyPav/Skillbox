let sum = 0;
 
while (i = prompt('Enter the number: ')) {
    let j = parseInt(i, 10);
    if (Number.isNaN(j)) {
      continue;
    }
    sum += j;
};

alert('Sum: ' + sum);