package service

import (
	"fmt"
	"github.com/dgrijalva/jwt-go"
	"log"
	"os"
	"time"
)

// JWTService for service
type JWTService interface {
	GenerateToken(email string, isUser bool, RoleID uint) string
	ValidateToken(token string) (*jwt.Token, error)
	ExtractClaims(tokenStr string) (jwt.MapClaims, bool)
}
type authCustomClaims struct {
	Name   string `json:"name"`
	User   bool   `json:"user"`
	RoleID uint   `json:"role_id"`
	jwt.StandardClaims
}

type jwtServices struct {
	secretKey string
	issure    string
}

//JWTAuthService for service
func JWTAuthService() JWTService {
	return &jwtServices{
		secretKey: getSecretKey(),
		issure:    "Deepak",
	}
}

func getSecretKey() string {
	secret := os.Getenv("SECRET")
	if secret == "" {
		secret = "secf43faf#$dfggfs@#@#4ret"
	}
	return secret
}

func (service *jwtServices) GenerateToken(email string, isUser bool, RoleID uint) string {
	claims := &authCustomClaims{
		email,
		isUser,
		RoleID,
		jwt.StandardClaims{
			ExpiresAt: time.Now().Add(time.Hour * 48).Unix(),
			Issuer:    service.issure,
			IssuedAt:  time.Now().Unix(),
		},
	}
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)

	//encoded string
	t, err := token.SignedString([]byte(service.secretKey))
	if err != nil {
		panic(err)
	}
	return t
}

func (service *jwtServices) ValidateToken(encodedToken string) (*jwt.Token, error) {
	return jwt.Parse(encodedToken, func(token *jwt.Token) (interface{}, error) {
		if _, isvalid := token.Method.(*jwt.SigningMethodHMAC); !isvalid {
			return nil, fmt.Errorf("Invalid token", token.Header["alg"])

		}
		return []byte(service.secretKey), nil
	})

}

//ExtractClaims values
func (service *jwtServices) ExtractClaims(tokenStr string) (jwt.MapClaims, bool) {
	hmacSecretString := getSecretKey() // Value
	hmacSecret := []byte(hmacSecretString)
	token, err := jwt.Parse(tokenStr, func(token *jwt.Token) (interface{}, error) {
		// check token signing method etc
		return hmacSecret, nil
	})

	if err != nil {
		return nil, false
	}

	if claims, ok := token.Claims.(jwt.MapClaims); ok && token.Valid {
		return claims, true
	}
	log.Printf("Invalid JWT Token")
	return nil, false

}
