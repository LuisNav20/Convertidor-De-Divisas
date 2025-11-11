class Convertidor{
    constructor(c,d){
        this.cantidad=c;
        this.divisa=d;
    }

    convertir(){
        let tasa=0;

        if (this.divisa=="USD") {
            tasa=0.054
        } else if (this.divisa=="EUR") {
            tasa=0.047;
        }else if (this.divisa=="JPY") {
            tasa=8.39;
        }else if (this.divisa=="LB") {  
            tasa=0.041;  
        }

        const resultado=this.cantidad*tasa;
        return resultado.toFixed(2);
        
}
generarMensaje(){
    const resultado=this.convertir();
    return `Cantidad original: $${this.cantidad} MXN <br>
    Convertido a: ${this.divisa} <br>
    Total convertido: <strong> ${resultado} ${this.divisa}</strong> <br>`;
}
}

document.getElementById('formu').addEventListener('submit',function(e){
    e.preventDefault();

    const cantidad=parseFloat(document.getElementById('cantidad').value);
    const divisa=document.getElementById('divisa').value;

    const objConvertidor=new Convertidor(cantidad,divisa);
    document.getElementById('resultado').innerHTML=objConvertidor.generarMensaje();
});
    