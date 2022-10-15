function CrateElement(data = {name: "div",inerhtml: "",id: "",clas: "",type: "",value: "",style: ""}) {
    let element = document.createElement(data.name);
    if(data.inerhtml !== undefined) element.innerHTML = data.inerhtml;
    if(data.id !== undefined) element.id = data.id;
    if(data.clas !== undefined) element.className = data.clas;
    if(data.type !== undefined) element.type = data.type;
    if(data.value !== undefined) element.value = data.value;
    if(data.style !== undefined) element.style.cssText = data.style;
    return element;
}

function Color(data) {
    this.c_1 = data[0];
    this.c_2 = data[1];
    this.c_3 = data[2];
    this.c_4 = data[3];
}

let v1 = new Audio();
v1.src = "./sfx-voice3.mp3";
let v2 = new Audio();
v2.src = "./sfx-magic4.mp3";
let v3 = new Audio();
v3.src = "./sfx-defeat2.mp3";
let v4 = new Audio();
v4.src = "./sfx-office-eraser.mp3";




let body = document.querySelector("body");


let calculadora;

function Calculadora(data = {color: new Color(["#4ECDC4","#FFFFFF","#292F36","#FF6B6B"]),width: 100,height: 200}) {


    function Bottons(data={margin: {top: 10,left: 10},color:{c_1: "",c_2: ""},value: "",width: 10,height: 20}) {
        this.data = data;
        this.style = `animation: buttons 15s infinite cubic-bezier(0.26, -0.03, 1, 0.69);border: 0;border-radius: 4px;box-shadow: 0px 0px 2px .2px #292F36,inset 1px 2px 8px #ffffff;width: ${this.data.width}%;height: ${this.data.height}%;background-color: ${this.data.color.c_1};color: ${this.data.color.c_2};float: left;margin-top: ${this.data.margin.top}%;margin-left: ${this.data.margin.left}%; `;
        this.button = CrateElement({name: "input",type: "button",value: data.value,style: this.style,clas:"buttons"});

        this.button.addEventListener("click",(e) => {
            if(this.data.value == "C") {
                let a = calculadora.pantalla.innerHTML ;
                calculadora.pantalla.innerHTML = a.slice(0,-1);
                v4.play();
            }
            if(this.data.value !== "CE" && this.data.value !== "C") {
                if(calculadora.pantalla.innerHTML == "" && this.data.value == "+"||calculadora.pantalla.innerHTML == ""&&this.data.value == "*"||calculadora.pantalla.innerHTML == ""&&this.data.value == "-"||calculadora.pantalla.innerHTML == ""&&this.data.value == "/") {

                }else {
                    if(this.data.value == "=") {
                        let val =  calculadora.pantalla.innerHTML;
                        let igual = eval(val);
                        calculadora.pantalla.innerHTML = igual;
                        v2.play();

                        
                    }
                    if(this.data.value !== "=" && this.data.value !== "C"){
                        calculadora.pantalla.innerHTML += this.data.value;
                        v1.play();
                    }
                }
                
            }
            if(this.data.value  == "CE") {
                calculadora.pantalla.innerHTML = "";
                v3.play();
            }
           
        })
    }


    this.data = data;
    this.styles = {
        center: `margin-top: 50px`,
        cuerpo: `animation: cuerpo 15s infinite cubic-bezier(0.26, -0.03, 1, 0.69);box-shadow: 5px 5px 25px 2px ,inset 3px 5px 10px #ffffff ;border-radius: 30px;background-color: ${this.data.color.c_1};width: ${this.data.width}px;height: ${this.data.height}px`,
        fondo_arriba: `float:left;width: 100%;height: 35%`,
        fondo_abajo: `float:left;width: 100%;height: 65%`,
        fondo_arriba2: `box-shadow:0px 0px 2px .5px;border-radius: 25px;float:left;width: 90%;height: 95%;background-color: ${this.data.color.c_2}`,
        pantalla: `color: ${this.data.color.c_2};border-radius: 5px;float:left;width:80%;height:auto;font-size: 20px;padding:5px;position:flex;overflow-x: auto;min-height: 25%;max-height: 26%;background-color: ${this.data.color.c_3};    box-shadow: -0px -0px 1px 1px #000000,inset -2px -2px 2px .1px #6d6c6c,inset 2px 2px 2px .1px #6b6a6a`,
        hr1: `float:left;width: 100%;margin: 0% 0px 0px 0%;height:6px;box-shadow: inset 0px -.8px 1px #2d2d2dad`,
        hr2: `float:left;width: 100%;margin: 0% 0px 0px 0%;height:6px;box-shadow: inset 0px .8px 1px #2d2d2dad`,
        marca: ``,
    }
    this.center_tag = CrateElement({name: "center",style: this.styles.center});
    this.cuerpo = CrateElement({name: "div",style: this.styles.cuerpo,clas:"cuerpo"});
    this.fondo_arriba = CrateElement({name: "div",style: this.styles.fondo_arriba});
    this.fondo_abajo = CrateElement({name: "div",style: this.styles.fondo_abajo});
    this.fondo_arriba2 = CrateElement({name: "div",clas: "fondo_arriba2",style: this.styles.fondo_arriba2});
    this.pantalla = CrateElement({name: "div",clas: "pantalla",style: this.styles.pantalla});
    this.marca = CrateElement({name:"h3",clas:"marca",inerhtml: "H - S",style: this.styles.marca});
    this.b_reset = new Bottons({value: "CE",width: 18,height: 15,color:{c_1: this.data.color.c_1,c_2: this.data.color.c_2},margin:{top:5,left:3}});
    this.b_c = new Bottons({value: "C",width: 18,height: 15,color:{c_1: this.data.color.c_1,c_2: this.data.color.c_2},margin:{top:5,left:0}});
    this.b_c.button.style.cssText += `float: right;margin-right: 5px`;
    this.b_igual = new Bottons({value: "=",width: 21,height: 22,color:{c_1: this.data.color.c_1,c_2: this.data.color.c_2},margin:{top:3,left:3}});
    this.b_igual.button.style.cssText += `font-size: 25px`;
    this.hr1 = CrateElement({name:"div",style: this.styles.hr1});
    this.hr2 = CrateElement({name:"div",style: this.styles.hr2});
    this.b_7 = new Bottons({value: "7",width: 21,height: 12,color:{c_1: this.data.color.c_1,c_2: this.data.color.c_2},margin:{top:3,left:3}});
    this.b_8 = new Bottons({value: "8",width: 21,height: 12,color:{c_1: this.data.color.c_1,c_2: this.data.color.c_2},margin:{top:3,left:3}});
    this.b_9 = new Bottons({value: "9",width: 21,height: 12,color:{c_1: this.data.color.c_1,c_2: this.data.color.c_2},margin:{top:3,left:3}});
    this.b_4 = new Bottons({value: "4",width: 21,height: 12,color:{c_1: this.data.color.c_1,c_2: this.data.color.c_2},margin:{top:3,left:3}});
    this.b_5 = new Bottons({value: "5",width: 21,height: 12,color:{c_1: this.data.color.c_1,c_2: this.data.color.c_2},margin:{top:3,left:3}});
    this.b_6 = new Bottons({value: "6",width: 21,height: 12,color:{c_1: this.data.color.c_1,c_2: this.data.color.c_2},margin:{top:3,left:3}});
    this.b_3 = new Bottons({value: "3",width: 21,height: 12,color:{c_1: this.data.color.c_1,c_2: this.data.color.c_2},margin:{top:3,left:3}});
    this.b_2 = new Bottons({value: "2",width: 21,height: 12,color:{c_1: this.data.color.c_1,c_2: this.data.color.c_2},margin:{top:3,left:3}});
    this.b_1 = new Bottons({value: "1",width: 21,height: 12,color:{c_1: this.data.color.c_1,c_2: this.data.color.c_2},margin:{top:3,left:3}});
    this.b_0 = new Bottons({value: "0",width: 21,height: 22,color:{c_1: this.data.color.c_1,c_2: this.data.color.c_2},margin:{top:3,left:3}});
    this.b_0.button.style.borderRadius = "4px 4px 4px 25px";
    this.b_0.button.style.fontSize = "30px";
    this.b_sum = new Bottons({value: "+",width: 21,height: 12,color:{c_1: this.data.color.c_1,c_2: this.data.color.c_2},margin:{top:3,left:3}});
    this.b_rest = new Bottons({value: "-",width: 21,height: 12,color:{c_1: this.data.color.c_1,c_2: this.data.color.c_2},margin:{top:3,left:3}});
    this.b_divi = new Bottons({value: "/",width: 21,height: 12,color:{c_1: this.data.color.c_1,c_2: this.data.color.c_2},margin:{top:3,left:3}});
    this.b_mpc = new Bottons({value: "*",width: 21,height: 22,color:{c_1: this.data.color.c_1,c_2: this.data.color.c_2},margin:{top:3,left:3}});
    this.b_punto = new Bottons({value: ".",width: 21,height: 22,color:{c_1: this.data.color.c_1,c_2: this.data.color.c_2},margin:{top:3,left:3}});
    this.b_igual.button.style.borderRadius = "4px 4px 25px 4px";
    this.b_sum.button.style.fontSize = "15px";
    this.b_rest.button.style.fontSize = "15px";
    this.b_divi.button.style.fontSize = "15px";
    this.b_mpc.button.style.fontSize = "25px";
    this.b_punto.button.style.fontSize = "25px";

    

    this.Crate();
    this.medidas = {
        fondo_arriba: this.fondo_arriba.getBoundingClientRect(),
        fondo_arriba2: this.fondo_arriba2.getBoundingClientRect(),
        pantalla: this.pantalla.getBoundingClientRect(),
    }
    this.fondo_arriba2.style.cssText += `margin: 10px 10px ;width: ${this.medidas.fondo_arriba.width-20}px;height: ${this.medidas.fondo_arriba.height-10}px`;
    this.pantalla.style.cssText += `margin-top: ${((this.medidas.fondo_arriba2.height-this.medidas.pantalla.height)/2)}px;
        margin-left: ${((this.medidas.fondo_arriba2.width-this.medidas.pantalla.width)/2)}px`;
}
Calculadora.prototype.Crate = function() {
    body.appendChild(this.center_tag);
    this.center_tag.appendChild(this.cuerpo);
    this.cuerpo.appendChild(this.fondo_arriba);
    this.cuerpo.appendChild(this.fondo_abajo);
    this.fondo_arriba.appendChild(this.fondo_arriba2);
    this.fondo_arriba2.appendChild(this.pantalla);
    this.fondo_abajo.appendChild(this.b_reset.button);
    this.fondo_abajo.appendChild(this.b_c.button);
    this.fondo_abajo.appendChild(this.hr1);
    this.fondo_abajo.appendChild(this.hr2);
    this.fondo_abajo.appendChild(this.b_7.button);
    this.fondo_abajo.appendChild(this.b_8.button);
    this.fondo_abajo.appendChild(this.b_9.button);
    this.fondo_abajo.appendChild(this.b_sum.button);
    this.fondo_abajo.appendChild(this.b_4.button);
    this.fondo_abajo.appendChild(this.b_5.button);
    this.fondo_abajo.appendChild(this.b_6.button);
    this.fondo_abajo.appendChild(this.b_rest.button);
    this.fondo_abajo.appendChild(this.b_3.button);
    this.fondo_abajo.appendChild(this.b_2.button);
    this.fondo_abajo.appendChild(this.b_1.button);
    this.fondo_abajo.appendChild(this.b_divi.button);
    this.fondo_abajo.appendChild(this.b_0.button);
    this.fondo_abajo.appendChild(this.b_mpc.button);
    this.fondo_abajo.appendChild(this.b_punto.button);
    this.fondo_abajo.appendChild(this.b_igual.button);

}

calculadora = new Calculadora({color: new Color(["#4ECDC4","#FFFFFF","#292F36","#FF6B6B"]),width: 200,height: 300});
// let calculadora1 = new Calculadora({color: new Color(["#cdb4db","#bde0fe","#292F36","#FF6B6B"]),width: 200,height: 300})









