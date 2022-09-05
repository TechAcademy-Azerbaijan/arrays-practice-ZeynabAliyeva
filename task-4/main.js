const { log } = require('console');
const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
  let n = result.input.split(",")
  let arr = [];

  for(let i = 0; i <n.length; i++){
  const element = parseInt(n[i])
  let exist = false;

      for(let j = 0; j < arr.length; j++){
          const next_element = parseInt(n[j])
          if(element==next_element){

            exist = true;
            break;
          }
  }
  if(!exist){
    arr.push(element);
  }
}
  console.log(arr.join(" "));
});