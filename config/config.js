module.exports = {
  db: {
    production: "mongodb://user:pass@example.com:1234/stroeski-prod",
    development: "mongodb://localhost:27017/storeski-dev",
    test: "mongodb://alex:alex@localhost:27017/express",
  }
};


/*
 -------	CREAR USUARIO EN LA BBDD  -----------

 Recordar antes hacer use <nombreDB> para que el usuario sea de esa BBDD	
db.createUser(
   {
     user: "alex",
     pwd: "alex",
     roles:
       [
         { role: "readWrite", db: "express" }
       ]
   }
)*/
