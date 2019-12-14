const Post = require ("../models/Posts")

const getPostbyId = async (id) => {
        return await Post.findOne({_id: id});
}

const createPost = async ({titulo, conteudo}) => {
        await Post.create({titulo,conteudo});
        return {isCreated: true}
};


const getAllPosts = async () => await Post.findAll();


const editPost = async ({id, titulo, conteudo}) => {
        const post = await getPostbyId(id);
        await post.update({titulo,conteudo})
}

const deletePost = async(id) => {
        const post = getPostbyId(id);
        await post.destroy();
}

module.exports = { 
        createPost,
        editPost,
        getAllPosts,
        deletePost
};