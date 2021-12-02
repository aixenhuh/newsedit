package kr.co.sbs.newsedit.controller.statistics;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class MyNewsStatisticsController {

    @GetMapping("/statistics")
    public ModelAndView statisticsDashboard(Model model) throws Exception {
        ModelAndView mv = new ModelAndView();
        mv.addObject("applySB", "Y");
        mv.addObject("statistics", "active");
        mv.addObject("strTitle", "통계-분석리포트_대시보드");
        mv.setViewName("news/statistics/dashboard");
        return mv;
    }


}
