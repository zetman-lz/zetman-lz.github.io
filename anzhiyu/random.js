var posts=["article/comfyui-1/","article/hexo-1/","article/hexo-2/","article/hexo-3/","article/hexo-4/","article/new-blog-post/","article/web-bug-1/","article/web-bug-2/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };