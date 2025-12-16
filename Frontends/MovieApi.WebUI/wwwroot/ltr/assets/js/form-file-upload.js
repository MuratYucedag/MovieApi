$(function() {
	"use strict";

    $('#fancy-file-upload').FancyFileUpload({
        params: {
            action: 'fileuploader'
        },
        maxfilesize: 1000000
    });

    $(document).ready(function () {
        $('#image-uploadify').imageuploadify();
    })


});