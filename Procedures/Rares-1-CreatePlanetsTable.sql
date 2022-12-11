
	CREATE TABLE dbo.Planet
	(
	PlanetsId INT IDENTITY(1,1) PRIMARY KEY,
	Name VARCHAR(255) NOT NULL,
	Description TEXT,
	Status INT,
	)
