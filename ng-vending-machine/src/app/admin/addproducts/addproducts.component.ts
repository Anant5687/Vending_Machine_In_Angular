import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-addproducts',
  templateUrl: './addproducts.component.html',
  styleUrls: ['./addproducts.component.scss']
})
export class AddproductsComponent implements OnInit {
  productName: string
  productPrice: any
  Description: string
  file: any


  constructor() { }

  onFileChange(e: any) {
    this.file = e.target.files[0]
  }

  postData() {
    console.log(this.productName, this.Description, this.productPrice, this.file)
    let formData = new FormData()
    formData.append('name', this.productName)
    formData.append('price', this.productPrice)
    formData.append('description', this.Description)
    formData.append('image', this.file)

    const configAxios = {
      headers: {
        'content-type': 'multipart/form-data',
      }
    }

    axios.post('http://localhost:9898/api/post', formData, configAxios).then((res) => {
      console.log(res.data)
    }).catch((err) => {
      console.log(err)
    })
  }

  ngOnInit(): void {
  }

}
