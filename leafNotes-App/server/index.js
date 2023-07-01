const express = require("express")
const app = express()
const mongoose = require('mongoose')
const PostModel = require ('./models/Posts')
const UsersModel = require ('./models/Users')
const CommentsModel = require ('./models/PostComments')

const cors = require("cors");

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/posts", {useNewUrlParser: true})



app.get("/getPosts", (req, res) => {
    PostModel.find({}).then(function(result){
              res.json(result);
    }).catch((err) => {
        res.json(err);

    })});

    app.get("/getComments", (req, res) => {
      CommentsModel.find({}).then(function(result){
                res.json(result);
      }).catch((err) => {
          res.json(err);
  
      })});
  
    // app.get("/posts/:postId", function(req, res){
    //   const requestedPostId = req.params.postId;
    
    //   Post.findOne({_id: requestedPostId}).then(function(post){
    
    //     res.render("post", {
     
    //       title: post.title,
     
    //       content: post.content
     
    //     });
     
    //   });
    
    // });
  
  app.post("/createPost", async (req, res) => {
    const post = req.body;
    const newPost = new PostModel(post);
    await newPost.save();
  
    res.json(post);
  });

  app.post("/createComment", async (req, res) => {
    const comment = req.body;
    const newComment = new CommentsModel(comment);
    await newComment.save();
  
    res.json(comment);
  });

  app.delete('/deletePost/:id', (req, res) => {
    const id = req.params.id;
    console.log(id);


      console.log(PostModel.findById(id))

      PostModel.findByIdAndDelete(id).then( function(err){
             res.json({
              msg:"delete request recieved."
             });
          }).catch(err => res.send("Error"));
  });

  // app.delete('/deletePost/:id', (req, res) => {
  //   const id = req.params.id;
  //     PostModel.findOneAndDelete(id).exec().then( function(err){
  //         if (err) {
  //             console.log(err)
  //         } else {
  //            res.json({
  //             msg:"delete request recieved."
  //            });
  //         }});
  // });



app.listen(3001, ()=> {
    console.log("Server Runs");
});