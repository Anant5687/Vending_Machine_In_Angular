import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { HttpService } from '../../services/http.service'

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})

export class ItemsComponent implements OnInit {

  dataId: any = "62edd794ea5095b4e5ccd553"
  items: any
  constructor(private itemData: HttpService) {
    this.itemData.getItemList().subscribe((data) => {
      this.items = data
    }, error => {
      console.log(error)
    })
  }

  addToCart(id: any) {
    console.log(id)
    axios.put(`http://localhost:9898/cart/update/${this.dataId}/${id}`).then((res) => {
      console.log(res.data)
    }).catch((err) => {
      console.log(err)
    })

  }

  ngOnInit(): void {
  }

}
