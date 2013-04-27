$(function () {
    $('.download-format-select').change(function () {
        $('.download-link').hide();
        $('.' + $(this).val()).show();
        $('.format-all').show();
    });
    $('.download-link').hide();
    $('.format-read').show();
    $('.format-all').show();
});