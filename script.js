//your JS code here. If required.
const output=document.getElementById('output');

function processArray(){
	const numbers=[1,2,3,4];

	return new Promise((resolve){
		setTimeout(()=>{
			resolve(numbers);
		},1000);
	}).then((arr)=>{
		const evennumber=arr.filter((num)=>num%2===0)

		output.textcontent=evennumber;
	   return new Promise((resolve) => {
          setTimeout(() => {
            resolve(evennumber);
          }, 2000);
        });
      }).then((evennumber)=>{
		const double=evennumber.map((num)=>num*2);
		output.textcontent=double;
		return double;
	  });
}
processArray();