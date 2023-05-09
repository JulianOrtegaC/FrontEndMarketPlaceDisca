import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.component.html',
  styleUrls: ['./add-service.component.css']
})
export class AddServiceComponent  implements OnInit{
  ngOnInit(): void {
    this.monthYear = this.selectedDate.toLocaleString('es-ES', { month: 'long', year: 'numeric' });
    const firstDay = new Date(this.selectedDate.getFullYear(), this.selectedDate.getMonth(), 1);
    const lastDay = new Date(this.selectedDate.getFullYear(), this.selectedDate.getMonth() + 1, 0);
    this.dates = [];
    for (let d = firstDay; d <= lastDay; d.setDate(d.getDate() + 1)) {
      this.dates.push(new Date(d));
    }  }
  imagenes: string[] = [];
// 

selectedDate: Date = new Date();
occupiedDates: Date[] = [new Date(2023, 4, 10), new Date(2023, 4, 15)];
monthYear!: string;
days: string[] = ['D', 'L', 'M', 'M', 'J', 'V', 'S'];
dates: Date[] = [];

// Métodos
isOccupied(date: Date): boolean {
  return this.occupiedDates.some(d => d.getTime() === date.getTime());
}

isSelected(date: Date): boolean {
  return this.selectedDate.getTime() === date.getTime();
}

selectDate(date: Date): void {
  this.selectedDate = date;
}
openCalendar(){
  this.monthYear = this.selectedDate.toLocaleString('es-ES', { month: 'long', year: 'numeric' });
  const firstDay = new Date(this.selectedDate.getFullYear(), this.selectedDate.getMonth(), 1);
  const lastDay = new Date(this.selectedDate.getFullYear(), this.selectedDate.getMonth() + 1, 0);
  this.dates = [];
  for (let d = firstDay; d <= lastDay; d.setDate(d.getDate() + 1)) {
    this.dates.push(new Date(d));
  }
 }

previousMonth(): void {
  this.selectedDate.setMonth(this.selectedDate.getMonth() - 1);
  this.openCalendar();
}

nextMonth(): void {
  this.selectedDate.setMonth(this.selectedDate.getMonth() + 1);
  this.openCalendar();
}



// lo de las imagenes

  cargarImagen(evento: any): void {
    const archivo = evento.target.files[0];
    const lector = new FileReader();
    lector.readAsDataURL(archivo);
    lector.onload = () => {
      this.imagenes.push(lector.result as string);
    };
  }


}