// sekaramg kit sudah bisa menggunakan es-6 di javascript
import express from "express";
import db from "../prisma/connection";

const app = express()

//route
app.get("/note/create", async (req, res)=>{
    //console.log(req.headers)

    const{title, content, author}= req.query
    const createNote = await db.notes.create({
        data : {
            title : title,
            content : content,
            author:author
        }
    })
    res.status(200).json({
        //success :true,
        //message:"server berhsil terhubung"
        success : true,
        data : createNote  
    })
})

//params
app.get("/note/read", async(req, res)=>{
    const readNotes = await db.notes.findMany()
    
    res.status(200).json({
        success :true,
        data : readNotes
    })
})

//listener
app.listen(9000, ()=>{
    console.log('server beckend berjalan..')
})