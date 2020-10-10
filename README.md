This project is for learning purpose. I have used SQLITE database with GOLANG. Frontend is created in VUEJS. 

To run project
--------------------

Go to backend directory and run Golang code for backend server.

you can run it via ./backend file which is a compiled server, or you can use "go run main.go" command if you want to run code manually.

Right now, I have used SQLITE database for testing, but also added mysql docker image to use, if you are going to use MYSQL, stop your golang program execution and change as per following instructions
 
1. Change user/pass in mysql/docker-compose.yaml
2. Change backend/.env file for mysql settings, comment sqlite settings
3. Change in helpers/general.go to select mysql dialects insted of sqlite dialects in import section.

Now you can run mysql docker file with "docker-compose up -d" for mysql in detach mode. and then run go program for backend server.

Frontend folder contail dist folder for precompiled distribution files. you can use them or run "npm run serve" from frontend root dir to run via npm. Or you can use any server to host dist files.


