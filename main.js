$(document).ready(() => {

  /*Button to make Editor full size*/
  $('#btn-editor').on('click', function() {
    $('#form-editor').toggleClass('full');
    $('#editor').toggleClass('full');
    $('main').toggleClass('full');
    $('#btn-editor').toggleClass('full');

    if ($('#form-editor').hasClass('full')) {
        $('#form-editor').css('width', '100%');
    } else {
        $('#form-editor').css('width', '600px');
    }

    if ($('#editor').hasClass('full')) {
        $('#editor').css('height', '80vh');
    } else {
        $('#editor').css('height', '200px');
    }

    if ($('main').hasClass('full')) {
        $('main').css('height', '100vh');
    } else {
        $('main').css('height', '100%');
    }

    if ($('#btn-editor').hasClass('full')) {
        $('#btn-editor').html('<i class="fas fa-compress-arrows-alt"></i>');
    } else {
        $('#btn-editor').html('<i class="fas fa-expand-arrows-alt"></i>');
    }

    $('#form-preview').toggle();
  });

  /*Button to make Preview full size*/
  $('#btn-preview').on('click', function() {
    $('#form-preview').toggleClass('full');
    $('#preview').toggleClass('full');
    $('main').toggleClass('full');
    $('#btn-preview').toggleClass('full');

    if ($('#form-preview').hasClass('full')) {
        $('#form-preview').css('width', '100%').css('margin', '40px auto');
    } else {
        $('#form-preview').css('width', '800px').css('margin', 'auto');
    }

    if ($('#btn-preview').hasClass('full')) {
        $('#btn-preview').html('<i class="fas fa-compress-arrows-alt"></i>');
    } else {
        $('#btn-preview').html('<i class="fas fa-expand-arrows-alt"></i>');
    }

    $('#form-editor').toggle();
  });

  /*Update Preview when text is entered into Editor*/
  /*This article was useful: https://www.tutorialrepublic.com/faq/how-to-detect-change-in-a-text-input-box-in-jquery.php*/
  $('#editor').on('input', function() {   $('#preview').html(marked($(this).val()));
  });

  /*Trigger an input on load - needs to go after input function*/
  $('#editor').trigger('input');
});
