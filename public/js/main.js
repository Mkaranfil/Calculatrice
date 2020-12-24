
// <--------------------------------> Creation du HTML <-------------------------------->


let contenaire = document.querySelector(`.contenaire`)
contenaire.style.height = `auto`
contenaire.style.width = `auto`
contenaire.style.display = `flex`
contenaire.style.alignItems = `center`
contenaire.style.justifyContent = `center`
contenaire.style.flexDirection =`column`




///////////////////// <--->creation des div:<--->



///////////////////// <--->creation du screen:<--->
let output = document.createElement(`div`)
output.setAttribute(`class`,`output`)
contenaire.prepend(output)

output.style.display = `flex`
output.style.flexDirection = `column`
output.style.alignItems = `center`
output.style.justifyContent = `center`
output.style.width = `100vh`
// output.style.backgroundColor = `green`



for (let i = 0; i < 2; i++) {
    
let screen = document.createElement(`div`)
screen.setAttribute(`class`,`screen`)
output.append(screen)

// screen.style.border = `2px solid black`
screen.style.backgroundColor = `rgba(0, 0, 0, 0.75)`
screen.style.height = `10vh`
screen.style.width = `62vh`
screen.style.display=`flex`
screen.style.alignItems = `center`
screen.style.fontSize= `35px`
screen.style.marginLeft=`2vh`
screen.style.color = `#fff`



}
let tabScreen = document.querySelectorAll(`.screen`)
// tabScreen[0].innerHTML = `12-4=`


// <<<<<<<<<<<<<<<<<<<<<la div ne s'adapte pas a l'ecriture >>>>>>>>>>>>>>
// tabScreen[1].innerHTML = `88888888888`
tabScreen[1].style.justifyContent = `flex-end`

///////////////////// <--->creation des Inputs:<--->


let input = document.createElement(`div`);
input.setAttribute(`class`,`input`);
contenaire.append(input)

input.style.display = `flex`
// input.style.border = `2px solid #000`
input.style.height = `auto`
input.style.width = `60vh`
// input.style.backgroundColor = `red`


///////////////////// <--->creation de la div et bouttons CHIFFRES:<--->

let divChiffres = document.createElement(`div`)
divChiffres.setAttribute(`class`,`divChiffres`)
input.prepend(divChiffres);

// divChiffres.style.border = `2px solid #000`
divChiffres.style.height = `auto`
divChiffres.style.width = `auto`
// divChiffres.style.backgroundColor = `blue`


for (let i = 0; i < 12; i++) {
    
    let buttonChiffres = document.createElement(`button`);
    divChiffres.append(buttonChiffres)
    buttonChiffres.setAttribute(`class`,`buttonChiffres`)
    buttonChiffres.innerHTML = [i];
    buttonChiffres.value= [i]

    // style
    buttonChiffres.style.height =`10vh`
    buttonChiffres.style.width =`14vh`
    buttonChiffres.style.display=`inline-block`
    buttonChiffres.style.fontSize =`30px`
    buttonChiffres.style.border =`1px solid #fff`
    buttonChiffres.style.background = ` rgba(234, 243, 243, 0.60)`

    
    
}

let tabButtonChiffres = document.querySelectorAll(`.buttonChiffres`);


///////////////////// cibler le 10 et le donner la valuer du point.
tabButtonChiffres[10].innerHTML = `.`;
tabButtonChiffres[10].value = `.`;
tabButtonChiffres[10].style.width=`28vh`

///////////////////// cibler le 11 et le donner la valuer de l egale = : 
tabButtonChiffres[11].innerHTML = `=`;
tabButtonChiffres[11].value = `=`;
tabButtonChiffres[11].style.width=`42vh`
tabButtonChiffres[11].style.height=`20vh`



///////////////////// <--->creation de la div et bouttons des OPERATEURS:<--->

let divOperateurs = document.createElement(`div`)
divOperateurs.setAttribute(`class`,`divOperateurs`)
input.append(divOperateurs);

// divOperateurs.style.border = `2px solid #000`
divOperateurs.style.height = `auto`
divOperateurs.style.width = `auto`
// divOperateurs.style.backgroundColor = `green`



