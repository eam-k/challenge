const express = require('express');
const favicon = require('serve-favicon')
const path = require('path')

module.exports = (app) => {
    app.use(favicon(path.join(__dirname, '../../public/img/favicon.png')));
    app.use(express.static(('public')))
}