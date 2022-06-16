const mongooes = require('mongoose');
const Schema = mongooes.Schema;

//connect DB
mongooes.connect('mongodb://localhost/pcat-test-db')

//create schema
const PhotoSchema = new Schema({
    title: String,
    description: String
})

const Photo = mongooes.model('Photo',PhotoSchema)

//create a photo
/*Photo.create({
    title: "Photo Title 2",
    description: "Photo description 2 lorem ipsum"
})*/

//read a photo
/*Photo.find({}, (err,data)=>{
    console.log(data)
})*/

//update Photo
/*const id = "6295f70b8d007a221370fa45";

Photo.findByIdAndUpdate(
    id,{
        title:"Photo Title 111 Updated",
        description: "Phot description 111 updated"
    },
    {
        new: true
    },
    (err,data) =>{
        console.log(data)
    }
)*/

//delete a photo
/*const id = "6295fdc185a85401c969a9d9"
Photo.findByIdAndDelete(id,(err,data) =>{
    console.log("Photo removed")
})*/


