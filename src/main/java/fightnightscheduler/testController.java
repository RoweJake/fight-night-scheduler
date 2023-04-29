package fightnightscheduler;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class testController {

    @GetMapping("/test")
    @CrossOrigin(origins = "http://localhost:4200")
    testResponse testConnection() {
        return new testResponse("Hello World!");
    }

}
