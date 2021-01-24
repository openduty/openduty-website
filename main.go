package main

import (
	"github.com/gin-gonic/gin"
	"github.com/openduty/openduty-website/controllers"
	"github.com/openduty/openduty-website/models"
	"net/http"
)

func main() {
	r := gin.Default()

	// Connect to database
	models.ConnectDatabase()

	// Routes
	r.GET("/websites", controllers.FindWebsites)

	// Run the server
	r.Run()
}

