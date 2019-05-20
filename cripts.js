const projename= document.getElementById("contactName");

const projedescri= document.getElementById("contactNum");



const button=document.getElementById("button");

const IsOutup=document.getElementById("IsOutup");
button.onclick=function (){

    const myList=contactName.value;
    const myval=contactNum.value;
    console.log(myList);
    console.log(myval);

    if(myList&&myval){

        localStorage.setItem(myList,myval);
    
        location.reload();
    }
       
};
IsOutup1.innerHTML +=`<h2>${" CONTACT NO.    "}<br>`;
IsOutup.innerHTML +=`<h2>${"CONTACT-NAME   "}<br>`;
 numbers.innerHTML+=` <h2>${"PHONE-NUMBER"}<br>`;
 ContDiv.innerHTML+="TOTAL CONTACTS :"+localStorage.length;
for(let i=0; i<localStorage.length; i++){
    const myList=localStorage.key(i);
    const myval=localStorage.getItem(myList);


    IsOutup1.innerHTML +=`<h3>${i+1}<br>`;
    IsOutup.innerHTML +=`<h3>${myList}<br>`;
    numbers.innerHTML+=`<h3>${myval}<br>`;
}



