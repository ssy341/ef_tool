function recordMp3(e) {
    executeJs("var hiddenInput = document.querySelector('input[type=\"hidden\"]').value; hiddenInput", function (result) {
        var data = JSON.parse(result);
        var download = '';
        $.each(data, function (i, o) {
            download += o.audio.url;
            download += '\n';
        });
        efcopy(download)
    })
}


function picture2() {
    executeJsCode("content.js", "picture2_341(\"" + 341 + "\")", function (result) {
        efcopy(result);
    });
}

function picture() {
    executeJs("var hiddenInput = document.querySelector('input[type=\"hidden\"]').value; hiddenInput", function (result) {
        var data = JSON.parse(result);
        var download = '';
        $.each(data, function (i, o) {
            download += o.image.url;
            download += '\n';
        });
        efcopy(download)
    })
}

function scriptInit() {
    executeJsCode("content.js", "MakeScript(\"" + 341 + "\")", function (result) {

    });
}

function scriptPrint() {
    executeJsCode("content.js", "stopMakeScript(\"" + 341 + "\")", function (result) {
        efcopy(result);
    });
}

function vedio() {
    executeJs("var source = document.getElementsByTagName('source').getAttribute('src'); source", function (result) {
        efcopy(result)
    })
}

function grammarMp3() {
    executeJsCode("content.js", "grammarMp3_341(\"" + 341 + "\")", function (result) {
        efcopy(result);
    });
}

function jspPane(){
    executeJs("var source = document.querySelectorAll('div.jspPane')[0].innerText; source", function (result) {
        efcopy(result)
    })
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('recordMp3').addEventListener('click', recordMp3);
    document.getElementById('picture2').addEventListener('click', picture2);
    document.getElementById('picture').addEventListener('click', picture);
    document.getElementById('scriptInit').addEventListener('click', scriptInit);
    document.getElementById('scriptPrint').addEventListener('click', scriptPrint);
    document.getElementById('vedio').addEventListener('click', vedio);
    document.getElementById('grammarMp3').addEventListener('click', grammarMp3);
    document.getElementById('jspPane').addEventListener('click', jspPane);
});


function executeJs(code, callback) {
    chrome.tabs.executeScript(null, {code: code},
        function (result) {
            callback(result)
        }
    );
}

function executeJsCode(file, code, callback) {
    chrome.tabs.executeScript(null, {file: file});
    chrome.tabs.executeScript(null, {code: code}, function (result) {
        callback(result);
    });
}


/**
 * 复制文字到剪贴板
 * @param content
 */
function efcopy(content) {
    console.log(content);
    var copyFrom = $('#console');
    copyFrom.text(content).select();
    document.execCommand('copy');
}



