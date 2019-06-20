
// console.log(document.querySelector(`.page[data-page = '3']`))


class Link {
    constructor(link){
        this.link = link;
        // console.log(this.tab.dataset.page);
        this.content = document.querySelector(`.page[data-tab='${this.link.dataset.tab}']`);
        // console.log(this.content)
        this.content = new Content(this.content);
        
        this.link.addEventListener('click', () => this.linkClick());
    }
    linkClick(){
        const links = document.querySelectorAll('.link')
        links.forEach(function(link){
            link.classList.remove('selected');
        });

        this.link.classList.add('selected');
        
        this.content.displayContent(this.link);
    }
}

class Content {
    constructor(contentTab){
        this.contentTab = contentTab;

    }
    displayContent(){
        const content = document.querySelectorAll('.page');

        content.forEach(function(c){
            c.classList.remove('display')
        });

        this.contentTab.classList.add('display')

        // this.contentTab.classList.toggle('display');
    }
}





const pages = document.querySelectorAll('.link');


pages.forEach(function(link){
    return new Link(link);
    // console.log(link)
})
