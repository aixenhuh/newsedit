package kr.co.sbs.newsedit;

import kr.co.sbs.newsedit.filter.SiteMeshConfig;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class NewseditApplication {

    public static void main(String[] args) {
        SpringApplication.run(NewseditApplication.class, args);
    }

    @Bean
    public FilterRegistrationBean siteMeshFilter() {
        FilterRegistrationBean filter = new FilterRegistrationBean();
        filter.setFilter(new SiteMeshConfig());
        return filter;
    }

}
