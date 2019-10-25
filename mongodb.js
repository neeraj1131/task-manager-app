// CRUD create read update delete
// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID
const { MongoClient, ObjectID} = require('mongodb')
const connectionURL = 'mongodb://127.0.0.1:27017' // Connect to the application running in the particular url
const databaseName = 'task-manager' // database name
const id = new ObjectID()
console.log(id.id.length )
MongoClient.connect(connectionURL, { useNewUrlParser: true} , (error, client) => {
    if(error) {
        return console.log('Unable to connect to database')
    }
    const db = client.db(databaseName) // to be connected to database with refrence name 'task-manager'
    db.collection('users').deleteMany({
        age: 82
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })
    // const updatePromise = db.collection('users').updateOne({
    //     '_id' : new ObjectID("5d5fb9afdd58bc3bc4cec210")
    // }, {
    //     // $set: {
    //     //     name: 'Anand'
    //     // }
    //     // $inc: {
    //     //     age: 55
    //     // }
    // })
    // updatePromise.then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error) 
    // })
})

  // db.collection('users').insertOne({
    //     _id: id,
    //     name: 'Neeraj',
    //     age: 27
    // }, (error,result) => {
    //     if(error) {
    //         return console.log('failed to insert user')
    //     }
    //     console.log(result.ops)
    // })
    // db.collection('users').insertMany([{
    //     name: 'Tejas',
    //     age: 25
    // },
    // {
    //     name: 'Pankaj',
    //     age: 26
    // }], (error,result) => {
    //     if(error){
    //         return console.log('Unable to push data into the database')
    //     }
    //         console.log(result.ops)
    // })
    // db.collection('users').findOne({
    //     name: 'Neeraj'
    // }, (error, result) => {
    //     if(error) {
    //         return console.log('Not found')
    //     }
    //     console.log(result)
    // })
    // db.collection('users').find({age: 25}).toArray((error, users) => {
    //     console.log(users)
    // })