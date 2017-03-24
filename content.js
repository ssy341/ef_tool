/**
 * Created by keith on 2017/3/12.
 */
function picture2_341(args) {
    var download = '';
    var imgs = document.getElementsByTagName('img');
    if(!imgs && !imgs.length){
        return;
    }
    for (var i = 0, len = imgs.length; i < len; i++) {
        var img = imgs[i];
        var src = img.getAttribute('src');
        if (src.indexOf("http") > -1) {
            download += src;
            download += '\n';
        }
    }
    console.log(download);
    return download;
}

function grammarMp3_341(args) {
    var mp3s = document.querySelectorAll("audio");
    if(!mp3s && !mp3s.length){
        return;
    }
    var download = '';
    for (var i = 0, len = mp3s.length; i < len; i++) {
        var mp3 = mp3s[i];
        var src = mp3.getAttribute('data-src') || mp3.getAttribute("src");
            download += src;
            download += '\n';
    }
    console.log(download);
    return download;
}

var srciptInterval;
var script;
function MakeScript(args) {
    console.group("追加字幕开始")
    script = document.getElementsByClassName("mejs-subtitles-content")[0].innerText
    srciptInterval = setInterval(function () {
        var currentText = document.getElementsByClassName("mejs-subtitles-content")[0].innerText;
        if (script.indexOf(currentText) < 0) {
            // A change has happened
            console.log("追加字幕");
            script += currentText + "\n\r";
        }
    }, 300);
}

function stopMakeScript(args) {
    console.log(script);
    console.groupEnd();
    clearInterval(srciptInterval);
    return script;
}

