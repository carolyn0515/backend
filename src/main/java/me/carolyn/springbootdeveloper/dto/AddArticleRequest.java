package me.carolyn.springbootdeveloper.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import me.carolyn.springbootdeveloper.domain.Article;

@NoArgsConstructor
@AllArgsConstructor
@Getter
public class AddArticleRequest {

    private String title;
    private String content;

    public Article toEntity() {
        return Article.builder()
                .title(title)
                .content(content)
                .build();
    }
}
