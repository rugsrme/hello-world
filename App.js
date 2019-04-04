/* App.js */
import {getSwapi} from './Fetch';
import {registrationForm} from './register';
import {newEditor} from './Cleditor';
import {formHtml} from './formHtml';
import {placeImages} from './imagePlacement';
import {topNav} from './navs';
$(".reg-div").html('<h3>This is the form Div</h3>');
$(".form-div").html(formHtml);
$('#submit-btn').on('click', function() {
  $(".text-data").html($('#editor').val());
});
placeImages();
getSwapi();
newEditor();
topNav();