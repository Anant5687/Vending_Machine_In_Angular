import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-cartpage',
  templateUrl: './cartpage.component.html',
  styleUrls: ['./cartpage.component.scss']
})
export class CartpageComponent implements OnInit {

  dataId: any = "62edd794ea5095b4e5ccd553"
  apiData: any
  constructor(private cartData: HttpService) {
    this.cartData.getCartList().subscribe((datap: any) => {
      this.apiData = datap[0].data
      console.log(datap[0].data, "fromCartData")
    }, error => {
      console.log(error)
    })
  }

  clearOneItem(id: any) {
    console.log(id)
    axios.delete(`http://localhost:9898/cart/deleteone/${this.dataId}/${id}`).then((res) => {
      console.log(res.data)
    }).catch((err) => {
      console.log(err)
    })
  }

  clearAllCart() {
    axios.delete(`http://localhost:9898/cart/deleteall/${this.dataId}`).then((res) => {
      console.log(res.data)
    }).catch((err) => {
      console.log(err)
    })
  }



  removeFromCart(id: any) {
    console.log(id)
    axios.put(`http://localhost:9898/cart/deleteone/${this.dataId}/${id}`).then((res) => {
      console.log(res.data)
    }).catch((err) => {
      console.log(err)
    })

  }


  ngOnInit(): void {
  }

}
