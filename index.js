const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('HELLO Anil...This is production Server of test2 app'));

app.listen(process.env.PORT || port, () => console.log(`Example app listening on port ${port}`));
