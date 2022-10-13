package com.knowledgetekhub.facebookclone.repository;

import com.knowledgetekhub.facebookclone.entity.PostEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PostEntityRepository extends JpaRepository<PostEntity, String> {
}
