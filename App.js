import React from 'react';
import './App.css';
import { Table } from 'fundamental-react/Table';
import { Shellbar } from 'fundamental-react/Shellbar';
import axios from 'axios';
import { Button, ButtonGroup } from 'fundamental-react/Button';
import { Panel } from 'fundamental-react/Panel';
import { Modal } from 'fundamental-react/Modal';
import OData from 'react-odata';
import buildQuery from 'odata-query'
import { Checkbox, FormFieldset, FormGroup, FormInput, FormItem, FormLabel, FormLegend, FormMessage, FormRadioGroup, FormRadioItem, FormSelect, FormSet, FormTextarea } from 'fundamental-react/Forms';


class FetchDemo extends React.Component{
  
  state = {
    posts: [],
    OriginalData:[],
    modalShow: false

  }

 

  async componentDidMount() {

    var odataUrl = "https://services.odata.org/V3/Northwind/Northwind.svc/Employees";

    axios.get(odataUrl)
      .then(result => this.setState({
        posts: result.data.value,
        OriginalData:result.data.value
      }));



    
      
 


  }





 
  render() {
    var baseUrl = "https://services.odata.org/V4/TripPinService/People";
    var query = { filter: { FirstName: 'Russell' } };
    var aTableData = [];
    var component = this;

  if(this.state.posts.length>0){

 aTableData = this.state.posts.map(function(emp){
            var empObj =  {
              rowData: [
    <Checkbox  onChange={function S(){}}/>,
                emp.EmployeeID,
                emp.FirstName,
                emp.LastName,
                emp.Country,
                emp.City,
                emp.Address,
                emp.HomePhone,
                emp.PostalCode,
  <Button
  compact
  glyph="delete"
  
  
/>,
 <Button
 compact
 glyph="edit"
 
/>
 

              ]
            }
            
            return empObj;
            
                });

  }else{

    aTableData = [
      {
        rowData: [
          'Loading..',
          'Loading..',
          'Loading..',
          'Loading..',
          'Loading..',
          'Loading..',
          'Loading..',
          'Loading..'
        ]
      }
    ]


  }

    return (
      <div className="App">


<OData baseUrl={baseUrl} query={query}>
{({ loading, data, error }) => (
            <div>
              {loading &&  <span>Loading... (()=>{console.log(loading)}) </span>}
              {data && data.value.map((d, i) => <div key={i} id={i}>{d.FirstName}</div>)}
            </div>
          )}
      </OData>

      <Shellbar
        logoSAP
        notifications={{
          callback: function S(){},
          glyph: 'bell',
          label: 'Notifications',
          notificationCount: 2
        }}
        productMenu={[
          {
            callback: function S(){},
            name: 'Application A'
          },
          {
            callback: function S(){},
            name: 'Application B'
          },
          {
            callback: function S(){},
            name: 'Application C'
          },
          {
            callback: function S(){},
            name: 'Application D'
          }
        ]}
        productTitle="Corporate Portal"
        profile={{
          image: '/fundamental-react/static/media/headshot-male.10d4e22e.jpg',
          userName: 'John Snow'
        }}
        profileMenu={[
          {
            callback: function S(){},
            glyph: 'action-settings',
            name: 'Settings',
            size: 's'
          },
          {
            callback: function S(){},
            glyph: 'log',
            name: 'Sign Out',
            size: 's'
          }
        ]}
        searchInput={{
          callback: function S(oEvent){

           
          },
          glyph: 'search',
          label: 'Search',
          onSearch: function S(oEvent){

            console.log(oEvent);

            if(oEvent!==""){
              var filteremp=	component.state.posts.filter(function(emp){
                
                if(emp.FirstName===oEvent){
                  
                  return emp;
                }
                
              })
              
           
              component.setState({posts:filteremp});
              
            }else{
              
              component.setState({posts:component.state.OriginalData});	
              
            }



          },
          placeholder: 'Enter Employee Name'
        }}
        subtitle="SAP"
      />
      
      
      <Panel>

<Panel.Header>
  <Panel.Head
    title="Employee Records"
  />
  <Panel.Actions>
  <>
    <Button
      compact
      glyph="add"
      onClick={function handleModal(){

        component.setState({modalShow:true});

      }}
    >
      Add New Employee
    </Button>

    <Modal
    actions={<><Button onClick={function S(){}} option="light">Cancel</Button><Button onClick={function S(){}}>Add</Button></>}
    onClose={function S(){

      component.setState({modalShow:false});

    }}
    show={this.state.modalShow}
    title="Add Employee"
  >
    <FormSet>
      <FormItem>
        <FormLabel required>
          Employee Name
        </FormLabel>
        <FormInput
          onChange={function S(){}}
          value=""
        />
      </FormItem>
    </FormSet>

    <FormSet>
      <FormItem>
        <FormLabel required>
          Employee Id
        </FormLabel>
        <FormInput
          onChange={function S(){}}
          value=""
        />
      </FormItem>
    </FormSet>


    <FormSet>
      <FormItem>
        <FormLabel >
          Country
        </FormLabel>
        <FormInput
          onChange={function S(){}}
          value=""
        />
      </FormItem>
    </FormSet>

    <FormSet>
      <FormItem>
        <FormLabel >
          City
        </FormLabel>
        <FormInput
          onChange={function S(){}}
          value=""
        />
      </FormItem>
    </FormSet>


    <FormSet>
      <FormItem>
        <FormLabel >
          Address
        </FormLabel>
        <FormInput
          onChange={function S(){}}
          value=""
        />
      </FormItem>
    </FormSet>

  </Modal>

</>
  </Panel.Actions>
</Panel.Header>

<Panel.Body>
   <Table
      headers={[
       '',
        'EmployeeID',
        'FirstName',
        'LastName',
        'Country',
        'City',
        'Address',
        'HomePhone',
        'PostalCode',
        '',
        ''
      ]}
      tableData={aTableData}
    />
 
</Panel.Body>
<Panel.Footer>
  
</Panel.Footer>







</Panel>


          </div>






    );

  }


}

function App() {

  return (
   <FetchDemo />
  );
}

export default App;
