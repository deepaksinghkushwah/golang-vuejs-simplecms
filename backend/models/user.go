package models

import (
	"github.com/jinzhu/gorm"
	// to add mysql dilect
	//_ "github.com/jinzhu/gorm/dialects/mysql"
)

// Role struct for user roles
type Role struct {
	gorm.Model
	Title string
}

//User struct for users
type User struct {
	gorm.Model
	RoleID    uint
	FirstName string
	LastName  string
	Email     string `gorm:"unique"`
	Password  string
}
