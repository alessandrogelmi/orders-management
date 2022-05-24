package it.jac.mvc;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = "it.jac.mvc")
public class StartSpringApplication {

	public static void main(String[] args) {
		SpringApplication.run(StartSpringApplication.class, args);
	}
}
