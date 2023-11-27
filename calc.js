let display = document.getElementById('display');
    let buttons = Array.from(document.getElementsByClassName('btn')); 
    const button = document.getElementsByClassName('btns');
    buttons.map(button =>{
        button.addEventListener('click' , (e) =>{
            switch(e.target.innerText){
                case 'C':
                    display.innerText='';
                    break;
                case '←':
                    display.innerText = display.innerText.slice(0,-1);
                    break;
                case'=':
                    try{
                        display.innerText = eval(display.innerText)
                    }catch{
                        display.innerText="ERROR!"
                    }
                    break;
                default:
                    display.style.fontSize="40px";
                    display.innerText += e.target.innerText;
            }
    });
}); 
