
function recordMp3() {
    var url = $("input[type='hidden']").val();
    var data = JSON.parse(url);
    var download = '';
    $.each(data, function (i, o) {
        download += o.audio.url;
        download += '\n';
    });
    console.log(download);
    copy(download);
}

function picture2() {
    var data = $("img");
    var download = '';
    $.each(data, function (i, o) {
        download += $(o).attr("src");
        download += '\n';
    });
    console.log(download);
    copy(download);
}

function picture() {
    var url = $("input[type='hidden']").val();
    var data = JSON.parse(url);
    var download = '';
    $.each(data, function (i, o) {
        download += o.image.url;
        download += '\n';
    });
    console.log(download);
    copy(download);
}

function scriptInit() {
    localStorage.setItem("script", "")
}

function scriptAppend() {
    var scriptText = $(".mejs-captions-text").text();
    var script = localStorage.getItem("script");
    script += scriptText + "\n\r";
    localStorage.setItem("script", script);
}

function scriptPrint() {
    var script = localStorage.getItem("script");
    console.log(script);
    copy(script);
    localStorage.removeItem("script");
}

function vedio() {
    console.log($($("source")[0]).attr("src"));
    copy($($("source")[0]).attr("src"));
}

function grammarMp3() {
    var download = '';
    $("div[data-type='audio/mp3']").each(function (i, o) {
        var jqobj = $(o);
        download += jqobj.attr("data-src");
        download += '\n';
    });
    console.log(download);
    copy(download);
}