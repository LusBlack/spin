

exports.pageNotFound = ((req, res) => {
    res.status(404).render('404', { 
        pageTitle: 'not found',
        path: '404'
    });
});