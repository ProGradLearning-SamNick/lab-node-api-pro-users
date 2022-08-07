//establishing connection with mongoose

const mongoose = require('mongoose');
const password = '57489Raj';
const dbname = 'sample_mflix';

mongoose
  .connect(
    `mongodb+srv://samnick:${password}@cluster0.cftjlbj.mongodb.net/${dbname}?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: true,
    }
  )
  .then((ok) => console.log('Connected to mongodb'))
  .catch((err) => console.log('Error', err));

module.exports = mongoose;
