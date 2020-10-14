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

// SiteIndex function
func SiteIndex(c *gin.Context) {
	c.JSON(200, gin.H{
		"Title":   "Index Page",
		"Content": "This is sample content",
	})
}

//Signup for register new user
func Signup(c *gin.Context) {
	var user models.User
	err := c.Bind(&user)
	if err != nil {
		c.JSON(200, gin.H{
			"err":    err,
			"status": 0,
		})
	} else {
		log.Println(user)
		hasPassword, _ := general.HashPassword(user.Password)
		user.Password = hasPassword
		user.RoleID = 2

		db := general.GetDB()
		defer general.CloseDB(db)
		var id uint
		err = db.Raw("SELECT id FROM `users` WHERE email = ?", user.Email).Row().Scan(&id)

		if err != nil {

			result := db.Create(&user)
			if result.Error != nil {
				c.JSON(200, gin.H{
					"msg":    "Error at creating user",
					"status": 0,
				})
			} else {
				c.JSON(200, gin.H{
					"msg":    "User Created",
					"status": 1,
				})
			}
		} else {
			c.JSON(200, gin.H{
				"msg":    "User already exists",
				"status": 0,
			})
		}
	}

}
