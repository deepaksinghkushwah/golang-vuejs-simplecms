package app

import (
	"cms/backend/helpers/general"
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
	"log"
	"os"
)

var (
	router *gin.Engine
)

func init() {
	// when build binary for application, uncomment below line to enable production mode
	// gin.SetMode(gin.ReleaseMode)

	err := godotenv.Load("./.env")
	if err != nil {
		log.Fatalln("Error at loading env file")
	}

	if os.Getenv("ginMode") == "release" {
		gin.SetMode(gin.ReleaseMode)
	}
	router = gin.Default()
	router.Use(cors.Default())

	general.RunMigration()

}

// StartApp function
func StartApp() {
	mapUrls()

	if err := router.Run(":8081"); err != nil {
		panic(err)
	}
}
