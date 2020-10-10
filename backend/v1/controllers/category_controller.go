package controllers

import (
	"cms/backend/helpers/general"
	"cms/backend/models"
	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
	"log"
)

func init() {
	err := godotenv.Load("./.env")
	if err != nil {
		log.Fatalln(err)
	}
}

// Categories return all categories
func Categories(c *gin.Context) {
	general.Sleep()
	var categories []models.Category
	db := general.GetDB()
	defer general.CloseDB(db)
	results := db.Find(&categories)
	if results.Error != nil {
		log.Fatalln(results.Error)
	} else {
		c.JSON(200, gin.H{
			"result": results.Value,
		})
	}

}

// GetCategory find a single category
func GetCategory(c *gin.Context) {
	general.Sleep()
	var cat models.Category
	db := general.GetDB()
	defer general.CloseDB(db)
	alias := c.Param("alias")
	results := db.Where("alias = ?", alias).Find(&cat).Limit(1)
	if results.Error != nil {
		c.JSON(200, gin.H{
			"error": results.Error.Error(),
		})
	} else {
		c.JSON(200, gin.H{
			"result": cat,
		})
	}
}
