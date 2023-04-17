(function(){
    console.log("Début du calousel");
    let carrousel__ouvrir = document.querySelector('.carrousel__ouvrir');
    let carrousel = document.querySelector('.carrousel');
    let carrousel__x = document.querySelector('.carrousel__x');
    let carrousel__figure = document.querySelector('.carrousel__figure');
    let carrousel__form = document.querySelector('.carrousel__form');
    console.log(carrousel__form.tagName) //Conteneur de radio-boutons

    let galerie = document.querySelector('.galerie');
    let galerie__img = galerie.querySelectorAll('img');

    carrousel__ouvrir.addEventListener('mousedown', function(){
        carrousel.classList.add('carrousel--activer')
        ajouter_les_images_de_galerie()
    })

    carrousel__x.addEventListener('mousedown', function(){
        carrousel.classList.remove('carrousel--activer')
    })

    let position = 0;

    /**
     * Pour chaque image de la galerie , ajoute  le dans le carrousel
     */

    function ajouter_les_images_de_galerie()
    {

        for(const elem of galerie__img){
            //console.log(elem.getAttribute('src'))
          ajout_une_image_dans_carrousel(elem);
          ajouter_des_radioBoutons_dans_le_carrousel()
            
        }
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
        position = position + 1;
        carrousel__form.appendChild(rad)
    }


})()