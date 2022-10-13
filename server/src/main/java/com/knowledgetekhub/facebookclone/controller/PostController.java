package com.knowledgetekhub.facebookclone.controller;


import com.knowledgetekhub.facebookclone.model.Post;
import com.knowledgetekhub.facebookclone.service.PostService;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;
import java.util.Map;

@CrossOrigin(value = "http://localhost:3000/")
@RestController
@RequestMapping("/api/v1/post")
public class PostController {


    private PostService postService;


    public PostController(PostService postService) {
        this.postService = postService;
    }

    @PostMapping
    public Post addPost(@RequestParam Map<String, String> requestParams) throws Exception {
         String strPost = requestParams.get("post");
         String name = requestParams.get("name");
         String email = requestParams.get("email");
         String file = requestParams.get("file");
         String profilePic = requestParams.get("profilePic");

         Post post = Post.builder()
                 .post(strPost)
                 .name(name)
                 .email(email)
                 .file(file)
                 .profilePic(profilePic)
                 .timeStamp(new Date().toString())
                 .build();

         post = postService.addPost(post);

         return post;
    }


    @GetMapping
    public List<Post> getPost() throws Exception {
          return postService.getPost();
    }

}
