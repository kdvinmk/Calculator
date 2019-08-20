function add(a,b){
    let c = a+b;
    console.log(c);
}

function sub(a,b){
    let c = a-b;
    console.log(c);

}

function divide(a,b){

    let c = a/b;
    console.log(c);
}

function multiply(a,b){
    let c = a*b;
    console.log(c);
}

add(4,6);
sub(4,6);
multiply(4,6);
divide(4,6);

display = document.querySelector('#result');
let displayempty = true;

allbtns = document.querySelectorAll('button');
allbtns = Array.from(allbtns);

for(i=0; i<allbtns.length; i++){
    allbtns[i].addEventListener('click', btntodisplay);
}

function btntodisplay(e){
    buttontxt = e.target.textContent;
    if(displayempty){
        display.textContent = buttontxt;
        displayempty = false;
    }
    else{
        display.textContent += buttontxt;
    }
}

function cleardisplay(){
    display.textContent = '0';
    displayempty = true;
}

clrbtn = document.querySelector('#clear');
clrbtn.addEventListener('click', cleardisplay);

function equalsOp()
{
	let divIndex = -1;
	let multIndex = -1;
	let addIndex = -1;
	let subIndex = -1;
	equation = display.textContent; 

	if(equation.indexOf('/') > -1)
	{
		divIndex = equation.indexOf('/');
		string1 = equation.slice(0,divIndex);
		string2 = equation.slice(divIndex + 1, equation.length);
		op1 = Number(string1);
		op2 = Number(string2);
		result = op1/op2;
		display.textContent = result;
	}
	if(equation.indexOf('X') > -1)
	{
		multIndex = equation.indexOf('X');
		string1 = equation.slice(0,multIndex);
		string2 = equation.slice(multIndex + 1, equation.length);
		op1 = Number(string1);
		op2 = Number(string2);
		result = op1*op2; 
		display.textContent = result;
	}
	if(equation.indexOf('+') > -1)
	{
		addIndex = equation.indexOf('+');
		string1 = equation.slice(0,addIndex);
		string2 = equation.slice(addIndex + 1, equation.length);
		op1 = Number(string1);
		op2 = Number(string2);
		result = op1+op2; 
		display.textContent = result;
	}
	if(equation.indexOf('-') > -1)
	{
		subIndex = equation.indexOf('-');
		string1 = equation.slice(0,subIndex);
		string2 = equation.slice(subIndex + 1, equation.length);
		op1 = Number(string1);
		op2 = Number(string2);
		result = op1-op2; 
		display.textContent = result;
	}
}

eqlsBtn = document.querySelector('#equals');
eqlsBtn.removeEventListener('click', btntodisplay);
eqlsBtn.addEventListener('click', equalsOp);