package general

import (
	"cms/backend/models"
	lorem "github.com/drhodes/golorem"
	"github.com/jinzhu/gorm"
	"log"
	"math/rand"
	"os"
	"strings"
	// dialects mysql, choose if you are using mysql
	//_ "github.com/jinzhu/gorm/dialects/mysql"

	//dialects sqlite, choose if you are using sqlite
	_ "github.com/jinzhu/gorm/dialects/sqlite"

	// below package is for mysql integration, raw integration
	//_ "github.com/go-sql-driver/mysql"

	"github.com/joho/godotenv"
	"time"
)

var dns, dbType string

func init() {
	err := godotenv.Load("./.env")
	if err != nil {
		log.Fatalln("Error at loading env file")
	}

	dns = os.Getenv("dns")       // mysql connection string
	dbType = os.Getenv("dbType") // mysql
}

// GetDB return db object
func GetDB() *gorm.DB {
	db, err := gorm.Open(dbType, dns)
	checkError(err)
	return db
}

// CloseDB this will close db
func CloseDB(db *gorm.DB) {
	db.Close()
}

func checkError(err error) {
	if err != nil {
		log.Fatalln(err)
	}
}

//RunMigration will run first migrations
func RunMigration() {
	db := GetDB()

	//db.AutoMigrate(&models.Role{})
	//db.AutoMigrate(&models.User{})
	db.AutoMigrate(&models.Category{})
	db.AutoMigrate(&models.Page{})

	var cat models.Category
	db.First(&cat)

	if cat.ID <= 0 {
		db.Create(&models.Category{Title: "Foods", Alias: "foods"})
		db.Create(&models.Category{Title: "Drinks", Alias: "drinks"})
		db.Create(&models.Category{Title: "Bevrages", Alias: "bevrages"})
		db.Create(&models.Category{Title: "Slices", Alias: "slices"})
		db.Create(&models.Category{Title: "Soft Drinks", Alias: "soft-drinks"})
	}

	var page models.Page
	db.First(&page)
	if page.ID <= 0 {
		/*db.Create(&models.Page{Title: "Sample title one", Alias: "sample-title-one", CatID: 1, Content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egone quaeris, inquit, quid sentiam? Si quidem, inquit, tollerem, sed relinquo. Cur deinde Metrodori liberos commendas? Certe, nisi voluptatem tanti aestimaretis. Rationis enim perfectio est virtus; Omnia contraria, quos etiam insanos esse vultis. Tum Torquatus: Prorsus, inquit, assentior"})
		db.Create(&models.Page{Title: "Sample title two", Alias: "sample-title-two", CatID: 1, Content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egone quaeris, inquit, quid sentiam? Si quidem, inquit, tollerem, sed relinquo. Cur deinde Metrodori liberos commendas? Certe, nisi voluptatem tanti aestimaretis. Rationis enim perfectio est virtus; Omnia contraria, quos etiam insanos esse vultis. Tum Torquatus: Prorsus, inquit, assentior"})
		db.Create(&models.Page{Title: "Sample title thre", Alias: "sample-title-thre", CatID: 2, Content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egone quaeris, inquit, quid sentiam? Si quidem, inquit, tollerem, sed relinquo. Cur deinde Metrodori liberos commendas? Certe, nisi voluptatem tanti aestimaretis. Rationis enim perfectio est virtus; Omnia contraria, quos etiam insanos esse vultis. Tum Torquatus: Prorsus, inquit, assentior"})
		db.Create(&models.Page{Title: "Sample title four", Alias: "sample-title-four", CatID: 2, Content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egone quaeris, inquit, quid sentiam? Si quidem, inquit, tollerem, sed relinquo. Cur deinde Metrodori liberos commendas? Certe, nisi voluptatem tanti aestimaretis. Rationis enim perfectio est virtus; Omnia contraria, quos etiam insanos esse vultis. Tum Torquatus: Prorsus, inquit, assentior"})
		db.Create(&models.Page{Title: "Sample title five", Alias: "sample-title-five", CatID: 3, Content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egone quaeris, inquit, quid sentiam? Si quidem, inquit, tollerem, sed relinquo. Cur deinde Metrodori liberos commendas? Certe, nisi voluptatem tanti aestimaretis. Rationis enim perfectio est virtus; Omnia contraria, quos etiam insanos esse vultis. Tum Torquatus: Prorsus, inquit, assentior"})
		db.Create(&models.Page{Title: "Sample title six", Alias: "sample-title-six", CatID: 3, Content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egone quaeris, inquit, quid sentiam? Si quidem, inquit, tollerem, sed relinquo. Cur deinde Metrodori liberos commendas? Certe, nisi voluptatem tanti aestimaretis. Rationis enim perfectio est virtus; Omnia contraria, quos etiam insanos esse vultis. Tum Torquatus: Prorsus, inquit, assentior"})*/
		min := 1
		max := 6
		for i := 0; i < 100; i++ {
			str := lorem.Sentence(10, 30)
			title, alias := str, strings.ToLower(strings.Replace(str, " ", "-", -1))
			content := lorem.Paragraph(50, 200)
			catID := uint(rand.Intn(max-min) + min)
			db.Create(&models.Page{Title: title, Alias: alias, CatID: catID, Content: content})
		}
	}

	/*var role models.Role
	db.First(&role)
	if role.ID <= 0 {
		role1 := models.Role{Title: "Admin"}
		db.Create(&role1)

		role2 := models.Role{Title: "Registered"}
		db.Create(&role2)
		hashPassword, _ := HashPassword("123456")
		admin := models.User{Email: "admin@localhost.com", Username: "admin", Password: hashPassword, FirstName: "Super", LastName: "Admin", RoleID: 1}
		db.Create(&admin)
	}*/
}

// Sleep for a time
func Sleep() {
	time.Sleep(0 * time.Second)
}
