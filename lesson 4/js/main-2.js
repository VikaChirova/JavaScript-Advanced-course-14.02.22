var form = document.forms.regform;
var boxNextEx = document.getElementsByClassName('box-next');
var textBefore = document.getElementById('text-box-before');
var textAfter = document.getElementById('text-box-after');

var openNextEx = () => {
   form.style.display = 'none';
   boxNextEx[0].style.display = 'block';
};

var changeText = () => {
   let str = textBefore.textContent;
   console.log(str);
   textAfter.innerText = str.replace(/^'|(\s)'|'(\s)|'$/g, '$1"$2');
}