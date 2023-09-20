import express from "express";

const app = express();

app.use(express.urlencoded());
app.use(express.json());

app.use('/', (req, res) => {
    return res.status(200).json({message: "Hello From AWS Pipline and beanstalk"});
})

app.listen(3001);