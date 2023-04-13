-- ================================================
-- Template generated from Template Explorer using:
-- Create Procedure (New Menu).SQL
--
-- Use the Specify Values for Template Parameters 
-- command (Ctrl-Shift-M) to fill in the parameter 
-- values below.
--
-- This block of comments will not be included in
-- the definition of the procedure.
-- ================================================
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
Alter PROCEDURE sp_Invoice 1,'rahul','product',1,2,3,100,100,null,null
@SrNO int,
@Ms varchar(100),
@Decsription varchar(max),
@Sac int,
@Hsn int,
@Quntity int,
@Rate int ,
@Amount Float,
@Invoice int,
@CreatedDate datetime=null

AS
BEGIN
declare @id int
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

    -- Insert statements for procedure here
	Insert into Inovice (SrNO,Ms,Decsription,Sac,Hsn,Quntity,Rate,Amount,Invoice,CreatedDate)
	             values (@SrNO,@Ms,@Decsription,@Sac,@Hsn,@Quntity,@Rate,@Amount,@Invoice,@CreatedDate)

				
				 select @id= scope_identity() 
				  select SrNO,ms,Decsription,Sac,Hsn,Quntity,Rate,Amount,Invoice,CreatedDate from Inovice where Id=@id
END
GO

select * from Inovice