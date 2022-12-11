CREATE OR ALTER     PROCEDURE dbo.GetCaptain

AS
BEGIN
	SELECT	C.CaptainId
		,	C.Name

	FROM dbo.Captain C
END
GO

