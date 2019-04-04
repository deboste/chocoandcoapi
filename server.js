var express = require('express');
var cors = require('cors');

// Nous définissons ici les paramètres du serveur.
var port = process.env.PORT || 3000;

// Nous créons un objet de type Express.
var app = express();

//Afin de faciliter le routage (les URL que nous souhaitons prendre en charge dans notre API), nous créons un objet Router.
//C'est à partir de cet objet myRouter, que nous allons implémenter les méthodes.
var myRouter = express.Router();

// use it before all route definitions
app.use(cors({origin: '*'}));

function handler() {
	return {message: process.env.MESSAGE || "Pain au chocolat !"};
}

module.exports = { handler };

myRouter.route('/')
// GET
	.get(function (req,res){
		res.json(handler());
	})

// Nous demandons à l'application d'utiliser notre routeur
app.use(myRouter);

// Démarrer le serveur
app.listen(port);

