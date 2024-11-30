var posts=["article/hexo-2/","article/hexo-3/","article/hexo-4/","article/new-blog-post/","article/hexo-1/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };