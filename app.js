const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const expressHbs = require('express-handlebars')

const app = express();


app.set('view engine', 'ejs');
app.set('views', 'views');

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const rootDir = require('./util/path');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.use((req, res) => {
    res.status(404).render('404', { 
        pageTitle: 'not found',
        path: '404'
    });
});


app.listen(3001);
