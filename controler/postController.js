export const createPost = (req, res) => {
    console.log(req.body.username)
    res.json({data: req.body, message: "Registration successful"})
}

export const updatePost = (req, res) => {
    res.json({message: " This is the route to update post"})
}

export const deletePost = (req, res) => {
    res.json({message: "This is the route to delete post"})
}

export const getPost = (req, res) => {
    res.json({message: "Thsi is the route to get post"})
}
