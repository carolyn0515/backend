package me.carolyn.springbootdeveloper.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class UserViewController {
    @GetMapping("/login")
    public String login() {
        return "oauthlogin";
    }

    @GetMapping("/signup")
    public String signup() {
        return "signup";
    }
}