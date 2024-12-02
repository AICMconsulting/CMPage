-- Create Testimonials table
CREATE TABLE Testimonials (
    Id INT IDENTITY(1,1) PRIMARY KEY,
    Name NVARCHAR(100) NOT NULL,
    Company NVARCHAR(100) NOT NULL,
    Testimonial NVARCHAR(MAX) NOT NULL,
    Rating INT NOT NULL CHECK (Rating >= 1 AND Rating <= 5),
    ImageUrl NVARCHAR(255),
    CreatedAt DATETIME2 DEFAULT GETDATE(),
    IsApproved BIT DEFAULT 0
);

-- Create Blog Posts table
CREATE TABLE BlogPosts (
    Id INT IDENTITY(1,1) PRIMARY KEY,
    Title NVARCHAR(200) NOT NULL,
    Slug NVARCHAR(200) NOT NULL UNIQUE,
    Description NVARCHAR(500),
    Content NVARCHAR(MAX) NOT NULL,
    Author NVARCHAR(100) NOT NULL,
    AuthorImage NVARCHAR(255),
    Image NVARCHAR(255),
    PublishedDate DATETIME2 DEFAULT GETDATE(),
    IsPublished BIT DEFAULT 0
);

-- Create Blog Categories table
CREATE TABLE BlogCategories (
    Id INT IDENTITY(1,1) PRIMARY KEY,
    Name NVARCHAR(50) NOT NULL UNIQUE
);

-- Create Blog Posts Categories junction table
CREATE TABLE BlogPostCategories (
    BlogPostId INT,
    CategoryId INT,
    PRIMARY KEY (BlogPostId, CategoryId),
    FOREIGN KEY (BlogPostId) REFERENCES BlogPosts(Id) ON DELETE CASCADE,
    FOREIGN KEY (CategoryId) REFERENCES BlogCategories(Id) ON DELETE CASCADE
);

-- Create Comments table
CREATE TABLE Comments (
    Id INT IDENTITY(1,1) PRIMARY KEY,
    BlogPostId INT,
    Author NVARCHAR(100) NOT NULL,
    Content NVARCHAR(MAX) NOT NULL,
    CreatedAt DATETIME2 DEFAULT GETDATE(),
    IsApproved BIT DEFAULT 0,
    FOREIGN KEY (BlogPostId) REFERENCES BlogPosts(Id) ON DELETE CASCADE
);