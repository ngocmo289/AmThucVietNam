//Page 1's animations
let vn = $('.main-layout .container .title .vietnam')
let spannth1 = $('.main-layout .container .title span:nth-child(1)')
let spannth3 = $('.main-layout .container .title span:nth-child(3)')
let spannth2 = $('.main-layout .container .title span:nth-child(2)')
let spannth4 = $('.main-layout .container .title span:nth-child(4)')
let button = $('.main-layout .container .button')

$(document).ready(function () {
    vn.css({
        'opacity': '1',
        'transform': 'translateX(0)'
    });
    spannth1.css({
        'transform': 'translateX(0)',
        'opacity': '1'
    });
    spannth3.css({
        'transform': 'translateX(0)',
        'opacity': '1'
    })
    spannth2.css({
        'transform': 'translateX(0)',
        'opacity': '1'
    });
    spannth4.css({
        'transform': 'translateX(0)',
        'opacity': '1'
    });
    button.css({
        'opacity': '1',
        'transform': 'translateX(0)'
    });
});

//Page 2's animations
let containerNorth = $('.localities-layout .container-north')
let containerCentral = $('.localities-layout .container-central')
let containerSouth = $('.localities-layout .container-south')
//Images
let imgNorth = $('.localities-layout #img-north')
let imgCentral = $('.localities-layout #img-central')
let imgSouth = $('.localities-layout #img-south')

//Titles
let titleNorth = $('.localities-layout #text-north')
let titleCentral = $('.localities-layout #text-central')
let titleSouth = $('.localities-layout #text-south')

//Contents
let contentNorth = $('.localities-layout #text-north .content')
let contentCentral = $('.localities-layout #text-central .content')
let contentSouth = $('.localities-layout #text-south .content')

//Buttons
let buttontNorth = $('.localities-layout #text-north #arrow')
let buttontCentral = $('.localities-layout #text-central #arrow')
let buttontSouth = $('.localities-layout #text-south #arrow')

$(document).ready(function () {

    //North's animations
    // imgNorth.css({
    //     'opacity': '1',
    //     'transform': 'translate3d(0, 0, 0)'
    // });
    imgNorth.animate({
        'opacity': '1',
    }, {
        step: function (now, fx) {
            $(this).css('-webkit-transform', 'translate3d(0, 0, 0)');
        }
    });
    titleNorth.animate({
        'opacity': '1',
    }, {
        step: function (now, fx) {
            $(this).css('-webkit-transform', 'translate3d(0, 0, 0)');
        }
    });
    contentNorth.animate({
        'opacity': '1',
    }, {
        step: function (now, fx) {
            $(this).css('-webkit-transform', 'translate3d(0, 0, 0)');
        }
    });
    buttontNorth.animate({
        'opacity': '1',
    }, {
        step: function (now, fx) {
            $(this).css('-webkit-transform', 'translate3d(0, 0, 0)');
        }
    });


    function AnimateFunc() {
        let y_scroll_pos = window.pageYOffset;
        let positioncontainerCentral = containerCentral.offset().top;
        let heightcontainerCentral = containerCentral.outerHeight();
        let positioncontainerSouth = containerSouth.offset().top;
        let heightcontainerSouth = containerSouth.outerHeight();
        let i = 0;
        let j = 0;
        $(window).on('scroll', function (event) {
            event.preventDefault()
            y_scroll_pos = window.pageYOffset;
            // console.log(y_scroll_pos)
            if (y_scroll_pos >= positioncontainerCentral - heightcontainerCentral && i == 0) {
                i++;
                imgCentral.animate({
                    'opacity': '1',
                }, {
                    step: function (now, fx) {
                        $(this).css('-webkit-transform', 'translate3d(0, 0, 0)');
                    }
                });
                titleCentral.animate({
                    'opacity': '1',
                }, {
                    step: function (now, fx) {
                        $(this).css('-webkit-transform', 'translate3d(0, 0, 0)');
                    }
                });
                contentCentral.animate({
                    'opacity': '1',
                }, {
                    step: function (now, fx) {
                        $(this).css('-webkit-transform', 'translate3d(0, 0, 0)');
                    }
                });
                buttontCentral.animate({
                    'opacity': '1',
                }, {
                    step: function (now, fx) {
                        $(this).css('-webkit-transform', 'translate3d(0, 0, 0)');
                    }
                });
            }
            if (y_scroll_pos >= positioncontainerSouth - heightcontainerSouth && j==0) {
                j++;
                imgSouth.animate({
                    'opacity': '1',
                }, {
                    step: function (now, fx) {
                        $(this).css('-webkit-transform', 'translate3d(0, 0, 0)');
                    }
                });
                titleSouth.animate({
                    'opacity': '1',
                }, {
                    step: function (now, fx) {
                        $(this).css('-webkit-transform', 'translate3d(0, 0, 0)');
                    }
                });
                contentSouth.animate({
                    'opacity': '1',
                }, {
                    step: function (now, fx) {
                        $(this).css('-webkit-transform', 'translate3d(0, 0, 0)');
                    }
                });
                buttontSouth.animate({
                    'opacity': '1',
                }, {
                    step: function (now, fx) {
                        $(this).css('-webkit-transform', 'translate3d(0, 0, 0)');
                    }
                });
            }
        });
    }
    AnimateFunc()
});

