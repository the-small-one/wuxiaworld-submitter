// ==UserScript==
// @name        Submitter
// @namespace   http://wuxiaworld.com/
// @include     http://www.wuxiaworld.com/*
// @include     http://wuxiaworld.com/*
// @grant       none
// @version     2
// ==/UserScript==

/******** WARNING ***********/
/****************************
  TOO MANY PEOPLE MIGHT 
  BREAK THE SERVER
****************************/


// has certain redundancies
// we can scrap the sneakPreview function and work only with the commentsEnabled function

// checking if is a sneak preview
function isSneakPreview(){
    if(document.body.innerHTML.toString().indexOf("Sneak Preview") >= 0){
        return true;
    }
    return false;
}

// checking if comments are enabled
function commentsEnabled(){
    var commentForm = document.getElementById("commentform");
    if( commentForm == null ){
	return false;
    }
    return true;
}

//submitter function
function submitComment(){
    // fill the comment
    // you want to write the comment which is to be submitted
    document.getElementById("comment").value = "asdfg";
    
    // submit the comment
    document.getElementById("submit").click();
}

// checks if you have already commented
function submittedAlready(){
    // generally you want it to be a part of the comment which you can check if it is on the page
    if( document.body.innerHTML.toString().indexOf("asdfg") >= 0 ){
	return true;
    }
    return false;
}

function main(){
    // will check if we were cock blocked by flooding
    // if this happened you might not get first anymore
    if( document.body.innerHTML.toString().indexOf("Slow down") >= 0 ){
        window.history.back();
	return;
    }

    // check if this is a sneak preview 
    // if yes then reload
    if( isSneakPreview() ){
        location.reload();
	return;
    }
    // now we know it is not sneak preview
    
    // now check if comments are enabled
    if(commentsEnabled() == false){ // comments are not enabled
	    location.reload();
	return;
    }

    // check if we have already submitted
    // if not then submit
    if( submittedAlready() == false ){
	    submitComment();
	return;
    }
    // else alert that we have submitted
    else{
        alert("Submitted already");
	return;
    }
}

main();
