jQuery(document).ready(function($) {
	var oCart = document.getElementById('cart');
	var oUserInfo = document.getElementById('profile');
	var cartContent =	document.getElementById('cartContent');
	var profileContent =	document.getElementById('profileContent');
	var timer1 = timer2 = null;

	function Show1() {
		cartContent.style.display = "block";
		clearTimeout(timer1)
	};

	function Hide1() {
		timer1 = setTimeout(function () {
			cartContent.style.display = "none";
		}, 100)
	};

	oCart.onmouseover = cartContent.onmouseover = Show1;
	oCart.onmouseout = cartContent.onmouseout = Hide1;

	function Show2() {
		profileContent.style.display = "block";
		clearTimeout(timer2)
	};

	function Hide2() {
		timer2 = setTimeout(function () {
			profileContent.style.display = "none";
		}, 100)
	};

	oUserInfo.onmouseover = profileContent.onmouseover = Show2;
	oUserInfo.onmouseout = profileContent.onmouseout = Hide2;

	var oContainer = document.getElementById('slider-container');
	var oList = oContainer.getElementsByTagName('div')[0];
	var oPaginations = document.getElementById('pagination').getElementsByTagName('span');
	var oPre = document.getElementById('pre');
	var oNext = document.getElementById('next');
	var index = 1;

	function active() {
		for (var i = 0; i < oPaginations.length; i++) {
			oPaginations[i].className = "";
		}
		oPaginations[index-1].className = "active";
	}

	function move(offset) {
		var newLeft = parseInt(oList.style.left) + offset;
		oList.style.left = newLeft + "px";
		if (newLeft > -900) {
			oList.style.left = -4500 + "px";
		};
		if (newLeft < -4500) {
			oList.style.left = -900 + "px"
		};
	};

	oNext.onclick = function () {
		if (index == 5) {
			index = 1;
		} else {
			index += 1;
		};

		active();
		move(-900);
	};

	oPre.onclick = function () {
		if (index == 1) {
			index = 5
		} else {
			index -= 1;
		};
		
		active();
		move(900);
	}
});

