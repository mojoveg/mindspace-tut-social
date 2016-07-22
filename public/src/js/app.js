var postId = 0;
var postBodyElement = null;

// $('.post').find('.interaction').find('a').eq(2).on('click', function() {

$('.post').find('.interaction').find('.edit').on('click', function (event) {
	// console.log('It works');

	event.preventDefault();

    postBodyElement = event.target.parentNode.parentNode.childNodes[1];
	var postBody = event.target.parentNode.parentNode.childNodes[1].textContent;
	// console.log(postBody);
    postId = event.target.parentNode.parentNode.dataset['postid'];
    $('#post-body').val(postBody);
	$('#edit-modal').modal();
});

// $('.edit').click(function(){ $('#edit-modal').modal('show'); });﻿

$('#modal-save').on('click', function () {
    $.ajax({
            method: 'POST',
            url: url,
            data: {body: $('#post-body').val(), postId: postId, _token: token}
        })
        .done(function (msg) {
            $(postBodyElement).text(msg['new_body']);
            $('#edit-modal').modal('hide');
        });
});