import { Component, inject, OnInit } from '@angular/core';
import { OrderService } from '../../../core/services/order.service';
import { ActivatedRoute } from '@angular/router';
import { Order } from '../../../shared/models/order';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-order-detailed',
  imports: [MatCardModule,],
  templateUrl: './order-detailed.component.html',
  styleUrl: './order-detailed.component.scss'
})
export class OrderDetailedComponent implements OnInit {
 private orderService = inject(OrderService);
 private activatedRoute =inject(ActivatedRoute);
 order?:Order;

 ngOnInit(): void {
   this.loadOrder();
 }

 loadOrder(){
  const id = this.activatedRoute.snapshot.paramMap.get('id');
  if(!id) return;

  this.orderService.getOrderDetailed(+id).subscribe({
    next: order => this.order = order
  })
 }
}