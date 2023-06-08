const mongoose =require("mongoose");
mongoose.connect("mongodb://localhost27017/vehicleInformation",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    createIndex:true
}).then(()=> {
    console.log(`connection successful`);
}).catch((e)=>{
    console.log('not connected');
})