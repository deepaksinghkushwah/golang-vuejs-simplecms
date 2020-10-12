package app

import (
	"cms/backend/middleware"
	"cms/backend/service"
	"cms/backend/v1/controllers"
	//"fmt"
	"github.com/gin-gonic/gin"
	"net/http"
)

var loginService service.LoginService = service.StaticLoginService()
var jwtService service.JWTService = service.JWTAuthService()
var loginController controllers.LoginController = controllers.LoginHandler(loginService, jwtService)

func mapUrls() {

	// api type urls
	v1 := router.Group("/v1")
	{
		v1.GET("/index", controllers.SiteIndex)
		v1.GET("/categories", controllers.Categories)
		v1.GET("/categories/:alias", controllers.GetCategory)

		v1.GET("/pages/:category", controllers.ListAllPages)
		v1.GET("/pages/:category/:page", controllers.GetPage)
		v1.POST("/login", func(ctx *gin.Context) {
			token := loginController.Login(ctx)
			if token != "" {
				//fmt.Println(jwtService.ExtractClaims(token))
				ctx.JSON(http.StatusOK, gin.H{
					"token": token,
				})
			} else {
				ctx.JSON(http.StatusUnauthorized, nil)
			}
		})

		sec := v1.Group("/member")
		sec.Use(middleware.AuthorizeJWT)
		{
			sec.GET("/create-page", func(c *gin.Context) {
				c.JSON(http.StatusOK, gin.H{
					"msg": "You are good to go",
				})
			})
		}

	}

	// html template output
	router.GET("/", controllers.SiteIndex)

	/**
	 * using groups we can seprate various routes with prefix like...
	 * v1 := router.Group("/v1")
	 * v1.Get("/test1", controllers.v1Test1) // http://localhost:8081/v1/test1,  or you can use other custom package instaed of controller like api
	 */
}
