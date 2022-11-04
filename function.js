
//In command prompt install - npm install prompt-sync
const prompt = require('prompt-sync')();
 a = prompt("enter a value : ")
a = Number(a)
even_check(a);
function even_check(no)
{
for(i=1;i<=no;i++)
{
if(i%2==0)
console.log("%d is even",i);
}
}
//even_check(12);
