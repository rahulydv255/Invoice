import React, { useState } from 'react'
import Invoice from './Invoice'
import InvoicePDF from './InvoicePDF'

function CreateInvoice() {
    const [values, setValues] =useState({
        name: '', 
        srno: '', 
        description: '', 
        sac: '', 
        hsn: '', 
        quantity: '', 
        rate: '', 
        amount: '', 
        invoice:'',
    });

    const [tableData, setTableData] = useState([])
  return (
    <div style={{display:'flex'}}>
        <Invoice values={values}  setValues={setValues} tableData={tableData} setTableData={setTableData} />
        <InvoicePDF values={values} setValues={setValues} tableData={tableData} setTableData={setTableData} />
    </div>
  )
}

export default CreateInvoice