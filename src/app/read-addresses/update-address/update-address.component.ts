import { AddressServiceService } from './../Services/address-service.service';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AddressInterface } from '../Interfaces/address-interface';

@Component({
  selector: 'app-update-address',
  templateUrl: './update-address.component.html',
  styleUrls: ['./update-address.component.scss']
})
export class UpdateAddressComponent implements OnInit {

  constructor(public service:AddressServiceService,
    private dialogRef:MatDialogRef<UpdateAddressComponent>) { }

  ngOnInit(): void {
  }

  address!:AddressInterface;

  
 

  updateaddress(){
    if(this.service.editForm.valid){
      console.log(this.service.editForm.value);
      this.editAddress( this.service.editForm.value);
      this.service.editForm.reset();
      this.onClose();
    }
  }

  editAddress(address:AddressInterface){
    this.service.replaceUser(address);
  }


  onClose(){
    this.service.editForm.reset();
    this.dialogRef.close();

  }

}
