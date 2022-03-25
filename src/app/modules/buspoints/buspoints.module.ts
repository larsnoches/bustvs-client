import { BusPointStoreService } from './services/buspoint/buspoint-store.service';
import { BuspointsItemComponent } from './components/buspoints-item/buspoints-item/buspoints-item.component';
import { BuspointsListComponent } from './components/buspoints-list/buspoints-list/buspoints-list.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [BuspointsListComponent, BuspointsItemComponent],
  imports: [CommonModule],
  providers: [BusPointStoreService],
})
export class BusPointsModule {}
