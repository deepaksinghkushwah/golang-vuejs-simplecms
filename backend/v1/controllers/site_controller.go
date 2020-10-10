package controllers

import (
	"github.com/gin-gonic/gin"
	"log"

	"github.com/joho/godotenv"
)

func init() {
	err := godotenv.Load("./.env")
	if err != nil {
		log.Fatalln(err)
	}
}

// SiteIndex function
func SiteIndex(c *gin.Context) {
	c.JSON(200, gin.H{
		"Title":   "Index Page",
		"Content": "This is sample content",
	})

}
