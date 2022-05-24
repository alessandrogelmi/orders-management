package it.jac.mvc.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class GeneratePasswordController {

	@Autowired
	private BCryptPasswordEncoder encoder;
	
	@GetMapping(path = "/generatePassword")
	public ResponseEntity<String> generatePassword(@RequestParam("pwd") String password) {
		
		return ResponseEntity.ok(encoder.encode(password));
		
	}
}
