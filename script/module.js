const ModuleName = 'ntb_hfck';
const ModuleDefaults = {
	touch: true, // 是否開啟左右滑動
	txtoverflow: true, // M版title超過兩行顯示...
};
const ModuleReturns = [];

class Module {
	constructor(ele, options) {
		this.ele = ele;
		this.$ele = $(ele);
		this.option = options;
	}
	init() {
		!!this.option.txtoverflow && this.txtoverflow();
		this.methods();
		return this;
	}
	methods() {
		var element = $(".ctn"),
			panel = element.find(".panel"),
			panelMax = panel.length,
			panelNext = null,
			dragState = false,
			dragStartX = 0,
			dragDate = null,
			moveNum = 0;


		function move(num) {
			if(num === 'right' && moveNum !== 0){
				moveNum += 90
				$('.ctn').animate({ left: moveNum +'%' });
			}else if(num === 'left' && moveNum > -180){
				moveNum-=90
				$('.ctn').animate({ left: moveNum +'%' });
				$('.ctn').css('margin-left','20px');
			}
			//moveNum 為要調整的 left 值
			if(moveNum === 0){
				$('.ctn').css('margin-left','0px');
			}
			panelNext = null;
		}


		if (this.option.touch) {
			panel.on("mousedown touchstart", function (e) {
				if (e.type == "touchstart") {
					e.preventDefault();
				}
				if (!dragState && panelNext == null && panelMax > 1) {
					dragStartX = e.type == "mousedown" ? e.pageX : e.originalEvent.changedTouches[0].pageX;
					dragState = true;
					dragDate = new Date();
				}retu
			});

			panel.on("mouseup touchend mouseleave", function (e) {
				
				if (dragState) {
					var passDate = new Date() - dragDate;
					var endX = (e.type == "mouseup" || e.type == "mouseleave") ? e.pageX : e.originalEvent.changedTouches[0].pageX;
					if (e.type == "touchend" && passDate > 120 && endX != dragStartX) {
						panelNext = endX > dragStartX ? 'right' : 'left';
						move(panelNext);
					}else{
						if(endX==dragStartX){
							$(this).find('a').off(); 
							window.open($(this).find('a').attr('href'))
						}
					}
				} else {
					$(this).find('a').off();
				}
				dragState = false;
			});
		}
		return this;
	}



	txtoverflow() {
		$('.panel').each(function () {
			var txt = $(this).find('.card_title').text();

			var Blength = function (txt) {
				var arr = txt.match(/[^\x00-\xff]/ig);
				return arr == null ? txt.length : txt.length + arr.length;
			}

			var txtlength = Blength(txt);

			if (txtlength > 52) {
				$(this).find('.card_title').css('display', '-webkit-box');
			}
		});
	}

};

export {
	ModuleName,
	ModuleDefaults,
	ModuleReturns,
	Module
};