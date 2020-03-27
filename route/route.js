const express=require('express')
const appRoute=express.Router()
const filecontrol=require('../file.controller')

appRoute.route('/').get(filecontrol.index)
appRoute.route('/uploadFile').post(filecontrol.upload)

module.exports=appRoute;