for (let i = 0; i < 6; i++) {
    
    let buttonOperateurs = document.createElement(`button`);
    divOperateurs.append(buttonOperateurs)
    buttonOperateurs.setAttribute(`class`,`buttonOperateurs`)
    
   

    // style
    buttonOperateurs.style.height =`10vh`
    buttonOperateurs.style.width =`20vh`
    buttonOperateurs.style.display=`flex`
    buttonOperateurs.style.alignItems=`center`
    buttonOperateurs.style.justifyContent=`center`

    buttonOperateurs.style.border =`1px solid #fff`
    buttonOperateurs.style.background = `rgba(234, 243, 243, 0.60)`
    buttonOperateurs.style.fontSize =`30px`
    
        
    switch (i) {
        
            
        case 0:
        
            buttonOperateurs.innerHTML = `AC`;
           
            
                
        break;
        case 1:
        
            buttonOperateurs.innerHTML = `+`;
            buttonOperateurs.value = `+`;
                
        break;
        case 2:
        
            buttonOperateurs.innerHTML = `-`;
            buttonOperateurs.value = `-`;
                
        break;
        case 3:
        
            buttonOperateurs.innerHTML = `x`;
            buttonOperateurs.value = `*`;
                
        break;
        case 4:
        
            buttonOperateurs.innerHTML = `/`;
            buttonOperateurs.value = `/`;
                
        break;
        case 5:
        
            buttonOperateurs.innerHTML = `DEL`;
            
                
        break;


        
        default:
        break;
        
    }
        

}


let tabButtonOperateurs = document.querySelectorAll(`.buttonOperateurs`)







// <--------------------------------> programmer les touches <-------------------------------->

 let valeur1;
 let valeur2;
 let stock = [];
 
 
// touches chiffres: 



for (let i = 0; i < 11; i++) {



    tabButtonChiffres[i].addEventListener(`click` , function() {

        tabScreen[1].innerHTML += this.innerHTML
        tabScreen[1].value += this.value
        tabScreen[1].value = tabButtonChiffres[i].value
    
        valeur1 = Number(tabScreen[1].innerHTML);
            
        console.log(valeur1);

    })
    
        

    
}




// touches Operateurs: 

for (let i = 0; i < 6; i++) {
    

    

    tabButtonOperateurs[i].addEventListener(`click` , function() {
           
    // touche del: 

       if(tabButtonOperateurs[i].innerHTML == `DEL`){

           
        if (tabScreen[1].innerHTML == ""){
               
            tabScreen[0].innerHTML = ""
            stock.pop();
            stock.pop();
               
        }else{
                
            tabScreen[1].innerHTML = ""; 
                
        }


       }else{

           tabScreen[0].append(valeur1)
           stock.push(valeur1)
                      
           tabScreen[1].innerHTML = "";
           tabScreen[0].innerHTML += this.innerHTML
           tabScreen[0].value += this.value
              
           stock.push(this.value)
                     
           console.log(stock);

       }
       
       
       
           
    
    })

    
      
    
}


// touche egale :

let egale = tabButtonChiffres[11]

    egale.addEventListener(`click`, function(){

        valeur2 = tabScreen[1].innerHTML
        stock.push(Number(valeur2))
        console.log(valeur2)
        console.log(stock);
        
        tabScreen[0].append(valeur2)
        tabScreen[0].append(`=`)
        tabScreen[1].innerHTML = "";

        switch (stock[1]) {
            case `+`:

                tabScreen[1].innerHTML = `${stock[0] + stock[2]}`
                
            break;
            case `-`:

                tabScreen[1].innerHTML = `${stock[0] - stock[2]}`
                
            break;
            case `*`:

                tabScreen[1].innerHTML = `${stock[0] * stock[2]}`
                
            break;
            case `/`:

                tabScreen[1].innerHTML = `${stock[0] / stock[2]}`
                
            break;

        
            default:
                break;
        }

        
        
    })


// touche Allclear:
tabButtonOperateurs[0].addEventListener(`click`,function(){

    tabScreen[0].innerHTML = ""
    tabScreen[1].innerHTML = ""
    valeur1 = ""
    valeur2 = ""
    stock = [];


})



