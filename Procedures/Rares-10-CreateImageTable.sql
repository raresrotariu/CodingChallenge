CREATE TABLE dbo.PlanetImage
	(
	ImageId INT IDENTITY(1,1) PRIMARY KEY,
	Path TEXT NOT NULL,
	PlanetId INT ,
	CONSTRAINT FK_PlanetImage FOREIGN KEY (PlanetId) REFERENCES Planet(PlanetsId)
	)
