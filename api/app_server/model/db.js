// mongoose.connect(
    //   "mongodb+srv://mdp:peSlThYtcsmwgvV8@cluster0.n214x.mongodb.net/dbbuku?retryWrites=true&w=majority&appName=Cluster0"
    // ).then(()=>{
    //   console.log("Connected to Database");
    // }).catch((err)=>{
    //   console.error('App starting error:', err.stack);
    //   console.log("Connection Failed");
    // });
    
    
    mongoose.connect(
      "mongodb://localhost:27017/dbbuku"
    ).then(()=>{
      console.log("Connected to Database");
    }).catch((err)=>{
      // console.error('App starting error:', err.stack);
      console.log("Connection Failed");
    });
    