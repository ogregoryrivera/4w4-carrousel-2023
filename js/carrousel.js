(function(){
    console.log("Début du calousel");
    let carrousel__ouvrir = document.querySelector('.carrousel__ouvrir');
    let carrousel = document.querySelector('.carrousel');
    let carrousel__x = document.querySelector('.carrousel__x');
    let carrousel__figure = document.querySelector('.carrousel__figure');
    let carrousel__form = document.querySelector('.carrousel__form');
    let carrousel__suivant = document.querySelector('.carrousel__suivant');
    let carrousel__precedent = document.querySelector('.carrousel__precedent');
    console.log(carrousel__form.tagName) //Conteneur de radio-boutons

    let galerie = document.querySelector('.galerie');
    let galerie__img = galerie.querySelectorAll('img');
    console.log('galerie__img.length : ' + galerie__img.length)
    carrousel__ouvrir.addEventListener('mousedown', function(){
        carrousel.classList.add('carrousel--activer');
        affiche_image_carrousel()
    })

    carrousel__x.addEventListener('mousedown', function(){
        carrousel.classList.remove('carrousel--activer')
    })

    
    


    let position = 0;
    let index = 0;
    let ancienIndex = -1;

    /**
     * Pour chaque image de la galerie , ajoute  le dans le carrousel
     */



        for(const elem of galerie__img){
            //console.log(elem.getAttribute('src'))
            elem.dataset.index = position
          ajout_une_image_dans_carrousel(elem);
          ajouter_des_radioBoutons_dans_le_carrousel()

          
          elem.addEventListener('mousedown', function(){
            //console.log(this.dataset.index);
            index = this.dataset.index;
            affiche_image_carrousel();

            
          })

            
        }

        
   

    /**
     * Création dynamique pour chaque image de la galerie, ajoute 
     * @param {*} elem 
     */

    function ajout_une_image_dans_carrousel(elem){
        let img = document.createElement('img');
            img.classList.add('carrousel__img')
            img.src = elem.getAttribute('src');
            //console.log(img.src);
            carrousel__figure.appendChild(img);

    }

    

    function ajouter_des_radioBoutons_dans_le_carrousel(){

        

        let rad = document.createElement('input');
        rad.setAttribute('type', 'radio');
        rad.setAttribute('name', 'carrousel__rad');
        rad.classList.add('carrousel__rad');
        rad.dataset.index = position;
        rad.addEventListener('mousedown', function(){
            index = this.dataset.index
            //console.log(this.dataset.index) 
            affiche_image_carrousel();
            
            
        })
        position = position + 1; //Incrémentation de la position
        carrousel__form.append(rad)

        console.log(position);
        
        rad.addEventListener('mousedown',function(){
            index=this.dataset.index;
            affiche_image_carrousel(index);
        })
    }
    


    /**
     * Affiche la nouvelle image du carrousel
     */

    function affiche_image_carrousel(){
        if(ancienIndex != -1){
            //carrousel__figure.children[ancienIndex].style.opacity = "0";
            //carrousel__form.children[ancienIndex].checked = false;
            carrousel__figure.children[ancienIndex].classList.remove('carrousel__img--activer');
            carrousel__form.children[ancienIndex].checked = false
        }
        //carrousel__figure.children[index].style.opacity = "1";
        carrousel__form.children[index].checked = true;
        carrousel__figure.children[index].classList.add('carrousel__img--activer');
        ancienIndex = index;

        
    }
    
    carrousel__suivant.addEventListener('mousedown', function(){
        
        index = index + 1;
        console.log(index + " - " + galerie__img.length)
        if(galerie__img.length == index){
            index = 0;
        }
        
        affiche_image_carrousel();
    })
    carrousel__precedent.addEventListener('mousedown', function(){
        
        index = index - 1;

        if(-1 == index){
            index = galerie__img.length -1 ;
        }
        
        affiche_image_carrousel();
    })
})()