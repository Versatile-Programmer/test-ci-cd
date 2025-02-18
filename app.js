import express from 'express';

app.use(express.json());
const port = 5000;
app.get('/', (req, res) => {
    res.send('Trying CI/CD pipeline');
})

app.listen(port, () => {
    console.log(`🚀 Server is running on http://localhost:${port}`);
  });