const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose'); 
const intakeRoutes = require('./routes/intake');


const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use('/intake', intakeRoutes);


// MongoDB connection
const uri = "mongodb+srv://EzakialChristian:takeasipDB@takeasipcluster.er9gtvz.mongodb.net/?retryWrites=true&w=majority&appName=TakeASipCluster";

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected successfully"))
  .catch(err => console.log("MongoDB connection error:", err));

  // Import and use routes
const userRoutes = require('./routes/userRoutes');
app.use('/user', userRoutes); // All user-related APIs will use this base path
app.use('/intake', intakeRoutes); // All intake-related APIs will use this base path


app.get('/', (req, res) => {
  res.send('Hello from TakeASip backend!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
