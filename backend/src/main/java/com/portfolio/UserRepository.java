package com.portfolio.portfolio;

import org.springframework.data.jpa.repository.JpaRepository;

// UserRepository는 User 엔티티를 관리하고, ID는 Long 타입임
public interface UserRepository extends JpaRepository<User, Long> {
    // 별도 메서드 없이도 save, findById, findAll, deleteById 등 사용 가능
}
