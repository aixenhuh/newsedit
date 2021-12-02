package kr.co.sbs.newsedit.filter;


import org.sitemesh.builder.SiteMeshFilterBuilder;
import org.sitemesh.config.ConfigurableSiteMeshFilter;

public class SiteMeshConfig extends ConfigurableSiteMeshFilter {
    @Override
    protected void applyCustomConfiguration(SiteMeshFilterBuilder builder) {
       builder.addDecoratorPath("/*", "/WEB-INF/views/layout/sitemesh_main.jsp")
               .addExcludedPath("/pop/*")
               .addExcludedPath("/main/newsMobileMainPreview*")
               .addExcludedPath("/section/newsMobileSectionPreview*")
               .addExcludedPath("/news/specialmenu/loadnews*")
               .addExcludedPath("/m/*")
               .addExcludedPath("*/popup/*")
               .addExcludedPath("/transfer/*")
               .addExcludedPath("*/panda/*")
               .addExcludedPath("*/mabuletter/editPop*")
               .addExcludedPath("*/board/*");
    }
}
