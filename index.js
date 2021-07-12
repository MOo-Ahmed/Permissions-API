const express = require('express');
const app = express();
const bodyparser = require('body-parser');  
app.use(bodyparser.json());    

require('./routes/routes.js')(app);

const port = process.env.PORT || 8282

app.listen(port, () => console.log(`Listening at port ${port} now ....`))