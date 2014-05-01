window.onload = function () {

	//MHS
    var r = Raphael("emp-holder-mhs");
    r.g.txtattr.font = "9px 'Fontin Sans', Fontin-Sans, sans-serif";
    
    var pie = r.g.piechart(40, 40, 30, [30, 40, 30, 0], {legend: ["Bus Intelligence", "Bus Analysis","Project Management","Data Warehousing"], legendpos: "east"});
    pie.hover(function () {
	this.sector.stop();
	this.sector.scale(1.1, 1.1, this.cx, this.cy);
	if (this.label) {
	    this.label[0].stop();
	    this.label[0].scale(1.5);
	    this.label[1].attr({"font-weight": 800});
	}
    }, function () {
	this.sector.animate({scale: [1, 1, this.cx, this.cy]}, 500, "bounce");
	if (this.label) {
	    this.label[0].animate({scale: 1}, 500, "bounce");
	    this.label[1].attr({"font-weight": 400});
	}
    });
    
	//CAPIO
    var r = Raphael("emp-holder-capio");
    r.g.txtattr.font = "9px 'Fontin Sans', Fontin-Sans, sans-serif";
    
    var pie = r.g.piechart(40, 40, 30, [30, 40, 30, 0], {legend: ["Bus Intelligence", "Bus Analysis","Project Management","Data Warehousing"], legendpos: "east"});
    pie.hover(function () {
	this.sector.stop();
	this.sector.scale(1.1, 1.1, this.cx, this.cy);
	if (this.label) {
	    this.label[0].stop();
	    this.label[0].scale(1.5);
	    this.label[1].attr({"font-weight": 800});
	}
    }, function () {
	this.sector.animate({scale: [1, 1, this.cx, this.cy]}, 500, "bounce");
	if (this.label) {
	    this.label[0].animate({scale: 1}, 500, "bounce");
	    this.label[1].attr({"font-weight": 400});
	}
    });
	
    //ROCHE
    var r = Raphael("emp-holder-roche");
    r.g.txtattr.font = "9px 'Fontin Sans', Fontin-Sans, sans-serif";
    
    var pie = r.g.piechart(40, 40, 30, [40, 30, 20, 10], {legend: ["Bus Intelligence", "Bus Analysis","Project Management","Data Warehousing"], legendpos: "east"});
    pie.hover(function () {
	this.sector.stop();
	this.sector.scale(1.1, 1.1, this.cx, this.cy);
	if (this.label) {
	    this.label[0].stop();
	    this.label[0].scale(1.5);
	    this.label[1].attr({"font-weight": 800});
	}
    }, function () {
	this.sector.animate({scale: [1, 1, this.cx, this.cy]}, 500, "bounce");
	if (this.label) {
	    this.label[0].animate({scale: 1}, 500, "bounce");
	    this.label[1].attr({"font-weight": 400});
	}
    });


    //CASE
    var r = Raphael("emp-holder-case");
    r.g.txtattr.font = "9px 'Fontin Sans', Fontin-Sans, sans-serif";
    
    var pie = r.g.piechart(40, 40, 30, [50, 20, 20, 10], {legend: ["Bus Analysis", "Data Warehousing","Bus Intelligence","Development"], legendpos: "east"});
    pie.hover(function () {
	this.sector.stop();
	this.sector.scale(1.1, 1.1, this.cx, this.cy);
	if (this.label) {
	    this.label[0].stop();
	    this.label[0].scale(1.5);
	    this.label[1].attr({"font-weight": 800});
	}
    }, function () {
	this.sector.animate({scale: [1, 1, this.cx, this.cy]}, 500, "bounce");
	if (this.label) {
	    this.label[0].animate({scale: 1}, 500, "bounce");
	    this.label[1].attr({"font-weight": 400});
	}
    });

    
    //CELLIX
    var r = Raphael("emp-holder-cellix");
    r.g.txtattr.font = "9px 'Fontin Sans', Fontin-Sans, sans-serif";
    
    var pie = r.g.piechart(40, 40, 30, [70, 20, 10], {legend: ["Development", "DB Design","Systems Analysis"], legendpos: "east"});
    pie.hover(function () {
	this.sector.stop();
	this.sector.scale(1.1, 1.1, this.cx, this.cy);
	if (this.label) {
	    this.label[0].stop();
	    this.label[0].scale(1.5);
	    this.label[1].attr({"font-weight": 800});
	}
    }, function () {
	this.sector.animate({scale: [1, 1, this.cx, this.cy]}, 500, "bounce");
	if (this.label) {
	    this.label[0].animate({scale: 1}, 500, "bounce");
	    this.label[1].attr({"font-weight": 400});
	}
    });
    
};
