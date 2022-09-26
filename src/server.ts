import express, { Application, Response, Request, NextFunction } from "express";
import mongoose from "mongoose";
const Article = require("../models/model");

mongoose.connect("mongodb://localhost:27017/tsdb", () =>
  console.log(console.log("connected to the tsdb"))
);
const createANewUser =async(article:typeof Article):Promise<void>=>{
let example = new Article()
example.account = article.account
example.password = article.password
example = await example.save()
}

const app: Application = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.get("/", async(req:Request, res:Response, next: NextFunction): Promise<void> => {
const articles = await Article.find()//因为找数据需要时间，执行并不代表执行完毕，而异步就是等待其执行完毕了，才进行下一步操作
res.render("index",{articles:articles})
}
    )
app.get('/new',(req,res)=>{
    res.render("new",()=>{
        const article= new Article();
        if(article){article.account=""
        article.password=""}
        return article
    })
    

})

app.post('/:id',(req,res)=>{

})
app.listen(3202, () => {
  console.log("server running");
});
