function els282() {
	if (window.location.pathname == "/language-editing-services/phd-thesis-editing/") {
		var h1 = document.querySelector("h1");
		h1.innerText = "Elsevier 提供博士论文的撰写指导与较对";
		var checkEL = setInterval(changeEl, 300);
		function changeEl(){
			document.querySelectorAll("h3").forEach(el => {
				if(el.innerHTML == "博士论文") {
					el.innerHTML  = '<a class="OLseo" href="/language-editing-services/phd-thesis-editing/standard/">博士论文</a>'
					clearInterval(checkEL);  
				}
			})
		}
		
	}
	if (window.location.pathname == "/language-editing-services/phd-thesis-editing/plus/") {
        var checkEL = setInterval(changeEl, 300);        
        function changeEl(){
            document.querySelectorAll("p").forEach(el => {
                if(el.innerHTML == "我们的 Elsevier 提供高级博士论文校对、论文排版服务服务") {        
                    el.innerHTML  = '我们的 Elsevier 提供高级博士论文校对、论文排版服<a class="OLseo" href="/language-editing-services/language-editing-plus/">务</a>'
                    clearInterval(checkEL);
                }
            })
        }

    }
	if ( window.location.pathname == "/article-services/publication-recognition/" || window.location.pathname == "/article-services/article-offprints/" || window.location.pathname == "/article-services/article-poster/" || window.location.pathname == "/article-services/journal-cover-posters/" || window.location.pathname == "/article-services/journal-issues/") {
		var checkEL = setInterval(changeEl, 300);
        function changeEl(){
            document.querySelectorAll("div p:nth-child(2)").forEach(el => {
                if(el.innerHTML == "提高您的学术写作技巧，完善您的学术引用规范，确保您的作品质量，使用视觉效果扩大影响力。") {
                    el.innerHTML  = '<a class="OLseo" href="/writing/">提高您的学术写作技巧</a>，完善您的学术引用规范，确保您的作品质量，使用视觉效果扩大影响力。'
                    clearInterval(checkEL);
                }
            })
        }

    }
	if (window.location.pathname == "/article-services/journal-issues/") {
        var checkEL = setInterval(changeEl, 300);
        function changeEl(){
            document.querySelectorAll("h1").forEach(el => {
                if(el.innerHTML == "Elsevier封面海报、期刊印刷、定制印刷服务") {
                    el.innerHTML  = 'Elsevier封面海报、<br>期刊印刷、定制印刷服务'
                    clearInterval(checkEL);
                }
            })
        }

    }
	
}

if (document.readyState == 'complete') els282();
