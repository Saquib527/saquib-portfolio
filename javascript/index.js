const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');
const header = document.querySelector("header");
const sectionOne = document.querySelector(".intro");
var ischecked = true;

/*By specifying -200px from margin-top this ensure that our header transform before intro section going out of scope*/
const sectionOneOptions = {
    rootMargin: "-200px 0px 0px 0px"
};

const sectionSkill = document.querySelector("#skill-intersect");
/*By specifying -200px from margin-top this ensure that our header transform before intro section going out of scope*/
const sectionSkillOptions = {
    rootMargin: "0px 0px 0px 0px"
};


/*This code is actually listening onScroll event of our intro section  and doing the color change of our header*/
const sectionOneObserver = new IntersectionObserver
    (
        function (
            entries, sectionOneObserver
        ) {
            entries.forEach(
                entry => {
                    if (!entry.isIntersecting) {
                        header.classList.add("nav-scrolled");
                    }
                    else {
                        header.classList.remove("nav-scrolled");
                    }
                    /*console.log(entry.target);*/
                }
            );
        },
        sectionOneOptions
    );
sectionOneObserver.observe(sectionOne);



/*Here we are toggling the navigation on mobile */
navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open')
    }

    )
});
/*skill bar animation*/
if(ischecked){
    
const sectionSkillObserver = new IntersectionObserver
    (
        function (
            entries, sectionSkillObserver
        ) {
            entries.forEach(
                entry => {

                    if (entry.isIntersecting) {
                        
                        $('.skill-per').each(function(){
                            var $this = $(this);
                            var per = $this.attr('per');
                            $this.css("width",per+'%');
                
                         if(ischecked){
                             ischecked=false;
                            /*this code animating the text inside the pseudo eleemnt*/
                            $({animatedValue: 0}).animate({animatedValue: per},{
                                duration: 1000,
                                step: function(){
                                    $this.attr('per', Math.floor(this.animatedValue));
                                },
                                complete:function(){
                                    $this.attr('per', Math.floor(this.animatedValue));
                                }
                            });
                        }
                        });
                    }
                    /*console.log(entry.target);*/
                }
            );
        },
        sectionSkillOptions
    );
sectionSkillObserver.observe(sectionSkill);
    }