## File Upload / Download Example using Spring Boot and MongoDB

Tutorial : [File Upload & Download with SpringBoot and MongoDB](https://hansanitharaka.medium.com/file-upload-with-springboot-and-mongodb-76a8f5b9f75d)

## Getting Started
**1. Clone the repository**
```bash
git clone https://github.com/hansitharaka/springboot-mongodb-file-upload-download.git
```
**2. Specify your database**

Open `src/main/resources/application.properties` file and change following properties accordingly.

```properties
spring.data.mongodb.port = [db port]
spring.data.mongodb.host = [host]
spring.data.mongodb.database = [database name]
```
if you are using MongoDB Atlas, use the following configuration.
* Replace <password> with admin password and <database> with your database name.

```properties
spring.data.mongodb.uri=mongodb+srv://admin:<password>@cluster0.eypdh.mongodb.net/<database>?retryWrites=true&w=majority
```

## REST end-points
* Upload a File: `http://localhost:8080/file/upload`
* Download a File: `http://localhost:8080/file/download/{id}`

##
The application can be accessed at `http://localhost:8080` or open `src/main/resources/static/index.html` to access frontend

![File upload frontend snapshot](/src/main/resources/images/frontend.png)


That's all! Good Luck :muscle:
