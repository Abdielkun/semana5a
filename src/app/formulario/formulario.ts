import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './formulario.html',
  styleUrls: ['./formulario.css']
})
export class Formulario {
  producto = {
    codigo_producto: '',
    nombre_producto: '',
    stock: null as number | null,
    precio_venta: null as number | null,
    categoria: ''
  };

  categorias: string[] = [
    'Tecnología',
    'Limpieza',
    'Ropa',
    'Alimentos',
    'Libros'
  ];

  formInvalido(): boolean {
    return (
      this.invalido(this.producto.codigo_producto, 1) ||
      this.invalido(this.producto.nombre_producto, 1) ||
      this.invalido(this.producto.stock, 1) ||
      this.invalido(this.producto.precio_venta, 1) ||
      this.invalido(this.producto.categoria)
    );
  }

  invalido(valor: any, minimo: number = 1): boolean {
    return (
      !valor ||
      (typeof valor === 'string' && valor.trim().length < minimo) ||
      (typeof valor === 'number' && valor < minimo)
    );
  }

  registrarProducto() {
    alert(`
      Código: ${this.producto.codigo_producto}
      Nombre: ${this.producto.nombre_producto}
      Stock: ${this.producto.stock}
      Precio: ${this.producto.precio_venta}
      Categoría: ${this.producto.categoria}
    `);

    console.log('Producto registrado:', this.producto);
  }

  limpiar(): void {
    this.producto = {
      codigo_producto: '',
      nombre_producto: '',
      stock: null,
      precio_venta: null,
      categoria: ''
    };
  }
}
