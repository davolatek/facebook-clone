package com.knowledgetekhub.facebookclone.service;

import com.knowledgetekhub.facebookclone.model.Post;

import java.util.List;

public interface PostService {
    Post addPost(Post post) throws Exception;

    List<Post> getPost() throws Exception;
}
