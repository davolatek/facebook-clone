package com.knowledgetekhub.facebookclone.service;

import com.knowledgetekhub.facebookclone.entity.PostEntity;
import com.knowledgetekhub.facebookclone.model.Post;
import com.knowledgetekhub.facebookclone.repository.PostEntityRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PostServiceImpl implements PostService {

    @Autowired
    PostEntityRepository postEntityRepository;


    @Override
    public Post addPost(Post post) throws Exception {

        try {
            PostEntity postEntity = new PostEntity();
            BeanUtils.copyProperties(post, postEntity);

            if (post.getFile() != null && !post.getFile().equalsIgnoreCase("null")) {
                postEntity.setImage(post.getFile());
            } else {
                postEntity.setImage(null);
            }

            postEntityRepository.save(postEntity);

            post.setId(postEntity.getId());
            post.setFile(null);
            post.setImage(postEntity.getImage());
        } catch (Exception e) {
            throw new Exception("Could not save post " + e);
        }
        return post;
    }
}
