import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Tab, TabGroup } from 'fundamental-react/Tabs';
import { Panel } from 'fundamental-react/Panel';
import { Table } from 'fundamental-react/Table';
import axios from 'axios';

class FetchDemo extends React.Component{
  state = {
    ProductData: [],
    CustomersData:[],
    InvoicesData:[],
    OrdersData:[],
    SupplierData:[],
    EmployeeData:[]
   
  }

  async componentDidMount() {

    var odataUrl1 = "https://services.odata.org/V3/Northwind/Northwind.svc/Products";
    axios.get(odataUrl1)
    .then(result => this.setState({
      ProductData: result.data.value
    }));

    var odataUrl2 = "https://services.odata.org/V3/Northwind/Northwind.svc/Customers";
    axios.get(odataUrl2)
    .then(result => this.setState({
      CustomersData: result.data.value
    }));

    var odataUrl3 = "https://services.odata.org/V3/Northwind/Northwind.svc/Employees";
    axios.get(odataUrl3)
    .then(result => this.setState({
      EmployeeData: result.data.value
    }));

    var odataUrl4 = "https://services.odata.org/V3/Northwind/Northwind.svc/Orders";
    axios.get(odataUrl4)
    .then(result => this.setState({
      OrdersData: result.data.value
    }));

    var odataUrl5 = "https://services.odata.org/V3/Northwind/Northwind.svc/Invoices";
    axios.get(odataUrl5)
    .then(result => this.setState({
      InvoicesData: result.data.value
    }));

    var odataUrl6 = "https://services.odata.org/V3/Northwind/Northwind.svc/Suppliers";
    axios.get(odataUrl6)
    .then(result => this.setState({
      SupplierData: result.data.value
    }));







  }




  render () {

    var aProducts=[];
    var aOrders=[];
    var aInvoices=[];
    var aSuppliers=[];
    var aEmployees=[];
    var aCustomers=[];


    if(this.state.EmployeeData.length>0 && this.state.SupplierData.length>0 &&this.state.InvoicesData.length>0 && this.state.OrdersData.length>0 &&this.state.CustomersData.length>0 &&this.state.ProductData.length>0){

      aProducts =      this.state.ProductData.map(function(product){
var object1={

   rowData: [
    product.ProductID,
    product.ProductName,
    product.SupplierID,
    product.QuantityPerUnit,
    product.UnitPrice,
    product.UnitsInStock,
    product.ReorderLeve,
    product.Discontinued


  ]


}
         return object1;
      });


      aOrders =      this.state.OrdersData.map(function(order){

        var object2={

           rowData: [
           
            order.OrderID,
            order.CustomerID,
            order.EmployeeID,
            order.OrderDate,
            order.ShippedDate,
            order.Freight,
            order.ShipAddress,
            order.ShipCountry,
            order.ShipCity
        
        
          ]
        
        
        }
                 return object2;
     });

     aInvoices =      this.state.InvoicesData.map(function(invoice){

      var object3={

         rowData: [
         
          invoice.ShipName,
          invoice.ShipAddress,
          invoice.ShipCity,
          invoice.ShipCountry,
          invoice.ProductID,
          invoice.ProductName,
          invoice.UnitPrice,
          invoice.OrderID,
          invoice.Quantity
      
        ]
      
      
      }
               return object3;
   });

   aSuppliers =      this.state.SupplierData.map(function(supplier){

    var object4={

       rowData: [
       
        supplier.SupplierID,
        supplier.CompanyName,
        supplier.ContactName,
        supplier.ContactTitle,
        supplier.Address,
        supplier.Country,
        supplier.Phone,
        supplier.City
      ]
    
    
    }
             return object4;
 });

/* aEmployees =      this.state.EmployeeData.map(function(employee){

  return employee;
});*/

aCustomers =      this.state.CustomersData.map(function(customer){

  var object5={

     rowData: [
     
     
      customer.CustomerID,
      customer.CompanyName,
      customer.ContactName,
      customer.ContactTitle,
      customer.Address,
      customer.Country,
      customer.Phone,
      customer.City
  
    ]
  
  
  }
           return object5;
});



    }






  return (  <Panel>
    <Panel.Body>
  <TabGroup>
<Tab

  id="1"
  title="Products"
>
 <Table
    headers={[
    
      'ProductID',
      'ProductName',
      'SupplierID',
      'QuantityPerUnit',
      'UnitPrice',
      'UnitsInStock',
      'ReorderLeve',
      'Discontinued'
    ]}
    tableData={aProducts}
  />
</Tab>
<Tab
  id="2"
  
  title="Orders"
>
 <Table
    headers={[
 
      'OrderID',
      'CustomerID',
      'EmployeeID',
      'OrderDate',
      'ShippedDate',
      'Freight',
      'ShipAddress',
      'ShipCountry',
      'ShipCity'
    ]}
    tableData={aOrders}
  />
</Tab>
<Tab
  
  id="3"
  title="Invoices"
  
>
<Table
    headers={[
    
      'ShipName',
      'ShipAddress',
      'ShipCity',
      'ShipCountry',
      'ProductID',
      'ProductName',
      'UnitPrice',
      'OrderID',
      'Quantity'
    ]}
    tableData={aInvoices}
  />
</Tab>


<Tab
  
  id="4"
  title="Customers"
  
>
<Table
    headers={[
   
      'CustomerID',
      'CompanyName',
      'ContactName',
      'ContactTitle',
      'Address',
      'Country',
      'Phone',
      'Fax'
    ]}
    tableData={aCustomers}
  />
</Tab>

<Tab
  
  id="5"
  title="Suppliers"
  
>
 <Table
    headers={[
   
      'SupplierID',
      'CompanyName',
      'ContactName',
      'ContactTitle',
      'Address',
      'Country',
      'Phone',
      'City'
    ]}
    
    tableData={aSuppliers}
  />
</Tab>






</TabGroup>
</Panel.Body>
</Panel>
  );


  }



}




function App() {
  return (
    <FetchDemo />
  );
}

export default App;
