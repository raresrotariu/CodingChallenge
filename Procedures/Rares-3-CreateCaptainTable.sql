	CREATE TABLE dbo.Captain
	(
	CaptainId INT IDENTITY(1,1) PRIMARY KEY,
	Name VARCHAR(255) NOT NULL,
	TeamId INT,
	CONSTRAINT FK_TeamCaptain FOREIGN KEY (TeamId) REFERENCES Team(TeamId)
	)
