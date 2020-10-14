package controllers

import (
	"cms/backend/helpers/general"
	"cms/backend/models"
	"fmt"
	"github.com/gin-gonic/gin"
)

// ListAllPages return list of all pages from a category
func ListAllPages(c *gin.Context) {
	general.Sleep()
	db := general.GetDB()
	defer general.CloseDB(db)
	var pages []models.Page

	alias := c.Param("category")
	var cat models.Category

	err := db.Where("alias = ?", alias).First(&cat).Error
	if err != nil {
		c.JSON(200, gin.H{
			"error": "Record not found",
		})
	} else {
		db.Where("alias = ?", alias).First(&cat)

		err := db.Where("cat_id = ?", cat.ID).Find(&pages).Error

		if err != nil {
			c.JSON(200, gin.H{
				"error": err,
			})
		} else {
			result := db.Order("id DESC").Where("cat_id = ?", cat.ID).Find(&pages)

			c.JSON(200, gin.H{
				"result": result.Value,
			})
		}
	}

}

// GetPage return page for a alias
func GetPage(c *gin.Context) {
	general.Sleep()
	alias := c.Param("page")
	//fmt.Println(alias)
	//category := c.Param("category")

	//var cat models.Category
	var categoryTitle, title, content string

	db := general.GetDB()
	defer general.CloseDB(db)
	//db.Where("alias = ?", category).First(&cat)
	err := db.Raw("SELECT p.title, p.content, c.`title` AS category_title FROM pages p LEFT JOIN categories c ON c.`id` = p.`cat_id` WHERE p.`alias` = ?", alias).Error
	if err != nil {
		c.JSON(200, gin.H{
			//"category": cat,
			"error": "Record not found",
		})
	} else {
		row := db.Raw("SELECT p.title, p.content, c.`title` AS category_title FROM pages p LEFT JOIN categories c ON c.`id` = p.`cat_id` WHERE p.`alias` = ?", alias).Row()
		err = row.Scan(&title, &content, &categoryTitle)
		if err != nil {
			c.JSON(200, gin.H{
				//"category": cat,
				"error": "Record not found",
			})
		} else {
			page := struct {
				Title         string
				Content       string
				CategoryTitle string
			}{
				Title:         title,
				Content:       content,
				CategoryTitle: categoryTitle,
			}
			c.JSON(200, gin.H{
				//"category": cat,
				"page": page,
			})
		}

	}

}

// CreatePage create new page
func CreatePage(c *gin.Context) {

	var page models.Page
	err := c.Bind(&page)
	if err != nil {
		fmt.Println(err)
	}

	//fmt.Println("Received data: ", page)
	db := general.GetDB()
	defer general.CloseDB(db)

	result := db.Create(&page)
	if result.Error != nil {
		c.JSON(200, gin.H{
			"msg":    "Error at creating record",
			"status": 0,
		})
	} else {
		c.JSON(200, gin.H{
			"msg":    "Page Created",
			"status": 1,
		})
	}

}
