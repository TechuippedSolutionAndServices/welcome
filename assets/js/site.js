/**
 * make the header fixed to the top while scrolling more than 200px
 */
document
    .addEventListener("scroll", function () {
        "use strict";
        var siteHeader = document.getElementById("siteHeader");
        if (window.scrollY > 200) {
            siteHeader
                .classList
                .add("sticky");
        } else {
            siteHeader
                .classList
                .remove("sticky");
        }
    });

/**
 * make main menu in header responsive for mobile devices
 * uses Bootstrap-Offcanvas element; required boostrap!
 */
document.addEventListener("DOMContentLoaded", function () {
    "use strict";
    var mainMenuOffcanvas = document.getElementById("navMenu"),
        bsOffcanvas = new bootstrap.Offcanvas(mainMenuOffcanvas);
    document
        .getElementById("openNavMenu")
        .addEventListener('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            bsOffcanvas.toggle();
        });
});

/**
 * initiating some variables required for animations/counters in the page
 */
var windowHeight = document.documentElement.clientHeight;
var counterHolder = document.getElementById("counterHolder");
var progressHolder = document.getElementById("progressHolder");

/**
 * this is a function to calculate counts and reflect in the page
 * based on 'type' passed as argument to the funtion, it is reflecting the changes to the element
 * configured for counters and progress bars
 */
var updateCount = function (elem, type, initNum = 0) {
    var targetNum = +elem.dataset.target;
    var countInterval = setInterval(function () {
        if (initNum < targetNum) {
            initNum++;

            if (type == "counter") {
                elem.innerText = initNum;
            } else if (type == "circularProgress") {
                elem
                    .querySelector(".count")
                    .style
                    .strokeDashoffset = Math.ceil(348 - (348 * initNum) / 100);
            }
        } else {
            clearInterval(countInterval);
        }
    }, 500 / targetNum);
};

/**
 * detecting page scrolling for animating elements
 * or increasing values for counters/progress bars
 */
document.addEventListener("scroll", function () {
    var pageOffset = (window.scrollY || document.documentElement.scrollTop);

    // checking for counters, calling function to reflect changes
    if (counterHolder.offsetTop - windowHeight + 150 < pageOffset) {
        counterHolder
            .querySelectorAll(".counter:not(.counted)")
            .forEach((counter) => {
                counter
                    .classList
                    .add("counted");
                updateCount(counter, "counter");
            });
    }

    // checking for circular progress, calling function to reflect changes
    if (progressHolder.offsetTop - windowHeight + 180 < pageOffset) {
        progressHolder
            .querySelectorAll(".circular-progress:not(.counted)")
            .forEach((circularProgress) => {
                circularProgress
                    .classList
                    .add("counted");
                updateCount(circularProgress, "circularProgress");
            });
    }

    // checking for animation on DOM elements
    document
        .querySelectorAll("[data-animate]:not(.animate)")
        .forEach((animateElem) => {
            if (animateElem.offsetTop - windowHeight + 120 < pageOffset) 
                animateElem.classList.add("animate");
            }
        );
});

/**
 * configuring work-objects with image path & title; object for index record
 */
