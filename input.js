function dis(val) 
		{ 
			document.getElementById("result").value+=val 
		} 
		
		
		function solve() 
		{ 
			let x = document.getElementById("result").value 
			let y = eval(x) 
			document.getElementById("result").value = y 
		} 
		
	
		function clr() 
		{ 
			document.getElementById("result").value = "" 
		} 
function doMath(){
var x=document.getElementById("result").value
var result = Math.sqrt(x);
document.getElementById("result").value = result
}



function check_Palindrome(str_entry){
	a=true;
	for(let i=0,j=str_entry.length-1;i<=j;i++,j--){
		if(str_entry[i]!==str_entry[j]){
			a=false;
			break;
		}
		
	}
	return a;
}
function validation(){
	str_entry=document.getElementById("demo").value;
	h=check_Palindrome(str_entry);
	alert(h);
}