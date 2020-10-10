package models

import (
	"github.com/jinzhu/gorm"
	// to add mysql dilect
	//_ "github.com/jinzhu/gorm/dialects/mysql"
)

//Page struct for users
type Page struct {
	gorm.Model
	CatID   uint
	Title   string
	Alias   string `gorm:"unique"`
	Content string `gorm:"type:text"`
}
