CREATE OR ALTER     PROCEDURE dbo.UpdatePlanet
		@PlanetId INT
	,	@PlanetDescription TEXT
	,	@PlanetStatus INT
AS
BEGIN
	UPDATE Planet 
	SET Description = @PlanetDescription
	,	Status = @PlanetStatus
	Where PlanetsId = @PlanetId

	SELECT	P.PlanetsId
		,	P.Name
		,	P.Description
		,	P.Status
		,	S.Name			as StatusName
		,	C.CaptainId
		,	C.Name			as CaptainName

	FROM dbo.Planet P
	INNER JOIN Status S
		ON S.StatusId = P.Status
	INNER JOIN Team T
		ON T.PlanetsId = P.PlanetsId
	INNER JOIN Captain C
		ON C.TeamId = T.TeamId
	Where P.PlanetsId = @PlanetId
END
GO
