const { log } = require('console');
const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
  let n = result.input.split(',')
  let arr = [];

    for (let i = 0; i < n.length - 1; i++) {
      if (n[i + 1] !== n[i]) {
        arr.push(n[i]);
      }
    }
        console.log(arr);
});