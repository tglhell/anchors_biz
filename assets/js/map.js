$(function(){
	var container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
	var options = { //지도를 생성할 때 필요한 기본 옵션
		// center: new kakao.maps.LatLng(37.55410761985322, 126.91242520213594), // 구 앵커스 사무실 좌표.
		center: new kakao.maps.LatLng(37.55078965695023, 126.91867020497514), // 새 앵커스 사무실 좌표.
		level: 3 //지도의 레벨(확대, 축소 정도)
	};
	var map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
	var marker = new kakao.maps.Marker({
		position: map.getCenter() // 지도 중심좌표에 마커를 생성합니다 
	});
	marker.setMap(map); // 지도에 마커를 표시합니다
	
	$(document).on('keydown keyup', function () {
		if (event.type == 'keydown') {
			if (event.shiftKey) {
				$('#map').addClass('dim');
			}
		} else {
			$('#map').removeClass('dim');
		}
	});

	$('.btn-large-map').click(function () {
		$('#map').removeClass('dim');
	});
});