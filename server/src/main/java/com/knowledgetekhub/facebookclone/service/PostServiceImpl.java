package com.knowledgetekhub.facebookclone.service;

import com.knowledgetekhub.facebookclone.entity.PostEntity;
import com.knowledgetekhub.facebookclone.model.Post;
import com.knowledgetekhub.facebookclone.repository.PostEntityRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

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

    @Override
    public List<Post> getPost() throws Exception {

        List<Post> posts = new ArrayList<>();
        try{
            List<PostEntity> postEntities = postEntityRepository.findAll();

            posts = postEntities.stream()
                    .map(postEntity ->
                            Post.builder()
                                    .id(postEntity.getId())
                                    .name(postEntity.getName())
                                    .email(postEntity.getEmail())
                                    .post(postEntity.getPost())
                                    .image(postEntity.getImage())
                                    .profilePic(postEntity.getProfilePic())
                                    .timeStamp(postEntity.getTimeStamp()).build()
                    ).collect(Collectors.toList());



        }catch(Exception e){
            throw new Exception("Could not fetch post "+e);
        }
        return posts;
    }
}
