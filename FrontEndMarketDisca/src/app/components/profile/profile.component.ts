import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit,AfterViewInit {
  displayedColumns: string[] = ['idSubasta','bananaType', 'measurementUnits', 'pricePurchase', 'dateStarted','dateEnded'];
  dataSource =<any> [];
  constructor(  private router:Router) {

  }

  showVent: boolean = false;
  showComp: boolean = false;
  showProfi: boolean = false;
  showPrinci: boolean = true;
  showPhotoProfile:boolean = true;

  ngOnInit(): void {

  }
  ngAfterViewInit() {
  }
  showCompras() {
    this.showVent = false;
    this.showPhotoProfile = true;
    this.showComp = true;
    this.showPrinci = false;
    this.showProfi = false;
  }

  showVentas() {
    this.showPhotoProfile = true;
    this.showVent = true;
    this.showComp = false;
    this.showPrinci = false;
    this.showProfi = false;

  }
  showProfile(){
    this.showPhotoProfile = false;
    this.showVent = false;
    this.showComp = false;
    this.showPrinci = false;
    this.showProfi = true;
  }
  eliminarSubasta(idSub:number){
    this.router.navigate(['start']);
    
  }
  eliminarInscripcion(idSuba:number){

  }
  showPrincipal() {
    this.showVent = false;
    this.showComp = false;
    this.showPrinci = true;
  }

  
}
