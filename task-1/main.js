const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
    let n = result.input.split(',')
    let sum = 0;
    let n_length = n.length;
    
    for(let i=0; i<n.length; i++){
        sum+=parseInt(n[i]) //18
    }
    let sum_division = parseInt(sum/n_length ); //3

    let sum_second = 0;
    let count = 0;
    for(let i=0; i<n.length; i++){
        const element = parseInt(n[i])
        if(element>sum_division){
            sum_second+=element
            count++
        }
    }
    console.log(`${sum_second}\n${count}`);
});
