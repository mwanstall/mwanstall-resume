var process = function (json) {
    var x = 0,
        r = Raphael("chart", 780, 140),
        labels = {},
        textattr = {"font": '11px "Arial"', stroke: "none", fill: "#fff"},
        pathes = {},
        nmhldr = $("#name")[0],
        nmhldr2 = $("#name2")[0],
        lgnd = $("#legend")[0],
        usrnm = $("#username")[0],
        lgnd2 = $("#legend2")[0],
        usrnm2 = $("#username2")[0],
        plchldr = $("#placeholder")[0];
	skills = $("#skills")[0];

	// INITIALIZE KEY LIST
	for (var i in json.authors) {
	    skills.innerHTML = skills.innerHTML + "<li class='skill' style='background-color:" + json.authors[i].a + "'><span>" + json.authors[i].n + "</span></li>";
	}
	//

    function getClr(color){
	switch(color){
	  case 0: return "#FFDE00"; break;
	  case 1: return "#FFD200"; break;
	  case 2: return "#FFC000"; break;
	  case 3: return "#FF9C00"; break;
	  case 4: return "#FF8400"; break;
	  case 5: return "#FF5400"; break;
	  case 6: return "#FF5400"; break;
	}
    }

    function finishes() {
        for (var i in json.authors) {
            var start, end;
            for (var j = json.buckets.length - 1; j >= 0; j--) {
                var isin = false;
                for (var k = 0, kk = json.buckets[j].i.length; k < kk; k++) {
                    isin = isin || (json.buckets[j].i[k][0] == i);
                }
                if (isin) {
                    end = j;
                    break;
                }
            }
            for (var j = 0, jj = json.buckets.length; j < jj; j++) {
                var isin = false;
                for (var k = 0, kk = json.buckets[j].i.length; k < kk; k++) {
                    isin = isin || (json.buckets[j].i[k][0] == i);
                };
                if (isin) {
                    start = j;
                    break;
                }
            }
            for (var j = start, jj = end; j < jj; j++) {
                var isin = false;
                for (var k = 0, kk = json.buckets[j].i.length; k < kk; k++) {
                    isin = isin || (json.buckets[j].i[k][0] == i);
                }
                if (!isin) {
                    json.buckets[j].i.push([i, 0]);
                }
            }
        }
    }
    function block() {
        var p, h;
        finishes();
	//following for block sets up the main blocks, not the joins
        for (var j = 0, jj = json.buckets.length; j < jj; j++) {
            var users = json.buckets[j].i;
            h = 0;
            for (var i = 0, ii = users.length; i < ii; i++) {
                p = pathes[users[i][0]];
                if (!p) {
                    p = pathes[users[i][0]] = {f:[], b:[]};
                }
                p.f.push([x, h, users[i][1]]); //x is the start of the top line, higher =more right, h is the width - higher = thinner
                //p.b.unshift([x, h = h + 10 + Math.max(Math.round(Math.log(users[i][1]) * 7), 1)]); // x is the bottom start, higher = more right, h is the width, higher = thicker
                p.b.unshift([x, h = h +5 + Math.max(Math.round(users[i][1]), 1)]); // Taken out the log as I'm maxing at 100 (ie percent) and dont want log scaling
		h += 0; // amount of blackspace between each element
            }

	    var dtext = json.buckets[j].d // sets labels for the x axis
	    r.text(x + 25, 135, dtext).attr({"font": '12px "Arial"', stroke: "none", fill: "#aaa"}); //Bottom labels 
            x += 80; // Sets width of blocks
        }
        var c = 0;
	var zz = 0; // colour cycle
        for (var i in pathes) {
            labels[i] = r.set();
            var clr = getClr(zz);//Raphael.getColor(); //set color of fills, can also be a hex value and I assume rgb but RGBA??
            zz = zz+1;//added
	    pathes[i].p = r.path().attr({fill: clr, stroke: "#fff"});
            var path = "M".concat(pathes[i].f[0][0], ",", pathes[i].f[0][1], "L", pathes[i].f[0][0] + 50, ",", pathes[i].f[0][1]);
            var th = Math.round(pathes[i].f[0][1] + (pathes[i].b[pathes[i].b.length - 1][1] - pathes[i].f[0][1]) / 2 + 3); // label positioning for start
            labels[i].push(r.text(pathes[i].f[0][0] + 25, th, pathes[i].f[0][2]).attr(textattr));
            var X = pathes[i].f[0][0] + 50,
                Y = pathes[i].f[0][1];
            for (var j = 1, jj = pathes[i].f.length; j < jj; j++) {
                path = path.concat("C", X + 20, ",", Y, ",");//x+20 adds curves to top right corner
                X = pathes[i].f[j][0];
                Y = pathes[i].f[j][1];
                path = path.concat(X - 10, ",", Y, ",", X, ",", Y, "L", X += 50, ",", Y); //x-20 curves the connectors
                th = Math.round(Y + (pathes[i].b[pathes[i].b.length - 1 - j][1] - Y) / 2 + 3); // label positioning inside
                if (th - 9 > Y) {
                    labels[i].push(r.text(X - 25, th, pathes[i].f[j][2]).attr(textattr));
                }
            }
            path = path.concat("L", pathes[i].b[0][0] + 50, ",", pathes[i].b[0][1], ",", pathes[i].b[0][0], ",", pathes[i].b[0][1]);
            for (var j = 1, jj = pathes[i].b.length; j < jj; j++) {
                path = path.concat("C", pathes[i].b[j][0] + 70, ",", pathes[i].b[j - 1][1], ",", pathes[i].b[j][0] + 70, ",", pathes[i].b[j][1], ",", pathes[i].b[j][0] + 50, ",", pathes[i].b[j][1], "L", pathes[i].b[j][0], ",", pathes[i].b[j][1]);
            }
            pathes[i].p.attr({path: path + "z"});
            labels[i].hide();
            var current = null;
            (function (i) {
                pathes[i].p.mouseover(function () {
                    if (current != null) {
                        labels[current].hide();
                    }
                    current = i;
                    labels[i].show();
                    pathes[i].p.toFront();
                    labels[i].toFront();
		    // INSERT BOLD KEY CODE HERE
		    skills.innerHTML="";
		    for (var xx in json.authors) {
			if(json.authors[i].n == json.authors[xx].n){
			  skills.innerHTML = skills.innerHTML + "<li class='skill' style='background-color:" + json.authors[xx].a + "'><span class='b'>" + json.authors[xx].n + "</span></li>";
			}
			else{
			  skills.innerHTML = skills.innerHTML + "<li class='skill' style='background-color:" + json.authors[xx].a + "'><span>" + json.authors[xx].n + "</span></li>";
			}
		     // END INSERT
		    }
                    //usrnm2.innerHTML = json.authors[i].n + " <em>(" + json.authors[i].c + ")</em>";
                    //lgnd2.style.backgroundColor = pathes[i].p.attr("fill");
                    //nmhldr2.className = "";
                    //plchldr.className = "hidden";
                });
            })(i);
        }
	
	
    }
    if (json.error) {
        alert("Project not found. Try again.");
    } else {
        block();
    }
};
$(function () {
    process(json);
});