var showIndex = {
    "webWorks": -1,
    "graphicWorks": -1,
    "marketingWorks": -1,
    "otherWorks": -1
};
const worksObj = {
    "webWorks": [
        {
            picSrc: "https://i.pinimg.com/originals/22/ba/dd/22baddd0a66d50b1ea0dc75c2bba0307.jpg",
            title: "Rimita Mukherjee"
        }, {
            picSrc: "https://i.pinimg.com/originals/4d/7b/a9/4d7ba94994768763d6bfd370dab442f9.jpg",
            title: "Al-Camy"
        }, {
            picSrc: "https://i.pinimg.com/originals/1f/6f/a8/1f6fa8cb8e4fe3679529275e310e59af.jpg",
            title: "Sharadi Foundation"
        }, {
            picSrc: "https://i.pinimg.com/originals/f9/99/c7/f999c7f772e4e0f6b2c76b34c767d2ee.jpg",
            title: "AcademosWeb"
        }, {
            picSrc: "https://i.pinimg.com/originals/7c/99/50/7c9950e68eaf00ad0c6ddad294a9a5ff.jpg",
            title: "Fund Me Crypto"
        }, {
            picSrc: "https://i.pinimg.com/originals/a1/2b/a2/a12ba2a29857775433d8fcee8f42ce4f.jpg",
            title: "Aakashganga"
        }, {
            picSrc: "https://i.pinimg.com/originals/b9/c7/34/b9c7343146ed753b114a4f2a97584149.jpg",
            title: "SafeNews"
        }, {
            picSrc: "https://i.pinimg.com/originals/11/f9/eb/11f9eb94b5575331f6f0a08e8e069b03.jpg",
            title: "Samannay MegaMart"
        }, {
            picSrc: "https://i.pinimg.com/originals/ce/a4/b5/cea4b5178fdf286bb6b7bc774ddb74ad.jpg",
            title: "Banglar Lekhok"
        }, {
            picSrc: "https://i.pinimg.com/originals/1e/c1/92/1ec1926c5564bdaba8ae53eee54543c3.jpg",
            title: "S3 Service"
        }, {
            picSrc: "https://i.pinimg.com/originals/9d/7a/22/9d7a22defcfa999fb8bdbb9ed49f7a2e.jpg",
            title: "AllSafe Coin v2.0"
        }, {
            picSrc: "https://i.pinimg.com/originals/ad/6b/0d/ad6b0df83576ed63b4abb13aebfc5428.jpg",
            title: "BitHot Forum Promotions"
        }, {
            picSrc: "https://i.pinimg.com/originals/c8/9a/25/c89a253990e10e659f3c6367761554fc.jpg",
            title: "BitHot Forum"
        }, {
            picSrc: "https://i.pinimg.com/originals/65/e2/5a/65e25a08e6e088ed939eccd5ea54fd5a.jpg",
            title: "HotDex"
        }, {
            picSrc: "https://i.pinimg.com/originals/88/8c/03/888c036532b98c30516b3187b391b890.jpg",
            title: "Bitkontacts"
        }, {
            picSrc: "https://i.pinimg.com/originals/2c/6b/93/2c6b9318d86f5efb75a909b754d34d6c.jpg",
            title: "CMM Giftcards"
        }, {
            picSrc: "https://i.pinimg.com/originals/13/8b/a8/138ba89e589956c0b8c19e17183a5536.jpg",
            title: "Hex Cash"
        }, {
            picSrc: "https://i.pinimg.com/originals/51/e2/ca/51e2cab235d49cafe84096dc23476c23.jpg",
            title: "HotShot Coin"
        }, {
            picSrc: "https://i.pinimg.com/originals/18/f8/29/18f82905d7aa0a88c79060d5d935a605.jpg",
            title: "Thunder Service"
        }, {
            picSrc: "https://i.pinimg.com/originals/8f/9b/6c/8f9b6c143a9234448d2a66b2ce11399a.jpg",
            title: "Thunderstake Cryptobrand"
        }, {
            picSrc: "https://i.pinimg.com/originals/c2/9a/24/c29a247c29746e2e479425b7e51b6d0c.jpg",
            title: "CryptoForYou"
        }, {
            picSrc: "https://i.pinimg.com/originals/6d/b8/06/6db80639280bf3734665149454c925a4.jpg",
            title: "Bitcoin and Brew"
        }, {
            picSrc: "https://i.pinimg.com/originals/f0/fc/48/f0fc4855d8594b6726c0c1e94fce13d9.jpg",
            title: "AllSafe Coin v1.0"
        }, {
            picSrc: "https://i.pinimg.com/originals/0e/7e/bb/0e7ebbdf6622340acdfb467b4f0abaad.jpg",
            title: "Magazine India Gallery"
        }, {
            picSrc: "https://i.pinimg.com/originals/4c/9f/51/4c9f5176b7c57ca7a57ad8c05faf9241.jpg",
            title: "The Bong Moments"
        }, {
            picSrc: "https://i.pinimg.com/originals/64/3d/97/643d97f35bce4b312952b0a25230fbcf.jpg",
            title: "Magazine India"
        }
    ],
    "graphicWorks": [
        {
            picSrc: "https://i.pinimg.com/originals/9d/2a/54/9d2a54794ecf387ccf2cbe1b3e6d066a.jpg",
            title: "FB cover - Sharadi Foundation"
        }, {
            picSrc: "https://i.pinimg.com/originals/92/30/2a/92302aa0c9c2408513ce5766345e1d24.jpg",
            title: "Products Labeling - Al-Camy"
        }, {
            picSrc: "https://i.pinimg.com/originals/63/21/35/632135ac323388386c6321fba1333931.jpg",
            title: "Avatar - Al-Camy"
        }, {
            picSrc: "https://i.pinimg.com/originals/d6/be/65/d6be65e3d565b5d0a91392de385b1853.jpg",
            title: "Logo - Motivation Place"
        }, {
            picSrc: "https://i.pinimg.com/originals/51/c9/20/51c920bcb4c55aef730b83032cf9ddd3.jpg",
            title: "FB cover - Sharadi Foundation"
        }, {
            picSrc: "https://i.pinimg.com/originals/06/4b/a0/064ba0c1ec6ffb3f5f4fd2a74ece2418.jpg",
            title: "Logo - Banglar Lekhok"
        }, {
            picSrc: "https://i.pinimg.com/originals/62/64/4a/62644a50dcb0269c5d0919b8653dfb09.jpg",
            title: "Logo - S3 Service"
        }, {
            picSrc: "https://i.pinimg.com/originals/5e/8a/74/5e8a749442944a36b27c6b2a0055ca25.jpg",
            title: "Logo - CryptoForYou"
        }, {
            picSrc: "https://i.pinimg.com/originals/fd/e3/81/fde381f7a6a6e0a3cef86f108e23575f.jpg",
            title: "Logo - AllSafe Coin"
        }, {
            picSrc: "https://i.pinimg.com/originals/f6/fc/bd/f6fcbd8ca8446f928e6b917ad8269e2a.jpg",
            title: "Logo - Magazine India Gallery"
        }, {
            picSrc: "https://i.pinimg.com/originals/65/3d/00/653d00bcc11429466cd4cbb21a0aca89.jpg",
            title: "Logo - Magazine India"
        }
    ],
    "marketingWorks": [
        {
            picSrc: "https://i.pinimg.com/originals/d4/91/c4/d491c44cf6e4cdb421669221d3b53978.jpg",
            title: "Child Teasing - Sharadi Foundation"
        }, {
            picSrc: "https://i.pinimg.com/originals/40/67/2e/40672e4a7af538acfa2e58b6573573a7.jpg",
            title: "Membership - Sharadi Foundation"
        }, {
            picSrc: "https://i.pinimg.com/originals/96/75/e6/9675e60a996edcde684f246c034d9dd9.jpg",
            title: "Volunteer - Sharadi Foundation"
        }, {
            picSrc: "https://i.pinimg.com/originals/33/39/c7/3339c7d002b295cfd2bf0d346d7f540b.jpg",
            title: "Registration - ItsDigimind"
        }
    ],
    "otherWorks": [
        {
            picSrc: "https://i.pinimg.com/originals/35/40/61/35406102fdc8a25e26966b851ea9cac3.jpg",
            title: "Digital Magazine - Sharadi Foundation",
            link: "https://sharadi.org/3d-flip-book/sharadi-foundation-magazine-first-edition-2022/"
        }
    ]
};

