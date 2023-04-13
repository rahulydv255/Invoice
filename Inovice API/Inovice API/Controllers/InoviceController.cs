using Inovice_API.Models;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Inovice_API.Controllers
{
    public class InoviceController : ApiController
    {
        SqlConnection con = new SqlConnection(ConfigurationManager.ConnectionStrings["myCon"].ConnectionString);
        // GET: Invoice
        [HttpPost]
        [Route("api/AddInvoiceDetail")]
        public List<AddInoviceResponse> AddInvoiceDetail(AddInvoiceRequest addInoviceRequest)
        {
            List<AddInoviceResponse> addInoviceResponse = new List<AddInoviceResponse>();
            try
            {
                SqlCommand cmd = new SqlCommand("sp_Invoice", con);
                con.Open();
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@SrNO", addInoviceRequest.srno);
                cmd.Parameters.AddWithValue("@Ms", addInoviceRequest.name);
                cmd.Parameters.AddWithValue("@Decsription", addInoviceRequest.description);
                cmd.Parameters.AddWithValue("@Sac", addInoviceRequest.sac);
                cmd.Parameters.AddWithValue("@Hsn", addInoviceRequest.hsn);
                cmd.Parameters.AddWithValue("@Quntity", addInoviceRequest.quntity);
                cmd.Parameters.AddWithValue("@Rate", addInoviceRequest.rate);
                cmd.Parameters.AddWithValue("@Amount", addInoviceRequest.amount);
                cmd.Parameters.AddWithValue("@Invoice", addInoviceRequest.invoice);
                cmd.Parameters.AddWithValue("@CreatedDate", addInoviceRequest.createdDate);
                cmd.ExecuteNonQuery();
                SqlDataAdapter da = new SqlDataAdapter(cmd);
                DataTable dataTable = new DataTable();
                da.Fill(dataTable);
                foreach (DataRow item in dataTable.Rows)
                {
                    addInoviceResponse.Add(new AddInoviceResponse
                    {
                        srno = Convert.ToInt32(item[0]),
                        name = Convert.ToString(item[1]),
                        description = Convert.ToString(item[2]),
                        sac = Convert.ToInt32(item[3]),
                        hsn = Convert.ToInt32(item[4]),
                        quntity = Convert.ToInt32(item[5]),
                        rate = Convert.ToInt32(item[6]),
                        amount = Convert.ToInt32(item[7]),
                        invoice = Convert.ToInt32(item[8]), 
                        createdDate = Convert.ToString(item[9]),
                    });
                }
                con.Close();
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
            }


            return addInoviceResponse;
        }

    }
    [HttpPost]
    [Route("api/GetInoviceDetail")]
    public List<AddInoviceResponse> GetInoviceDetail(AddInvoiceRequest addInoviceRequest)
    {
        List<AddInoviceResponse> addInoviceResponse = new List<AddInoviceResponse>();
        try
        {
            SqlCommand cmd = new SqlCommand("sp_Invoice", con);
            con.Open();
            cmd.CommandType = CommandType.StoredProcedure;
            SqlDataAdapter da = new SqlDataAdapter(cmd);
            DataTable dataTable = new DataTable();
            da.Fill(dataTable);
            foreach (DataRow item in dataTable.Rows)
            {
                addInoviceResponse.Add(new AddInoviceResponse
                {
                    srno = Convert.ToInt32(item[0]),
                    name = Convert.ToString(item[1]),
                    description = Convert.ToString(item[2]),
                    sac = Convert.ToInt32(item[3]),
                    hsn = Convert.ToInt32(item[4]),
                    quntity = Convert.ToInt32(item[5]),
                    rate = Convert.ToInt32(item[6]),
                    amount = Convert.ToInt32(item[7]),
                    invoice = Convert.ToInt32(item[8]),
                    createdDate = Convert.ToString(item[9]),
                });
            }
            con.Close();
        }
        catch (Exception ex)
        {
            Console.WriteLine(ex.Message);
        }


        return addInoviceResponse;
    }

}

}
