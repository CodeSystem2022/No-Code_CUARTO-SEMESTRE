const express = require("express");
const app = express();
const cors = require("cors");
const mercadopago = require("mercadopago");
const path = require("path");
const mysql = require("mysql2/promise");

const dbConfig = {
	host: "localhost",
    user: "root",
    password: "admin",
    database: "ecomerce", 
};
// Ruta para obtener los productos desde la base de datos y devolverlos en formato JSON.
app.get('/productos', async (req, res) => {
	try {
	  const connection = await mysql.createConnection(dbConfig);
	  const [rows] = await connection.execute('SELECT * FROM productos');
	  console.log('Productos obtenidos correctamente');
	  connection.end();
  
	  res.json(rows);
	} catch (error) {
	  console.error('Error al obtener productos:', error);
	  res.status(500).json({ error: 'Error al obtener productos' });
	}
  });
// REPLACE WITH YOUR ACCESS TOKEN AVAILABLE IN: https://developers.mercadopago.com/panel
mercadopago.configure({
	access_token: "token mp",
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(express.static(path.join(__dirname, "../client"))); 
app.use(cors());

app.get("/", function () {
	path.resolve(__dirname, "..","client","index.html");
}); 

app.post("/create_preference", (req, res) => {

	let preference = {
		items: [
			{
				title: req.body.description,
				unit_price: Number(req.body.price),
				quantity: Number(req.body.quantity),
			}
		],
		back_urls: {
			"success": "http://localhost:8080",
			"failure": "http://localhost:8080",
			"pending": ""
		},
		auto_return: "approved",
	};

	mercadopago.preferences.create(preference)
		.then(function (response) {
			res.json({
				id: response.body.id
			});
		}).catch(function (error) {
			console.log(error);
		});
});

app.get('/feedback', function (req, res) {
	res.json({
		Payment: req.query.payment_id,
		Status: req.query.status,
		MerchantOrder: req.query.merchant_order_id
	});
});

app.listen(8080, () => {
	console.log("The server is now running on Port 8080");
});