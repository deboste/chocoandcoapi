// Import
var express = require('express');
var cors = require('cors');

// Nous définissons ici les paramètres du serveur.
var hostname = 'localhost';
var port = 3000;

// Nous créons un objet de type Express.
var app = express();

//Afin de faciliter le routage (les URL que nous souhaitons prendre en charge dans notre API), nous créons un objet Router.
//C'est à partir de cet objet myRouter, que nous allons implémenter les méthodes.
var myRouter = express.Router();

// use it before all route definitions
app.use(cors({origin: '*'}));

myRouter.route('/')
// J'implémente les méthodes GET, PUT, UPDATE et DELETE
// GET
	.get(function(req,res){
		res.json({message : "Chocolatine", methode : req.method});
	})

// Nous demandons à l'application d'utiliser notre routeur
app.use(myRouter);

// Démarrer le serveur
app.listen(port, hostname, function(){
	console.log("Mon serveur fonctionne sur http://"+ hostname +":"+port);
});
