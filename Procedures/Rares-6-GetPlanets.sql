CREATE OR ALTER   PROCEDURE dbo.GetPlanets
AS
BEGIN
	SELECT	P.PlanetsId
		,	P.Name
		,	P.Description
		,	P.Status
		,	S.Name			as StatusName
		,	C.CaptainId
		,	C.Name			as CaptainName
		,	I.Path

	FROM dbo.Planet P
	INNER JOIN Status S
		ON S.StatusId = P.Status
	INNER JOIN Team T
		ON T.PlanetsId = P.PlanetsId
	INNER JOIN Captain C
		ON C.TeamId = T.TeamId
	Left JOIN PlanetImage I
		ON I.PlanetId = P.PlanetsId
END
GO