package com.knowledgetekhub.facebookclone.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Lob;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Post {

    private String id;
    private String name;

    private String post;
    private String email;

    private String image;
    private String profilePic;
    private String timeStamp;
    private String file;
}
