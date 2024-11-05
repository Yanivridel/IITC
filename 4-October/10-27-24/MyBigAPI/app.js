import express from "express"
// import { add } from "./utils/math.js"

const app = express();

app.get('/', (req, res) => {
    // console.log(add(2, 3));
    // console.log(req);
    
    res.send('Hello World');
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});