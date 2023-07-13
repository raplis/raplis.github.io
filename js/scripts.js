$(function () {
    $('a[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});


var link = document.getElementById('cat');
var image = document.getElementById('myImage');

function changeImage() {
    // 更改图片的 src 属性
    image.src = 'images/cat.jpg';
    image.title = 'Congratulations!';
    setTimeout(back, 1500);

}

function back() {
    image.src = "images/myself.jpg";
    image.title = 'there\'s an Easter egg!';

}

link.addEventListener('click', changeImage);


var pages = document.querySelectorAll('#pageone, #about, #skills, #timelinesection');
var currentPage = 0;
var scrolling = false;

function scrollToNextPage(event) {
    if (scrolling) return; // 如果正在滚动中，则不进行跳转

    // 检测滚轮滚动方向
    if (event.deltaY > 0) {

        // 向下滚动，跳转到下一个界面
        scrolling = true; // 标记为正在滚动中，防止连续触发滚轮事件导致跳转多个界面
        if (currentPage < 4) {
            currentPage++;
            pages[currentPage].scrollIntoView({behavior: 'smooth', block: 'start'}); // 平滑滚动到下一个界面

        }
    } else if (event.deltaY < 0) {
        scrolling = true; // 标记为正在滚动中，防止连续触发滚轮事件导致跳转多个界面
        if (currentPage > 0) {
            currentPage--;
            pages[currentPage].scrollIntoView({behavior: 'smooth', block: 'start'}); // 平滑滚动到上一个界面
        }
    }
}

window.addEventListener('wheel', scrollToNextPage);


var toggleButton = document.querySelector('.toggle-button');
var sidebarContent = document.querySelector('.sidebar');

toggleButton.addEventListener('click', function () {
    sidebarContent.classList.toggle('hide');
    toggleButton.classList.toggle('active');

});

function toggleIcons() {
    var barsIcon = document.querySelector('.fa-bars');
    var timesIcon = document.querySelector('.fa-times');

    barsIcon.style.display = (barsIcon.style.display === 'none') ? 'inline' : 'none';
    timesIcon.style.display = (timesIcon.style.display === 'none') ? 'inline' : 'none';
}
