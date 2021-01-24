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

// POST /websites
// Create new website
func CreateWebsite(c *gin.Context) {
	// Validate input
	var input CreateWebsiteInput
	if err := c.ShouldBindJSON(&input); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	// Create book
	website := models.Website{Url: input.Url, Owner: input.Owner}
	models.DB.Create(&website)

	c.JSON(http.StatusOK, gin.H{"data": website})
}