/**
 * configure load function to get work-pics ready to show
 */
var loadWorks = function (type) {
    // initializing required variables for responsiveness
    var windowWidth = document.documentElement.clientWidth;
    var imgPerLoad = (windowWidth < 576)
        ? 4
        : ((windowWidth < 768)
            ? 6
            : 8);
    var targetNum = (showIndex[type] == -1)
        ? imgPerLoad
        : showIndex[type] + 1 + (1.5 * imgPerLoad);
    var targetElem = document.getElementById(type);
    // get work-pics; assigning into DOM
    for (var i = showIndex[type] + 1; i < worksObj[type].length && i < targetNum; i++) {
        let anch = document.createElement("a"),
            img = document.createElement("img");
        anch
            .classList
            .add("masonry-item");
        anch.setAttribute("title", worksObj[type][i].title);
        img.setAttribute("src", worksObj[type][i].picSrc);
        img.setAttribute("alt", worksObj[type][i].title);
        img
            .classList
            .add("img-fluid");
        anch.appendChild(img);

        if ("link" in worksObj[type][i]) {
            anch.setAttribute("href", worksObj[type][i].link);
            anch.setAttribute("target", "_blank");
        } else 
            anch.dataset.gallery = type;
        
        targetElem.appendChild(anch);
    }
    // finalizing outputs
    showIndex[type] = targetNum - 1;
    if (targetNum < worksObj[type].length) 
        document.getElementById(type + "-loadMore").classList.remove("d-none");
    else 
        document
            .getElementById(type + "-loadMore")
            .classList
            .add("d-none");
    }
