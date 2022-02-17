import { AddressServiceService } from './../Services/address-service.service';
import { AddressInterface } from './../Interfaces/address-interface';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.component.html',
  styleUrls: ['./add-address.component.scss']
})
export class AddAddressComponent implements OnInit {

  constructor(private service:AddressServiceService,
    private dialogRef:MatDialogRef<AddAddressComponent>) { }

  ngOnInit(): void {
  }

  addForm= new FormGroup ({
    AddressLine1 : new FormControl('',Validators.required),
    AddressLine2 : new FormControl('',Validators.required),
    AddressLine3 : new FormControl(''),
    City : new FormControl('',Validators.required),
    Country : new FormControl('',Validators.required),
    PostalCode : new FormControl('',Validators.required)
  }
  );
  
   address!:AddressInterface;

  formBuilder:any;

  createForm(){
    this.addForm=this.formBuilder.group({
      AddressId:'',
      AddressLine1:'',
      AddressLine2:'',
      AddressLine3:'',
      City:'',
      Country:'',
      PostalCode:''
    })
  }

  createAddress(){
    if(this.addForm.valid){
      console.log(this.addForm.value);
      this.addAddress( this.addForm.value);
      this.addForm.reset();
      this.onClose();
    }
    

  }

  addAddress(address:AddressInterface){
    this.service.addAddress(address);
  }

  onClose(){
    this.addForm.reset();
    this.dialogRef.close();
  }


}
