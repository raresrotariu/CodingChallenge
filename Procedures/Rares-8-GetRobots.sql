

CREATE OR ALTER     PROCEDURE dbo.GetRobots
		@PlanetId INT
AS
BEGIN
	SELECT	R.RobotId
		,	R.Name

	FROM dbo.Robot R
	INNER JOIN Team T
		ON R.TeamId = T.TeamId
	Where T.PlanetsId = @PlanetId
END
GO


