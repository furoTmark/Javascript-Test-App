module.exports = function (app) {
	
	// Define JSON File
	 var fs = require("fs");
	 console.log("\n *STARTING* \n");
	// Get content from file
	 var contents = fs.readFileSync("app/data.json");
	// Define to JSON type
	 var jsonContent = JSON.parse(contents);
	
    // api ---------------------------------------------------------------------
    // get all 
    app.get('/api/getData', function (req, res) {
		res.json(jsonContent);
	});
	
	// application -------------------------------------------------------------
    app.get('*', function (req, res) {
		// load the single view file (angular will handle the page changes on the front-end)
        res.sendFile(__dirname + '/public/index.html'); 
	});
}