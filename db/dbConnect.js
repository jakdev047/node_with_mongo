const mongoClient = require('mongodb').MongoClient;
const URL = 'mongodb+srv://admin:admin@cluster0.oefkt.mongodb.net?retryWrites=true&w=majority';
const config = {useUnifiedTopology: true};
module.exports.connectDB = async()=>{
    try {
        await mongoClient.connect(URL,config,function(error){
            if(error) {
                console.log(`MongoDB Connection Failed`);
            }
            else {
                console.log(`MongoDB Connection Success`);
            }
        })
    }
    catch(error) {
        console.log(`MongoDB Connection Success`);
    }
};
