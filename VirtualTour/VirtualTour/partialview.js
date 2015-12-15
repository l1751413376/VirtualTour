function noready()
{
    //检测状态
    if (document.readyState === "complete") {
        setTimeout(ready, 1);
    }
    else{
        setTimeout(noready, 1);
    }
}
noready();
//文档加载完毕
function ready()
{
    var els = document.getElementsByTagName("script");
    for (var i = 0; i < els.length;i++)
    {
        var item = els[i];
        var url = item.getAttribute("_partialview");
        if (url == null || url == "") continue;
        partialview(item, url);
    }
}
//分布视图
function partialview(element,url)
{
    var iframe = document.createElement("iframe");
    iframe.setAttribute("src", url);
    iframe.setAttribute("style", "display:none");
    //设置载入
    iframe.onload = function () {
        element.insertAdjacentHTML("beforeBegin", this.contentDocument.body.innerHTML);
        element.parentNode.removeChild(element);
        document.body.removeChild(iframe);
    }
    //放到文档中
    document.body.appendChild(iframe);
}


