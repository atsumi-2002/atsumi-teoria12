function probar(){
    alert("comprobar la union");
}
function categorizar(){
    let categoria=""
    let prom= parseInt(document.getElementById("promedio").value);
    if (prom >= 17){
        categoria="A";
    }else if (prom >= 14 && prom < 17){
        categoria="B";
    }else if (prom >= 12 && prom < 14){
        categoria="C";
    }else{
        categoria="D";
    }
    document.curso.cat.value=categoria;
}
function limpiar01(){
    document.getElementById("nombre").value="";
    document.getElementById("promedio").value="";
    document.getElementById("cat").value="";
}
function calcular01(){
    let hijos= parseInt(document.getElementById("hijos").value);
    let sueldo= 0;
    let bonoh= 0;
    let bonoc= 0;
    let exceso= 0;
    let bonot= 0;
    if (document.bonos.categ[0].checked == true){
        sueldo= 2350;
    } else if (document.bonos.categ[1].checked == true){
        sueldo= 2000;
    } else if (document.bonos.categ[2].checked == true){
        sueldo= 1850;
    } else if (document.bonos.categ[3].checked == true){
        sueldo= 1500;
    } else {
        sueldo= 0;
    }

    if (hijos <=3){
        bonoh= hijos*25;
    } else {
        exceso= hijos-3;
        bonoh= (exceso*10)+75;
    }

    if (document.bonos.condi[0].checked == true){
        bonoc= sueldo*0.1;
    } else if (document.bonos.condi[1].checked == true){
        bonoc= sueldo*0.15;
    } else{
        bonoc= 0;
    }
    bonot=bonoc+bonoh;

    document.bonos.bonoH.value="S/."+ bonoh;
    document.bonos.bonoC.value="S/."+ bonoc;
    document.bonos.bonoT.value="S/."+ bonot;
}
function limpiar01(){
    document.getElementById("hijos").value="";
    document.getElementById("bonoH").value="";
    document.getElementById("bonoC").value="";
    document.getElementById("bonoT").value="";
}
function calcular02(){
    let mes= parseFloat(document.getElementById("mes").value);
    let hijos= parseInt(document.getElementById("hijos").value);
    let sueldoB= 0;
    let desc= 0;
    let sueldoN= 0;
    let bono= 0;
    let com= 0;
    com= hijos*50;
    bono= mes*0.075;
    sueldoB= 600+com+bono;
    desc= sueldoB*0.11;
    sueldoN= sueldoB-desc

    document.pagas.com.value="S/."+com;
    document.pagas.bono.value="S/."+Math.round(bono*100)/100;
    document.pagas.sueldoB.value="S/."+Math.round(sueldoB*100)/100;
    document.pagas.desc.value="S/."+Math.round(desc*100)/100;
    document.pagas.sueldoN.value="S/."+Math.round(sueldoN*100)/100;
}
function limpiar03(){
    document.getElementById("mes").value="";
    document.getElementById("hijos").value="";
    document.getElementById("com").value="";
    document.getElementById("bono").value="";
    document.getElementById("sueldoB").value="";
    document.getElementById("desc").value="";
    document.getElementById("sueldoN").value="";
}