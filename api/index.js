const express = require('express');
const app = express();
const cors = require('cors');


app.use(cors());
app.get('/', (req, res) => {
    res.status(200).json({
        email: "adedejibioku@gmail.com",
        current_datetime: new Date().toISOString(),
        github_url: "https://github.com/BigLens/HNG_0"
    })
})

app.listen(5000, () => console.log('server is listening on port 5000'));

module.exports = app;
