package middleware

import (
	"cms/backend/service"
	"fmt"
	"github.com/dgrijalva/jwt-go"
	"github.com/gin-gonic/gin"
	"net/http"
)

func respondWithError(c *gin.Context, code int, message interface{}) {
	c.AbortWithStatusJSON(code, gin.H{"error": message})
}

// AuthorizeJWT auth token
func AuthorizeJWT(c *gin.Context) {
	c.Header("Access-Control-Allow-Methods", "OPTIONS, GET, POST")
	const bearerSchema = "Bearer"
	authHeader := c.GetHeader("Authorization")
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
