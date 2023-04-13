import React from 'react'
import axios from 'axios'
import {TextField} from '@mui/material'
import'./Style.css'

function Invoice(props) {
  const {values, setValues , tableData, setTableData} = props;
  const handleChange=(e)=>{
    setValues({
      ...values,
      [e.target.name] : e.target.value
    })
  }

  const addProductTable = (e) =>{
    e.preventDefault();
    setTableData(values);
    axios.post("https://localhost:44338/api/AddInvoiceDetail",values)
    .then(res=>{
      console.log(res.data)
    })
  }
  console.log(tableData)

  return (
    <div className="container">
      <div className="footer_get_touch_inner grid-70-30">
        <div className="colmun-70 get_form">
          <div className="get_form_inner">
            <div className="get_form_inner_text">
              <h3>Invoice</h3>
            </div>
            <form >
              <div className="grid-50-50">
                <input type="text" onChange={handleChange}  placeholder="M/s"  name='name'/><br/>
                <input type="text" onChange={handleChange} placeholder="Sr.NO" name='srno'/><br/>
                <textarea onChange={handleChange} placeholder="Write Particulars Description..." name='description' cols="30" rows="10"></textarea>
                <input type="text" onChange={handleChange} placeholder="SAC" name='sac'/><br/>
                <input type="text" onChange={handleChange} placeholder="HSN" name='hsn'/><br/>
                <input type="text" onChange={handleChange} placeholder="Quantity" name='quantity'/><br/> 
                <input type="text" onChange={handleChange} placeholder="Rate" name='rate'/><br/> 
                <input type="text" onChange={handleChange} placeholder="Amount" name='amount'/><br/> 
                <input type="text" onChange={handleChange} placeholder="Invoice" name='invoice'/><br/> 
                <input type="submit" value="Submit" onClick={addProductTable} />
              </div>
            </form>
          </div>
        </div>
        </div>
        </div>
  )
}

export default Invoice