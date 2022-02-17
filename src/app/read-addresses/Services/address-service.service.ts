import { AddressInterface } from './../Interfaces/address-interface';
import { DeleteAddressComponent } from './../delete-address/delete-address.component';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AddressServiceService {

  constructor(private dialog:MatDialog) { }

  OpenConfirmDialog(){
    return this.dialog.open(DeleteAddressComponent,{
      width:'390px',
      panelClass:'confirm-dialog-container',
      position:{ top:"10px" },
      disableClose:true
    });
  }

  private addresses!:AddressInterface[];

  private nextId!:number;

  maxId!:number;
  
  

  getAddresses():AddressInterface[]{
    //let localStorageItem = JSON.parse(localStorage.getItem('users'));
    let current= localStorage.getItem('addresses');
    let localStorageItem= current !== null ? JSON.parse(current) : this.addresses;
    return localStorageItem == null ? [] : localStorageItem.addresses; 
  }

  public addAddress(address:AddressInterface):void{
    //
    //getusers();
    let getaddresses=this.getAddresses();

    if(getaddresses.length==0)
    {
      this.nextId =0;
    }
    else
    {
      //let maxId= (users:Users[]) =>   users[users.length-1].id;
      //let maxId=users[users.length-1].id;
      let maxId = getaddresses.length;
      this.nextId = maxId+1;
    }

    //
    
    let addresses =this.getAddresses();
    address.AddressId=this.nextId;
    console.log('im adding'+address);
    addresses.push(address);
    this.setAddressess(addresses);
    this.nextId++;
  }

  removeAddress(AddressId:number){
    let addresses = this.getAddresses();
    addresses=addresses.filter((ad)=>ad.AddressId!=AddressId);
    this.setAddressess(addresses);
  }

  replaceUser(updatedaddress:AddressInterface){
    let addresses = this.getAddresses();
    addresses=addresses.filter((ad)=>ad.AddressId!=updatedaddress.AddressId);
    addresses.push(updatedaddress);
    this.setAddressess(addresses);
  }

  private setAddressess(addresses:AddressInterface[]):void{
    localStorage.setItem('addresses',JSON.stringify({addresses:addresses}));
  }

  editForm= new FormGroup ({
    AddressId: new FormControl('',Validators.required),
    AddressLine1 : new FormControl('',Validators.required),
    AddressLine2 : new FormControl('',Validators.required),
    AddressLine3 : new FormControl(''),
    City : new FormControl('',Validators.required),
    Country : new FormControl('',Validators.required),
    PostalCode : new FormControl('',Validators.required),
  });

  populateForm(address:AddressInterface){
    this.editForm.setValue({
      AddressId:address.AddressId,
      AddressLine1:address.AddressLine1,
      AddressLine2:address.AddressLine2,
      AddressLine3:address.AddressLine3,
      City:address.City,
      Country: address.Country,
      PostalCode:address.PostalCode

    });
   
  }
}
