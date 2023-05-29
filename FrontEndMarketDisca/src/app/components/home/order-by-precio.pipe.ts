import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderByPrecio'
})
export class OrderByPrecioPipe implements PipeTransform {
  transform(publicaciones: any[], ordenarPrecioBajo: boolean): any[] {
    if (ordenarPrecioBajo) {
      return publicaciones.slice().sort((a, b) => a.precio - b.precio);
    }
    return publicaciones;
  }
}