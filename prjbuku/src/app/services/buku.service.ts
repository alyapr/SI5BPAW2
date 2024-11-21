import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Buku } from '../models/buku.model';
import { response } from 'express';

@Injectable({
  providedIn: 'root'
})
export class BukuService {
  private url : string="https://localhost:3000/buku"

  constructor(private http : HttpClient) { }

  addBuku(judul : string, penulis : string, genres : string[]){
    const buku :  Buku={
      _id : null,
      judul : judul,
      penulis : penulis,
      genre : genres 
    }

    this.http.post<{message : string}> (this.url, buku)
    .subscribe((response)=>{
      console.log(response.message)
    });

  }
  
}