// JavaScript Document
var gmap = new google.maps.LatLng(10.790926,106.682602,17);
var marker;
function initialize()
{
    var mapProp = {
         center:new google.maps.LatLng(10.790926,106.682602,17),
         zoom:16,
        mapTypeId:google.maps.MapTypeId.ROADMAP
    };
 
    var map=new google.maps.Map(document.getElementById("googleMap")
    ,mapProp);
 
  var styles = [
    {
      featureType: 'road.arterial',
      elementType: 'all',
      stylers: [
        { hue: '#fff' },
        { saturation: 100 },
        { lightness: -48 },
        { visibility: 'on' }
      ]
    },{
      featureType: 'road',
      elementType: 'all',
      stylers: [
 
      ]
    },
    {
        featureType: 'water',
        elementType: 'geometry.fill',
        stylers: [
            { color: '#adc9b8' }
        ]
    },{
        featureType: 'landscape.natural',
        elementType: 'all',
        stylers: [
            { hue: '#809f80' },
            { lightness: -35 }
        ]
    }
  ];
 
  var styledMapType = new google.maps.StyledMapType(styles);
  map.mapTypes.set('Styled', styledMapType);
 
  marker = new google.maps.Marker({
    map:map,
    draggable:true,
    animation: google.maps.Animation.DROP,
    position: gmap
  });
  google.maps.event.addListener(marker, 'click', toggleBounce);
}
 
function toggleBounce() {
 
  if (marker.getAnimation() !== null) {
    marker.setAnimation(null);
  } else {
    marker.setAnimation(google.maps.Animation.BOUNCE);
  }
}
 
google.maps.event.addDomListener(window, 'load', initialize);
//js2

function form1(){
		var ten = document.forms[0].tendn.value;
		if (ten == "") {
			alert("Không để trống họ tên");
			return false;
	}
		var que = document.forms[0].quequan.value;
		if (que == "") {
			alert("Không để trống Quê Quán");
			return false;
	}
		var c = document.forms[0].sdt.value;
		if(c =="" || c == null || c == " "){
			alert("Hãy điền số điện thoại đầy đủ\nKhông để trống");
			return false;
		}else{
			if(isNaN(c)){
				alert("Số điện thoại phải là SỐ");
				return false;
				}else{
					if(c.length<=8 || c.length>=11){
						alert("Số điện thoại phải từ 9 hoặc 10 số thôi");
						return false;
						}else{
				}
	}		
}
	var e = document.forms[0].math.value;
	if(e ==""){
		alert("Không được để trống phép toán");
			return false;
		}else{
			if(isNaN(e)){
				alert("Đáp án là SỐ");
				return false;
				}else{
					if(e.length>=2){
						alert("Đáp án chỉ có 1 chữ số");
						return false;
						}else{
							if(e !=3){
								alert("Kết Quả SAI");
								alert("Hãy nhập lại");
								return false;
								}else{
									alert("Cảm ơn bạn đã đăng ký")
									alert("Đăng ký thành công");
									return true;
								}
						}
				}
		}
}
changeImage('1');
function changeImage(oValue){
		var car = document.getElementById("imgCar");
		car.src = "images/" + oValue + ".jpg" ;
		
		var oCar = new Car(noidung);
		var str = oCar.thongTin();
		car.title = str;
	}

