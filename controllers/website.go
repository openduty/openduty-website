package controllers

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/openduty/openduty-website/models"
)

type CreateWebsiteInput struct {
	Title  string `json:"url" binding:"required"`
	Author string `json:"owner" binding:"required"`
}

type UpdateWebsiteInput struct {
	Title  string `json:"url"`
	Author string `json:"owner"`
}

// GET /websites
// Find all websites
func FindWebsites(c *gin.Context) {
	var websites []models.Website
	models.DB.Find(&websites)

	c.JSON(http.StatusOK, gin.H{"data": websites})
}

// GET /websites/:id
// Find a website
func FindWebsite(c *gin.Context) {
	// Get model if exist
	var website models.Website
	if err := models.DB.Where("id = ?", c.Param("id")).First(&website).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Record not found!"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"data": website})
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

	// Create website
	website := models.Website{URL: input.Url, Owner: input.Owner}
	models.DB.Create(&website)

	c.JSON(http.StatusOK, gin.H{"data": website})
}

// PATCH /website/:id
// Update a website
func UpdateWebsite(c *gin.Context) {
	// Get model if exist
	var website models.website
	if err := models.DB.Where("id = ?", c.Param("id")).First(&website).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Record not found!"})
		return
	}

	// Validate input
	var input UpdatewebsiteInput
	if err := c.ShouldBindJSON(&input); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	models.DB.Model(&website).Updates(input)

	c.JSON(http.StatusOK, gin.H{"data": website})
}

// DELETE /websites/:id
// Delete a website
func DeleteWebsite(c *gin.Context) {
	// Get model if exist
	var website models.website
	if err := models.DB.Where("id = ?", c.Param("id")).First(&website).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Record not found!"})
		return
	}

	models.DB.Delete(&website)

	c.JSON(http.StatusOK, gin.H{"data": true})
}
