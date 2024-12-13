window.addEventListener('load', initScene)

const meteors = [
    { x: 0, y: 0, z: -30 },
    { x: 0, y: 0, z: 30 },
    { x: 30, y: 0, z: 0 },
    { x: -30, y: 0, z: 0 },
    { x: 20, y: 0, z: 20 },
    { x: 30, y: 0, z: 0 },
    { x: -30, y: 0, z: 0 },
    { x: 20, y: 0, z: 20 },
]

let meteor, score = 0, algo

function initScene() {

    let zombies = document.querySelectorAll('.modelzombie')
        zombies.forEach(zombie => {
            zombie.setAttribute('shootable', '')
    })
}

AFRAME.registerComponent('shootable', {
    init: function() {
        this.el.addEventListener('click', () => {
            this.el.parentNode.removeChild(this.el)
            document.querySelector('[text]').setAttribute('value', `${++score} Zombies fulminados`)
            if (score==6) {
                document.querySelector('#winScreen').setAttribute('visible', 'true')
                document.querySelector('#espada').setAttribute('visible', 'false')
                document.querySelector('#puntuacion').setAttribute('visible', 'false')
            }
            if(score==6){
            setTimeout(function() {
                reiniciarPartida()
            }, 5000); }
        })
    }
})
   

function reiniciarPartida(){
    location.reload();
}     

