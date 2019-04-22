function BlogPost(title, body, author) {
    this.title = title;
    this.body = body;
    this.author = author;
    this.views = 0;
    this.comments = []; //how to add empty object inside array?
    this.isLive = false
}

const newBlogPost = new BlogPost('a', 'b', 'c');
console.log(newBlogPost)