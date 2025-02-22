    let inp=document.querySelector("input");
    let preVal="";
    let insertInp="";

    inp.addEventListener("input",()=>{
    let inpVal=inp.value.length;

    if(inpVal === 4 && preVal.length < inpVal){
        insertInp+=`${inp.value.substring(0,inpVal-1)}`;
        inp.value=`+(${inp.value.substring(0,inpVal-1)}) - ${inp.value.charAt(inpVal-1)}`;
    }
    else if(preVal.length===10 && preVal.length > inpVal){
        inp.value=insertInp;
    }
    preVal=inp.value;         
    })

