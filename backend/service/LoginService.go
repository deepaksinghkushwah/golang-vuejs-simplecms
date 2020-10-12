package service

import (
	"cms/backend/helpers/general"
	"cms/backend/models"
	"log"
)

// LoginService pass
type LoginService interface {
	LoginUser(email string, password string) (bool, uint)
}
type loginInformation struct {
	email    string
	password string
}

// StaticLoginService pass
func StaticLoginService() LoginService {

	return &loginInformation{
		email:    "",
		password: "",
	}
}
func (info *loginInformation) LoginUser(email string, password string) (isLoggedIn bool, roleID uint) {
	db := general.GetDB()
	defer general.CloseDB(db)
	var user models.User
	err := db.Where("email = ?", email).First(&user).Error
	if err != nil {
		log.Println("Error at fetching record")
		return false, 0
	}
	db.Where("email = ?", email).First(&user)
	if user.ID > 0 {
		if general.CheckPasswordHash(password, user.Password) {
			return true, user.RoleID
		}

		return false, 0
	}
	return false, 0

}