//Page 3 4 5's animation
let h2 = $('.layout h2')
let content = $('.layout .description .content')
let content1 = $('.layout .description .content:nth-child(3)')

$(document).ready(function () {
    h2.animate({
        'opacity': '1',
    }, {
        step: function (now, fx) {
            $(this).css('-webkit-transform', 'translate3d(0, 0, 0)');
        }
    });
    content.animate({
        'opacity': '1',
    }, {
        step: function (now, fx) {
            $(this).css('-webkit-transform', 'translate3d(0, 0, 0)');
        }
    });
    content1.animate({
        'opacity': '1',
    }, {
        step: function (now, fx) {
            $(this).css('-webkit-transform', 'translate3d(0, 0, 0)');
        }
    });

    let sesstions = $('.session')
    for(let sesstion of sesstions) {
        let y_scroll_pos = window.pageYOffset;
        let position = $(sesstion).offset().top;
        let height = window.screen.height;
        let i = 0;
        let title = $(sesstion).find('.title') 
        let content = $(sesstion).find('.content') 
        let gallery = $(sesstion).find('.gallery') 
        console.log(title)   
        $(window).on('scroll', function (event) {
            event.preventDefault()
            y_scroll_pos = window.pageYOffset;
            if (y_scroll_pos >= position - height && i == 0) {
                i++;
                title.animate({
                    'opacity': '1',
                }, {
                    step: function (now, fx) {
                        $(this).css('-webkit-transform', 'translate3d(0, 0, 0)');
                    }
                });
                content.animate({
                    'opacity': '1',
                }, {
                    step: function (now, fx) {
                        $(this).css('-webkit-transform', 'translate3d(0, 0, 0)');
                    }
                });
                gallery.animate({
                    'opacity': '1',
                }, {
                    step: function (now, fx) {
                        $(this).css('-webkit-transform', 'translate3d(0, 0, 0)');
                    }
                });
            }
        }); 
    }
})

//Page 6's animation
let abouth2 = $('.about-layout h2')
let abouthello = $('.about-layout .hello')
let aboutdes = $('.about-layout .des')
$(document).ready(function () {
    abouth2.animate({
        'opacity': '1',
    }, {
        step: function (now, fx) {
            $(this).css('-webkit-transform', 'translate3d(0, 0, 0)');
        }
    });
    abouthello.animate({
        'opacity': '1',
    }, {
        step: function (now, fx) {
            $(this).css('-webkit-transform', 'translate3d(0, 0, 0)');
        }
    });
    aboutdes.animate({
        'opacity': '1',
    }, {
        step: function (now, fx) {
            $(this).css('-webkit-transform', 'translate3d(0, 0, 0)');
        }
    });

    let infomations = $('.infomations')
    let y_scroll_pos = window.pageYOffset;
    let position = infomations.offset().top;
    let height = window.screen.height;
    let i = 0;
    let h3 = infomations.find('h3')   
    let p = infomations.find('p')   
    let ie = infomations.find('i')   
    $(window).on('scroll', function (event) {
        event.preventDefault()
        y_scroll_pos = window.pageYOffset;
        if (y_scroll_pos >= position - height && i == 0) {
            i++;
            h3.animate({
                'opacity': '1',
            }, {
                step: function (now, fx) {
                    $(this).css('-webkit-transform', 'translate3d(0, 0, 0)');
                }
            });
            p.animate({
                'opacity': '1',
            }, {
                step: function (now, fx) {
                    $(this).css('-webkit-transform', 'translate3d(0, 0, 0)');
                }
            });
            ie.animate({
                'opacity': '1',
            }, {
                step: function (now, fx) {
                    $(this).css('-webkit-transform', 'translate3d(0, 0, 0)');
                }
            });
        }
    }); 
})

//back to top
let backtotop = document.querySelector('.backToTop');
backtotop.addEventListener('click', function (backtotop) {
    backtotop.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
})