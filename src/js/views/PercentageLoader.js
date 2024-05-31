import { gsap } from 'gsap';

export default class PercentageLoader {
	constructor(options = {}) {
		// options
		this.options = {
            promises:[],
           
            models:0
		};
        this.options = Object.assign(this.options, options);

        this.completedPromises=0
        this.percentage=0
        this.totalPercentage=0
        this.oldPercentage = 0
        this.percentageModels = []
        this.percentageModel = 0
        this.totalPromises=0
        this.animation = gsap.timeline({
            paused:true
        })
        this.globalTimeline = gsap.timeline({
            
        })
        this.initCounter();
      
		// init
		
	}
    setPromise(promises){
        this.options.promises = promises
    }
    init(){
        return new Promise((resolve)=>{
            this.totalPromises = this.options.promises.length + this.options.models 
            
            this.options.promises.forEach((promise) => {
                promise.then((value) => {
                // Mettez à jour le nombre de promesses accomplies
                this.completedPromises++;
            
                // Mettez à jour la progression
                this.updateProgress().then(()=>{

                    resolve(true)
                })
                
                // Vous pouvez également utiliser la valeur résolue de la promesse ici si nécessaire
                // const result = value;
                }).catch((error) => {
                // Gérez les erreurs ici
                console.error('Une erreur s\'est produite :', error);
                });
            });
        })
    }
    updateProgress() {
        return new Promise((resolve)=>{
            // Calculez le pourcentage de chargement
            this.percentage = (this.completedPromises / this.totalPromises) * 100;
            // Utilisez le pourcentage comme vous le souhaitez, par exemple, affichez-le dans la console
            this.totalPercentage = this.percentage

            // Vous pouvez également mettre à jour une barre de progression ou un élément HTML ici
            // Si toutes les promesses sont résolues, continuez avec le reste de votre code
            if (this.completedPromises  === this.totalPromises) {
                resolve(true);
            }

        });
    }
    modelsProgress(index,plus){
        console.log(`Model ${index + 1} load:`, plus);

        this.percentageModels[index] = plus
        if (this.percentageModels[index] == 100){
            this.completedPromises ++
        }
        this.getProgress()
    }
    getProgress(){
        this.totalPercentage = 0
        let progress = 0
        this.percentageModels.forEach((percentage)=>{
            progress += (percentage / this.options.models)
        })
        this.totalPercentage = this.percentage + ( progress / (this.totalPromises / this.options.models) )
    }
    initCounter(){
        let target =  document.querySelector('.animation-gradient')
        if(target){
            gsap.set(target,{autoAlpha:1});
           let fade = gsap.timeline();
     
           fade.to(target,3,
             {
                 backgroundSize: '300%,100%',
                 backgroundPosition: '-33.33%,50%',
                 ease:'power1.inOut',
                 repeat:-1
             });
     
         }
        this.counter3 = document.querySelector('.counter-3')
        this.counter2 = document.querySelector('.counter-2')
        this.counter1 = document.querySelector('.counter-1')
         gsap.to('.percentage .percentage__glyph',{
            yPercent:-100,
            ease:'power2.inOut',
            duration:.3
         })
        //counter3.appendChild(finalDiv)
        //this.animate(counter3,10,0,9)
        //this.animate(,10,0,0)
        //this.animate(document.querySelector('.counter-1'),1,9)
        //this.goToAnimation((this.totalPercentage / 100).toFixed(2))

        this.interval=window.setInterval(()=>{
            if (this.totalPercentage.toFixed(0) != this.oldPercentage ){
                this.goToAnimation(this.totalPercentage.toFixed(0))
                this.oldPercentage = this.totalPercentage
            }

            if (this.totalPercentage.toFixed(0) == 100 ){
                clearInterval(this.interval);
                this.completedPromises++;
            }
            
        },1200)




    }
    animate(counter,duration,delay=0,repeat=0){
        const numHeight = counter.querySelector('.num').clientHeight;
        const totalDistance = (counter.querySelectorAll('.num').length - 1 ) * numHeight;
        this.animation.to(counter,{
            y:-totalDistance,
            duration:duration,
            ease:'none',
            delay:delay,
            repeat:repeat 
        },'globalTimeline')
    }
    goToAnimation(percentage){
        var realDigits = percentage.toString().split('');
      
        console.log(realDigits)
        
        //div.textContent = realDigits ;  
        if (realDigits.length >= 1){
            let currentNumber = this.counter3.querySelector('div')
            if (currentNumber.innerHTML != parseInt(realDigits[realDigits.length - 1])){
                let div = document.createElement('div')
                div.className = 'num'
                div.textContent = realDigits[realDigits.length - 1]
                this.counter3.appendChild(div);
                gsap.to(this.counter3,{
                    duration:.6,
                    yPercent:-100,
                    z:0.1,

                    onComplete:()=>{

                        let divToRemove = this.counter3.querySelectorAll('div');
                        console.log('DEBUGG REMOVE DIV',divToRemove)

                        divToRemove[0].remove()
                        gsap.set(this.counter3,{
                            yPercent:0,
                            ease:'power2.out'
                        })
                    }
                })
            }
           
        }
        if (realDigits.length >= 2){
            let currentNumber = this.counter2.querySelector('div')

            if (currentNumber.innerHTML != parseInt(realDigits[realDigits.length - 2])){

                let div = document.createElement('div')
                div.className = 'num'
                div.textContent = realDigits[realDigits.length - 2]
                this.counter2.appendChild(div)
              
    
                gsap.to(this.counter2,{
                    duration:.6,
                    delay:.15,
                    z:0.1,
                    yPercent:-100,
                    ease:'power2.out',
                    onComplete:()=>{
                        let divToRemove= this.counter2.querySelectorAll('div');
                        divToRemove[0].remove()
                        gsap.set(this.counter2,{
                            yPercent:0
                        })
                    }
                })
            }
 
          

        }
        if (realDigits.length >= 3){
            let div = document.createElement('div')
            div.className = 'num'
            div.textContent = realDigits[0]

            gsap.to(this.counter1,{
                duration:.6,
                delay:.30,
                z:0.1,
                yPercent:-100,
                ease:'power2.out',
                onComplete:()=>{
                    let divToRemove= this.counter1.querySelectorAll('div');
                    divToRemove[0].remove()
                    gsap.set(this.counter1,{
                        yPercent:0
                    })
                }

            })
           

        }
        //this.globalTimeline.add(gsap.to(this.animation,{progress:percentage,duration:.5,ease:'none'})) // tween from to target progress

    }

}
