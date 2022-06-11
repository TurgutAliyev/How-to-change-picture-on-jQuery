$(function () {
    $('.images img').click(function () {
        let img = $(this).attr('src');
        $('.first img').attr('src', img)
    })


    $('#goster').css({
        'width': '80%',
        'height': '80%',
        'background-repeat' : 'no-repeat',
        'background-size' : "contain",
        'background-position' : "center",
        'position' : 'fixed',
        'top' : '50%',
        'left' : '50%',
        'transform' : 'translate(-50%, -50%)',
        'display' : 'none'
    })

    $('.first img').click(function () {
        let tach = $(this).attr('src');
        $('#goster').css({
            'background-image': `url('${tach}')`,
            'display': "block"
        })
    })

    $('#goster').click(function(){
        $(this).css('display' ,'none');
    })

})