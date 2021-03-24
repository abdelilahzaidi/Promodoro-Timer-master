const principal=document.createElement('main')
principal.className='Principale'
const body=document.querySelector('body')
body.appendChild(principal)

//create a button groupe
const btnGroupe=document.createElement('div')
btnGroupe.className='BtnGroupes'
principal.appendChild(btnGroupe)


//create a button start and stop

const buttonStart=document.createElement('button')
btnGroupe.appendChild(buttonStart)
buttonStart.innerHTML='Start Timer'

//create a button start and stop

const buttonClear=document.createElement('button')
btnGroupe.appendChild(buttonClear)
buttonClear.innerHTML='Reset'


/**Create a Timmer's Class */

const timer=document.createElement('div')
timer.className='Timer'
principal.appendChild(timer)
/**Create a Text Content */
const titre=document.createElement('div')
titre.className='Titre'
principal.appendChild(titre)
const titreTask=document.createElement('p')
titreTask.className='TitreTask'
titreTask.innerText='Task in progress'
titre.appendChild(titreTask)





/**Footer */
const footer=document.createElement('footer')
body.appendChild(footer)
const titreFooter=document.createElement('p')
titreFooter.className='TitreFooter'
titreFooter.innerText='Realised By ZSiffre'
footer.appendChild(titreFooter)



timer.innerHTML='25:00:00'

let x=25*60
let start=false
const countdown = (event)=>{
    if(event != undefined)
    {
        if(start == true)
            {
                start=false
                buttonStart.innerHTML="restart"
            }
        else{
            start=true
            buttonStart.innerHTML="stop"
        }
    }
    if(start == true)
    {
        let minute =0
        let seconde =0
        minute=Math.floor(x/60)
        seconde=x%60
        if(x >0.01)
        {
            timer.innerHTML=minute+':'+seconde.toFixed(1)
            x -=0.1
           
            setTimeout(countdown,100)
        }
        else
        {
           
            x=0
            timer.innerHTML=x+':'+'00'
            buttonStart.innerHTML="The task is done"            
        }
     
    
        
    }
    else
    {
        timer.innerHTML=minute+':'+seconde.toFixed(1)
        
    }
    

}

const clearTimer =(event) =>
{
    if(event != undefined)
    {
        let  x=25
        if(start == false)
            {
               
                timer.innerHTML=x+':'+'00'+':'+'00'
                
            }
       
        
    }
    else
    {
        buttonStart.innerHTML="Start"
        countdown()
    }

}



buttonStart.addEventListener('click',countdown)
buttonClear.addEventListener('click',clearTimer)
