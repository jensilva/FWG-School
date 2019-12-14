const express = require ('express');
const {createPost, getAllPosts, editPost, deletePost} = require("../services/post")
const router = new express.Router();

router.post("/", async(req, res) => {
    
    const { titulo, conteudo} = req.body;

    try {
        await createPost({titulo, conteudo});
        res.status(200);
        res.json({isCreated: true});
    }catch(e) {
        res.status(500);
        res.json({error: err});
    };
});

router.get("/", async(req, res) => {

    try{
        const posts = await getAllPosts();
        res.status(200);
        res.json(posts);
    }catch(e) {
        res.status(500)
        res.json(e);
    };
  
})

router.put("/:id", async(req,res) => {
    const {id} = req.params;
    const {titulo, conteudo} = req.body;

    try{
        await editPost({id, titulo, conteudo});
        res.status(200);
        res.json({});
    }catch(e){
        res.status(500);
        res.error({error: e});
    }
})

router.delete("/:id", async(req, res) => {    
    const {id} = req.params;

    try {
        await deletePost(id);
        res.status(200);
        res.json({});
    }catch(e){
        res.status(500);
        res.json(e);
    }

});

module.exports = router;