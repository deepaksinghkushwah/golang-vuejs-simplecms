package app

import (
	"cms/backend/v1/controllers"
)

func mapUrls() {

	// api type urls
	v1 := router.Group("/v1")
	{
		v1.GET("/index", controllers.SiteIndex)
		v1.GET("/categories", controllers.Categories)
		v1.GET("/categories/:alias", controllers.GetCategory)

		v1.GET("/pages/:category", controllers.ListAllPages)
		v1.GET("/pages/:category/:page", controllers.GetPage)
	}

	// html template output
	router.GET("/", controllers.SiteIndex)

	/**
	 * using groups we can seprate various routes with prefix like...
	 * v1 := router.Group("/v1")
	 * v1.Get("/test1", controllers.v1Test1) // http://localhost:8081/v1/test1,  or you can use other custom package instaed of controller like api
	 */
}
