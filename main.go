package main

import (
	"github.com/gin-gonic/gin"
	"github.com/openduty/openduty-website/controllers"
	"github.com/openduty/openduty-website/models"
)

func main() {
	r := gin.Default()

	// Connect to database
	models.ConnectDatabase()

	// Routes
	r.GET("/websites", controllers.FindWebsites)
	r.POST("/websites", controllers.CreateWebsites)

	// Run the server
	r.Run()
}

