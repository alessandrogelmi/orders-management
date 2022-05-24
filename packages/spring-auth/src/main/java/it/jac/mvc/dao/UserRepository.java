package it.jac.mvc.dao;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import it.jac.mvc.entity.User;

@Repository
public interface UserRepository extends CrudRepository<User, Integer> {

	// riferimento alla documentazione
	// https://docs.spring.io/spring-data/jpa/docs/current/reference/html/#jpa.sample-app.finders.strategies
	
	public User findByUsername(String username);
}
