package me.carolyn.springbootdeveloper.repository;

import me.carolyn.springbootdeveloper.domain.User; // ✅ 직접 만든 User import
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);
}
