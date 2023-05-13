let display=document.getElementById('textdisplaydiv');
let i=0;
let x=0;
let y=0;
let arr=0;
let oparr='';
let Arrayofx=[];
let opcodearray=[];
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
                    opdisplay.innerText='+';
                     flag=1;
                     oparr=opdisplay.innerText;
                     opcodearray.push(oparr);
                    break;
                    case '-':
                         x=parseFloat(display.innerText);
                         Arrayofx.push(x);
                        display.innerText='';
                        opdisplay.innerText='-';
                         flag=2;
                         oparr=opdisplay.innerText;
                     opcodearray.push(oparr);
                    break;
                    case 'x':
                         x=parseFloat(display.innerText);
                         Arrayofx.push(x);
                        display.innerText='';
                        opdisplay.innerText='x';
                         flag=3;
                         oparr=opdisplay.innerText;
                     opcodearray.push(oparr);
                    break;
                    case '/':
                         x=parseFloat(display.innerText);
                         Arrayofx.push(x);
                        display.innerText='';
                        opdisplay.innerText='/';
                         flag=4;
                         oparr=opdisplay.innerText;
                     opcodearray.push(oparr);
                    break;
                    case '=':
                        y=parseFloat(display.innerText);
                        switch (flag) {
                            case 1:
                                for (let j = 0; j < Arrayofx.length; j++) {
                                  arr=arr+Arrayofx[j];
                                }
                                res=arr+y;
                                Arrayofx.length=0;
                                arr=0;
                                var result= res.toString();
                                display.innerText=result;
                                break;
                                case 2:
                                    var min=0;
                                    for (let j = 1; j < Arrayofx.length; j++) {
                                        arr=arr+Arrayofx[j];
                                      }
                                      min=Arrayofx[0]-arr;
                                      console.log(min);
                                      res=min-y;
                                      var result= res.toString();
                                      display.innerText=result;
                                      Arrayofx.length=0;
                                      arr=0;
                                break;
                                case 3:
                                    arr=1;
                                    for (let j = 0; j < Arrayofx.length; j++) {
                                        arr=arr*Arrayofx[j];
                                      }
                                      res=arr*y;
                                      var result= res.toString();
                                      display.innerText=result;
                                      Arrayofx.length=0;
                                      arr=0;
                                break;
                                case 4:
                                    arr=Arrayofx[0];
                                    for (let j = 1; j < Arrayofx.length; j++) {
                                        arr=arr/Arrayofx[j];
                                      }
                                      res=arr/y;
                                      var result= res.toString();
                                      display.innerText=result;
                                      Arrayofx.length=0;
                                      arr=0;
                                break;
                        
                            default:
                                break;
                        }
                         
                    break;
                    case 'AC':
                        display.innerText='';
                        opdisplay.innerText='';
                    break;
                    case 'DE':
                         
                    break;

                default:
                    break;
            }
        }
        
    });
});
