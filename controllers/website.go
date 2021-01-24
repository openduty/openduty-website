package controllers

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/openduty/openduty-website/models"
)

// GET /websites
// Find all websites
func FindWebsites(c *gin.Context) {
	var websites []models.Website
	models.DB.Find(&websites)

	c.JSON(http.StatusOK, gin.H{"data": websites})
}