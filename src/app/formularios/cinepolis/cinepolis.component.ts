import { Component } from '@angular/core';

@Component({
  selector: 'app-cinepolis',
  standalone: false,
  templateUrl: './cinepolis.component.html',
  styleUrl: './cinepolis.component.css'
})
export class CinepolisComponent {
  boletosCant:string='';
  nombre:string='';
  tarCineco:boolean=false;
  compCant:string='';
  guarda:number=0;
  totalPagar:number=0;

calcularBoletos():void{
  if(parseInt(this.boletosCant) <= parseInt(this.compCant)*7){
  
  this.totalPagar=parseInt(this.boletosCant)*12;
  this.guarda=this.totalPagar;

  if(parseInt(this.boletosCant)>=5){
    this.totalPagar=this.totalPagar-(this.guarda*0.15);
  }else if(parseInt(this.boletosCant)>=3 ){
    this.totalPagar=this.totalPagar-(this.guarda*0.10);
  }

  if(this.tarCineco==true){
    this.totalPagar*=0.90;
}
}else{
  alert("No puede comprar esa cantidad de boletos");
}
}
}
