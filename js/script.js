function onEntry(entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
            change.target.classList.add('element-show');
        }
    });
}

const options = {
    threshold: [0.5]
};
const observer = new IntersectionObserver(onEntry, options);
const elements = document.querySelectorAll('.element-animation');

for (const elm of elements) {
    observer.observe(elm);
}

$('[href^="#main"]').on('click', function () {
    const href = $(this).attr('href'), elem = $(document).find(href);
    if (elem.length > 0) {
        const posY = elem.eq(0).offset().top;
        $('html, body').animate({
            scrollTop: posY
        }, 1000);
    }
    return false;
});

$('[href^="#information"]').on('click', function () {
    const href = $(this).attr('href'), elem = $(document).find(href);
    if (elem.length > 0) {
        const posY = elem.eq(0).offset().top;
        $('html, body').animate({
            scrollTop: posY
        }, 1000);
    }
    return false;
});

$('[href^="#portfolio"]').on('click', function () {
    const href = $(this).attr('href'), elem = $(document).find(href);
    if (elem.length > 0) {
        const posY = elem.eq(0).offset().top;
        $('html, body').animate({
            scrollTop: posY
        }, 1000);
    }
    return false;
});

$('[href^="#contacts"]').on('click', function () {
    const href = $(this).attr('href'), elem = $(document).find(href);
    if (elem.length > 0) {
        const posY = elem.eq(0).offset().top;
        $('html, body').animate({
            scrollTop: posY
        }, 1000);
    }
    return false;
});

$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() != 0) {
            $('#toTop').fadeIn();
        } else {
            $('#toTop').fadeOut();
        }
    });
    $('#toTop').click(function () {
        $('body,html').animate({ scrollTop: 0 }, 800);
    });
});

const typed = new Typed('.typed', {
    stringsElement: '.typed-strings',
    typeSpeed: 30,
    backDelay: 20000,
    startDelay: 1500,
    loop: true
});

