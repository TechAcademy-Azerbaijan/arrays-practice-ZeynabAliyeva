const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
    let n = result.input.split(',')
    let count = 0;
    for(let i=0; i<n.length; i++){
        const element = parseInt(n[i]) //[0]
        const first_element = parseInt(n[i+1]) //[1]
        const second_element = parseInt(n[i+2]) //[2]
        if(first_element>element && first_element>second_element){
            count++
        }
    }
        console.log(count);
});
