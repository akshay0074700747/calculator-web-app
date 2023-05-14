let display=document.getElementById('textdisplaydiv');
let i=0;
let x=0;
let arr=0;
let oparr='';
let Arrayofx=[];
let flag=0;
let res=0;
let buttons=Array.from(document.getElementsByClassName('inputbuttons'));
let opdisplay=document.getElementById('operatordisplay');
buttons.map( button => {
    button.addEventListener('click', (e)=>{
        console.log(e.target);
        console.log(e.target.innerText);
        
        if (e.target.innerText=='ON') {
            i=i+1;
            console.log(i);
            if (i%2==0) {
                display.innerText='OFF';
            } else {
                display.innerText='';
            }
        }
        if (e.target.innerText!='ON'&display.innerText!='OFF') {
            display.innerText+=e.target.innerText;
            opdisplay.innerText='';
            switch (e.target.innerText) {
                case '+':
                     x=parseFloat(display.innerText);
                     Arrayofx.push(x);
                    display.innerText='';
                    opdisplay.innerText='';
                    opdisplay.innerText='+';
                     flag=1;
                     oparr=opdisplay.innerText;
                     Arrayofx.push(oparr);
                    break;
                    case '-':
                         x=parseFloat(display.innerText);
                         Arrayofx.push(x);
                        display.innerText='';
                        opdisplay.innerText='';
                        opdisplay.innerText='-';
                         flag=2;
                         oparr=opdisplay.innerText;
                         Arrayofx.push(oparr);
                    break;
                    case 'x':
                         x=parseFloat(display.innerText);
                         Arrayofx.push(x);
                        display.innerText='';
                        opdisplay.innerText='';
                        opdisplay.innerText='x';
                         flag=3;
                         oparr=opdisplay.innerText;
                         Arrayofx.push(oparr);
                    break;
                    case '/':
                         x=parseFloat(display.innerText);
                         Arrayofx.push(x);
                        display.innerText='';
                        opdisplay.innerText='';
                        opdisplay.innerText='/';
                         flag=4;
                         oparr=opdisplay.innerText;
                         Arrayofx.push(oparr);
                    break;
                    case '=':
                        x=parseFloat(display.innerText);
                        display.innerText='';
                        Arrayofx.push(x);
                        
                        //this lines of code is used to remove the nan from the array
                        Arrayofx=Arrayofx.filter(function (n) {
                           return n || n ===0;
                        });
                        console.log(Arrayofx);
                            for (let j = 0; j < Arrayofx.length; j++) {
                                switch (Arrayofx[j]) {
                                    case '/':
                                        arr=Arrayofx[j-1]/Arrayofx[j+1];
                                        Arrayofx.splice(j-1,3,arr);
                                        j=0;
                                        break;
                                }
                            }
                        for (let j = 0; j < Arrayofx.length; j++) {
                            switch (Arrayofx[j]) {
                                case 'x':
                                    arr=Arrayofx[j-1]*Arrayofx[j+1];
                                    Arrayofx.splice(j-1,3,arr);
                                    j=0;
                                    break;
                            }
                        }
                        for (let j = 0; j < Arrayofx.length; j++) {
                            switch (Arrayofx[j]) {
                                case '-':
                                    arr=Arrayofx[j-1]-Arrayofx[j+1];
                                    Arrayofx.splice(j-1,3,arr);
                                    j=0;
                                    break;
                            }
                        }
                        for (let j = 0; j < Arrayofx.length; j++) {
                            switch (Arrayofx[j]) {
                                case '+':
                                    arr=Arrayofx[j-1]+Arrayofx[j+1];
                                    Arrayofx.splice(j-1,3,arr);
                                    j=0;
                                    break;
                            }
                        }
                        display.innerText=Arrayofx;
                        Arrayofx.length=0;
                    break;
                    case 'AC':
                        display.innerText='';
                        opdisplay.innerText='';
                        Arrayofx.length=0;
                    break;
                    case 'DE':
                        var str=display.innerText;
                        opdisplay.innerText='';
                        str=str.substring(0,str.length-3);
                        display.innerText=str;
                        Arrayofx.length=Arrayofx.length-1;
                    break;
            }
        }
        
    });
});
