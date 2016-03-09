package nl.edia.text;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@EnableAutoConfiguration
public class TextsApplication {

	public static void main(String[] args) {
		SpringApplication.run(TextsApplication.class, args);
	}
}
