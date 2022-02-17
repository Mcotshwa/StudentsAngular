import { AddressServiceService } from './../Services/address-service.service';

import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-address',
  templateUrl: './delete-address.component.html',
  styleUrls: ['./delete-address.component.scss']
})
export class DeleteAddressComponent implements OnInit {

  constructor(private service:AddressServiceService,
    public dialogRef:MatDialogRef<DeleteAddressComponent>) { }

  ngOnInit(): void {
  }

}
