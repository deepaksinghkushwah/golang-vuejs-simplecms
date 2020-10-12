package middleware

import (
	"cms/backend/service"
	"fmt"
	"net/http"

	"github.com/dgrijalva/jwt-go"
	"github.com/gin-gonic/gin"
)

func respondWithError(c *gin.Context, code int, message interface{}) {
	c.AbortWithStatusJSON(code, gin.H{"error": message})
}

// AuthorizeJWT auth token
func AuthorizeJWT(c *gin.Context) {
	const bearerSchema = "Bearer"
	authHeader := c.GetHeader("Authorization")
	fmt.Println(authHeader)
	tokenString := authHeader[len(bearerSchema):]
	token, err := service.JWTAuthService().ValidateToken(tokenString)
	if token.Valid {
		claims := token.Claims.(jwt.MapClaims)
		fmt.Println(claims)
		c.Next()
	} else {
		fmt.Println(err)
		c.AbortWithStatus(http.StatusUnauthorized)
	}

}
