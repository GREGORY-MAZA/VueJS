const Compteur = {
    data() {
        return {
            compteur : 0
        }
    }
}
Vue.createApp(Compteur).mount('#counter')

const Headshot = {
    data() {
        return {
            headshot : "100 damage"
        }
    }
}
Vue.createApp(Headshot).mount('#headshot')

const Bernadette = {
    data() {
        return {
            htmlVUEjs : "CLAP CLAP"
        }
    }
}
Vue.createApp(Bernadette).mount('.hello')

const myConstVueJS = {
    data() {
        return{
            myReturnVueJS : "Je suis le retour"
        }
    }
}
Vue.createApp(myConstVueJS).mount('#myDIVhtml')

const TwoWayBinding = {
    data() {
        return {
            message: 'Hello Vue!'
        }
    }
}

Vue.createApp(TwoWayBinding).mount('#two-way-binding')

const h1TwoWayBinding = {
    data() {
        return {
            h1message: 'h1 Hello Vue!'
        }
    }
}

Vue.createApp(h1TwoWayBinding).mount('#H1-two-way-binding')

const h2ChangeClick = {
    data() {
        return {
            h2message: 'Jour'
        }
    },
    methods: {
        changeMessage(){
            this.h2message = this.h2message
            if (this.h2message == 'Jour'){
                this.h2message = 'Nuit'
            }else{
            this.h2message = 'Jour'}
        }


    }
}
Vue.createApp(h2ChangeClick).mount('#H2-click-to-change')






