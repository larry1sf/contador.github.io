let contenedor_text=document.getElementById('mi_txt')
let contenedor_text_2=document.getElementById('mi_txt_2')
let contenedor_text_3=document.getElementById('mi_txt_3')

class cohetes  {
    constructor(material,velocidad,calides){
        this.m = material;
        this.v = velocidad;
        this.c = calides;
        this.llamar = `se me habia olvidado wachinn, ${this.m} ${this.v} ${this.c} na pero para eso estamoss <br>`;
    }

informe (){
    const parrafo = document.createElement('i');
    parrafo.innerHTML=this.llamar;
    contenedor_text.appendChild(parrafo);
    }
}




class propulsor extends cohetes {
    constructor(material,velocidad,calides,grosor){
    super(material,velocidad,calides);
    this.grosor = grosor
    this.llamar_p = `se me habia olvidado wachinn, ${this.m} ${this.v} ${this.c} ${this.grosor} na pero para eso estamoss <br>`
}
informe=()=>{
    const parrafo = document.createElement('i');
    parrafo.innerHTML=this.llamar_p;
    contenedor_text_2.appendChild(parrafo);
}
inform=()=> {
    const parrafo = document.createElement('i');
    parrafo.innerHTML=this.llamar_p;
    contenedor_text_3.appendChild(parrafo);
}

}

let h = new propulsor("lata","100k/h",7,20);
let h1 = new cohetes("plata","200k/h",17);

h.informe()
h1.informe()
