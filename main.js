const encriptar=document.getElementById("btn-encriptar");
const desencriptar=document.getElementById("btn-desencriptar");

const mensaje_resultado = document.getElementsByClassName("mensaje");
const resultado = document.getElementsByClassName("resultado");
const btn_copiar = document.getElementById("btn-copiar");
const texto_encriptado=document.getElementsByClassName("resultado");
const patron = /^[a-z0-9]+$/;

encriptar.addEventListener("click", (e) => {
    e.preventDefault();
    let texto=document.getElementsByTagName("textarea");
    let texto_base=texto[0].value;
    if(texto_base === ""){
        alert("Ingrese un texto por favor.")
    }else{
        if (patron.test(texto_base)==true){
            texto_base=texto_base.replaceAll("e","enter");
            texto_base=texto_base.replaceAll("i","imes");
            texto_base=texto_base.replaceAll("a","ai")
            texto_base=texto_base.replaceAll("o","ober")
            texto_base=texto_base.replaceAll("u","ufat")
            texto_encriptado[0].innerHTML="";
            texto_encriptado[0].innerHTML=texto_base;
            mensaje_resultado[0].style.display = "none";
            resultado[0].style.display = "block";
            btn_copiar.style.display = "block";
        }else{
            alert("El texto ingresado contiene mayusculas, tildes o caracteres especiales.");
        }
        
    }
    
});


desencriptar.addEventListener("click", (e) => {
    e.preventDefault();
    let texto=document.getElementsByTagName("textarea")
    let texto_base=texto[0].value;
    if(texto_base === ""){
        alert("Ingrese un texto por favor.")
    }else{
        if (patron.test(texto_base)==true){
            texto_base=texto_base.replaceAll("enter","e");
            texto_base=texto_base.replaceAll("imes","i");
            texto_base=texto_base.replaceAll("ai","a");
            texto_base=texto_base.replaceAll("ober","o");
            texto_base=texto_base.replaceAll("ufat","u");
            texto_encriptado[0].innerHTML="";
            texto_encriptado[0].innerHTML=texto_base;
            mensaje_resultado[0].style.display = "none";
            resultado[0].style.display = "block";
            btn_copiar.style.display = "block";
        }else{
            alert("El texto ingresado contiene mayusculas, tildes o caracteres especiales.");
        }
    }
});

btn_copiar.addEventListener("click", (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(texto_encriptado[0].textContent);
});
