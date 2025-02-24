import express from 'express';
const app = express();
app.use(express.json());
const port = 5000;
app.get('/', (req, res) => {
    res.send('Trying CI/CD pipeline again by changing something');
})
//Adding a comments to make some difference in file.
app.listen(port, () => {
    console.log(`🚀 Server is running on http://localhost:${port}`);
  });

