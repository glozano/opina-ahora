new Vue({
    el: '#app',
    data: {
        gameon: false,
        subjects:['El diego','Cristina','Macri','Perritos','Gatitos','Messi','Guerrin','Malvinas','Internet',
            'Facebook','La AFA','La grieta','Astrologia','El Indio','Diputados','Trata de personas','Hippies',
            'Narcotrafico','Dieta','Boca','River','Dolar','El Gobierno','Piqueteros','Terroristas','Abrazos Gratis',
            'Educación','Eclipse','Inseguridad','Perón','Trump','Violencia','Motochorro','Del Potro','Higuain',
            'Selección','Nueva York','Tinder','Emojis','Cambiemos','Donde esta Santiago','Gendarmeria','China',
            'Game of Thrones','Chocolate','Birrita','Maestros','Venezuela','El Cura Sanador','Tarifazo',
            'Ajuste','Madres','Justicia','Coca Cola','Monsanto'],
        positives:['Sí','Hermoso','Genial','Excelente','Increible','Fantastico','Único','Amor'],
        negatives:['No','Horrible','Odio','Muerte','Lo peor','Detestable','Nefasto','Desastre'],
        subject: '',
        choiceOne: '',
        choiceTwo:'',
        gameover:false,
        subjectNumber:0
    },
    methods: {
        begin: function () {
            this.gameon = !this.gameon;
            this.getSubject();
        },
        getSubject: function () {
            $('.subject').clearQueue();
            $('.subject').stop();
            this.subject = this.subjects.splice(Math.floor(Math.random()*this.subjects.length), 1)[0];
            this['choiceOne'] = this.positives[Math.floor(Math.random()*this.positives.length)];
            this['choiceTwo'] = this.negatives[Math.floor(Math.random()*this.negatives.length)];
            if(this.subjectNumber > 5){
                var colors = ["#222222","#FFFFFF"];
                var colorOne = colors.splice(Math.floor(Math.random()*colors.length), 1)[0];
                var colorTwo = colors.splice(Math.floor(Math.random()*colors.length), 1)[0];
                $('.one').css({
                    'color':colorOne,
                    'background-color':colorTwo
                });
                $('.two').css({
                    'color':colorTwo,
                    'background-color':colorOne
                })
            }
            if(this.subjectNumber > 8){
                var options = ["positives","negatives"];
                this.choiceOne = this[options.splice(Math.floor(Math.random()*options.length), 1)[0]][Math.floor(Math.random()*this.positives.length)]
                this.choiceTwo = this[options.splice(Math.floor(Math.random()*options.length), 1)[0]][Math.floor(Math.random()*this.positives.length)]
            }
            if(!this.subjects.length){
                this.gameover=true;
            }
            this.subjectNumber++;
            $('.subject').css('background-color','#ffeb3b');
            $('.subject').animate({
                backgroundColor: "#f95759"
            }, 10000 );
        }
    }
})