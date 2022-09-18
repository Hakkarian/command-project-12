function GetThisHidden(){
    $(".offer-dropdown").css("opacity", "0").on('transitionend webkitTransitionEnd oTransitionEnd otransitionend', HideTheElementAfterAnimation);
}

function GetThisDisplayed(){
    $(".nav-menu__content").css("display", "block").css("opacity", "1").unbind("transitionend webkitTransitionEnd oTransitionEnd otransitionend");
}

function HideTheElementAfterAnimation(){
    $(".offer-dropdown").css("display", "none");
}