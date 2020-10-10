package models

import (
	"github.com/jinzhu/gorm"
)

//Category struct for users
type Category struct {
	gorm.Model
	Title string
	Alias string `gorm:"unique"`
}
