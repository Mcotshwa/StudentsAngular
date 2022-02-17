import { UpdateAddressComponent } from './update-address/update-address.component';

import { AddressInterface } from './Interfaces/address-interface';
import { AddressServiceService } from './Services/address-service.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

import { MatTableDataSource } from '@angular/material/table';
import { AddAddressComponent } from './add-address/add-address.component';

@Component({
  selector: 'app-read-addresses',
  templateUrl: './read-addresses.component.html',
  styleUrls: ['./read-addresses.component.scss']
})
export class ReadAddressesComponent implements OnInit {

  constructor(private service: AddressServiceService,
    private dialog:MatDialog) { }

  ngOnInit(): void {
    this.getAddresses();
  }
  displayedColumns:string[]=['AddressLine1',
  'AddressLine2',
  'AddressLine3',
  'City' ,
  'Country',
  'PostalCode',
  'Operations'
 ];
  addressList!:AddressInterface[];
  address!:AddressInterface;
  //dataSource = new MatTableDataSource<User>();
  dataSource!:MatTableDataSource<AddressInterface>;


  
  getAddresses(){
    this.addressList= this.service.getAddresses();
    this.dataSource= new MatTableDataSource(this.addressList);
  }

  


  onCreate(){
    const dialogConfig= new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.width = "60%";
    //dialogConfig.autoFocus= true;
     const modal=  this.dialog.open(AddAddressComponent,dialogConfig);
     modal.afterClosed().subscribe(()=>{
      this.getAddresses();
     })
    
  }

  onEdit(address:AddressInterface){
    this.service.populateForm(address);
    const dialogConfig= new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.width = "60%";
    //dialogConfig.autoFocus= true;
    const modal=  this.dialog.open(UpdateAddressComponent,dialogConfig);
    modal.afterClosed().subscribe(()=>{
      this.getAddresses();
     })
    
  }

  onDelete(id:number){
   
    this.service.OpenConfirmDialog()
    .afterClosed().subscribe(res=> {
      if(res){
        this.service.removeAddress(id);
        this.getAddresses();
      }
    });

    
    
  }



}