;

/**
 * load the works for first time after page loads
 */
document.addEventListener("DOMContentLoaded", function () {
    // making ready to deplay works in proper DIV
    document
        .getElementById("webWorks")
        .classList
        .remove("placeholder-glow");
    document
        .getElementById("webWorks")
        .innerHTML = "";
    // render and finalize the works after page loads
    Object
        .keys(showIndex)
        .forEach(workKey => {
            loadWorks(workKey)
        });
});

/**
 * render lighbox content and popsup lighbox on click on images
 * uses Bootstrap-modal element; required boostrap!
 */
document.addEventListener("click", function (env) {
    if (env.target.classList.contains("masonry-item") && env.target.hasAttribute("data-gallery")) {
        // initializes data and modal element
        let lightboxModal = document.getElementById("lightbox");
        lightboxModal
            .querySelector("#lightbox-title")
            .innerText = env.target.title;
        lightboxModal
            .querySelector("#lightbox-img")
            .src = env
            .target
            .querySelector(".img-fluid")
            .src;
        lightboxModal
            .querySelector("#lightbox-img")
            .alt = env.target.title;
        lightboxModal.dataset.gallery = env.target.dataset.gallery;
        //show bootstrap modal
        var bsModal = new bootstrap.Modal(lightboxModal);
        bsModal.show();
    }
});

/**
 * setting up links to share through social apps
 */
function shareOnSocial(social, link) {
    var socials = {
        "socialFb": "https://www.facebook.com/sharer.php?u=" + link,
        "socialTweet": "https://twitter.com/share?url=" + link + "&text=See what I found from Techuipped&via=techuipped",
        "socialPin": "https://pinterest.com/pin/create/bookmarklet/?url=" + link,
        "socialWp": "https://api.whatsapp.com/send?text=See what I found from Techuipped: " + link
    };
    return socials[social];
}

/**
 * share with social links
 */
document
    .querySelectorAll("#shareOnSocial .btn")
    .forEach((socialBtn) => {
        socialBtn
            .addEventListener("click", function () {
                if (socialBtn.id != "socialShare") 
                    window.open(shareOnSocial(socialBtn.id, document.getElementById("lightbox-img").src), "_blank");
                else 
                    prompt("Copy to clipboard: Ctrl+C, Enter", document.getElementById("lightbox-img").src);
                }
            );
    });