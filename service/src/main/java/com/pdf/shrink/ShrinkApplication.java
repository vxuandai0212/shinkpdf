package com.pdf.shrink;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class ShrinkApplication {
	public static void main(String[] args) {
		SpringApplication.run(ShrinkApplication.class, args);
		float factor = Float.parseFloat(args[0]);
		String src = args[1];
		String dest = args[2];
		ShrinkUtil func = new ShrinkUtil(factor, src, dest);
		try {
			func.manipulatePdf();
			System.out.println("Finish");
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
}
