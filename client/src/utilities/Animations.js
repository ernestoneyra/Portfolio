export default class Animations {
    static animations = new Animation()

    fadeInPage = (page_name)=> {
        let page = document.getElementById(page_name);
        if(!page_name || !page)
        return
        

        page.style.opacity = "5"
        page.style.transform = "translateY(1px)"
    }
}