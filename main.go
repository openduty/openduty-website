package main

import (
	"github.com/openduty/openduty-website/controllers"
	"github.com/openduty/openduty-website/models"
	"net/http"
	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default()
	r.GET("/", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{"data": "hello world"})
	})
	r.GET("/monitor", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{"data": "monitor endpoint"})
	})

	r.Run()
}

