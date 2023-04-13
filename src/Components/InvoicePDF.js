import { Paper } from '@mui/material'
import { red } from '@mui/material/colors'
import React from 'react'
import './Style.css'

function InvoicePDF(props) {
    const { values, setValues, tableData, setTableData } = props;

    const date = new Date();
    const currentDate = date.toJSON().slice(0, 10)
    return (

        <Paper style={{ width: '100vw', height: '100vh' }} >
            <div>
                <h6>Tax INVOICE</h6>
                <h5>Mob : 9870478089</h5>
                <h3 style={{ color: red }}>BADELAL R.YADAV</h3>
                <h5>Specialist in Interior Electric Work</h5>
                <hr />
                <h5>Durga Mata Chawl, Near Queen Mary High School, Pimpripada, Gen.A.K.Vaidya Marg, Mumbai-400097. </h5>
            </div>

            <hr />
            <div style={{ display: 'flex' }}>
                <div style={{ flex: 1 }}>
                    M/s. {values.name}
                </div>

                <div style={{ borderLeft: '1px solid', padding: '5px 20px' }}>
                    Invoice No. : {values.invoice}
                    <br />
                    Date : {currentDate}
                </div>  
            </div>
            <hr />
            <table style={{ width: '100%' }}>
                <thead style={{ fontSize: '13px' }}>
                    <tr>
                        <th>Sr.NO</th>
                        <th>PARTICULARS</th>
                        <th>SAC</th>
                        <th>HSN</th>
                        <th>QTY</th>
                        <th>Rate</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody style={{ height: '70vh' }}>
                    {/* {tableData.map(item=> {
                <tr style={{border:'1px solid'}} key={item.srno}>
                    <td>{item.srno}</td>
                    <td>{item.description}</td>
                    <td>{item.quantity}</td>
                    <td>{item.rate}</td>
                    <td>{item.amount}</td>
                </tr>
                })} */}
                    <tr style={{ border: '1px solid' }} >
                        <td>{tableData.srno}</td>
                        <td>{tableData.description}</td>
                        <td>{tableData.sac}</td>
                        <td>{tableData.hsn}</td>
                        <td>{tableData.quantity}</td>
                        <td>{tableData.rate}</td>
                        <td>{tableData.amount}</td>
                    </tr>

                </tbody>
            </table>
            <hr />
            <footer >
                <h5 style={{ color: 'red', float: 'right' }}>for BADELAL R.YADAV</h5>
                <p style={{ float: 'left' }}>
                    GST NO.27ACAPY6461F1ZC<br />
                    HSN - 00440410<br />
                    Tax Under Receive Charge No.
                </p>
            </footer>
        </Paper>

    )
}

export default InvoicePDF