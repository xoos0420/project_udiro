function fetchDataPlace() {
  fetch(
    'https://port-0-udiroserver-7e6o2cli3ac97a.sel4.cloudtype.app/culture/place',
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  )
    .then((response) => response.json())
    .then((data) => {
      for (let i = 0; i < 10; i++) {
        mkbox(data[i], i);
      }
    })
    .catch((error) => {
      console.error('ERROR', error);
    });
}

function mkbox(data, index) {
  const modalId = `bd-example-modal-lg-${index}`;
  const tbody = document.querySelector('#mktbody');
  tbody.innerHTML += `<td class="table-plus">
			<div class="name-avatar d-flex align-items-center">
				<div class="txt" style="text-align:center;">
					<div class="weight-600">${data.place_NUM}</div>
				</div>
			</div>
		</td>
		<td><img src="${data.MAIN_IMG}" style="width:60px; height:60px;"></td>
		<td>${data.FAC_NAME}</td>
		<td>
			<div class="table-actions">
				<a href="#" class="btn-block" data-toggle="modal" data-target="#${modalId}"
					type="button">
					<i class="icon-copy dw dw-edit2"></i>
				</a>
				<div class="modal fade bs-example-modal-lg" id="${modalId}" tabindex="-1"
					role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
					<div class="modal-dialog modal-lg modal-dialog-centered">
						<div class="modal-content">
							<div class="modal-header">
								<h4 class="modal-title" id="myLargeModalLabel">
									장소 정보
								</h4>
								<button type="button" class="close" data-dismiss="modal"
									aria-hidden="true">
									×
								</button>
							</div>
							<div class="modal-body">
								<table class="data-table table nowrap reverseTable">
									<thead>
										<tr>
											<td>번호</td>
											<td>${data.place_NUM}</td>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>이미지</td>
											<td><img src="${data.MAIN_IMG}" style="width:60px; height:60px;"></td>
										</tr>
										<tr>
											<td>이름</td>
											<td>${data.FAC_NAME}</td>
										</tr>
										<tr>
											<td>주소</td>
											<td>${data.ADDR}</td>
										</tr>
										<tr>
											<td>요금</td>
											<td>${data.ENTR_FEE}</td>
										</tr>
										<tr>
											<td>문의</td>
											<td>${data.PHNE}</td>
										</tr>
										<tr>
											<td>휴관일</td>
											<td>${data.CLOSEDAY}</td>
										</tr>
										<tr>
											<td>종류</td>
											<td>${data.SUBJCODE}</td>
										</tr>
										<tr>
											<td>홈페이지</td>
											<td style="font-size:9px">
												${data.HOMEPAGE}
											</td>
										</tr>
									</tbody>
								</table>
							</div>
							<div class="modal-footer">
								<button type="button" class="btn btn-secondary" data-dismiss="modal">
									Close
								</button>
								<button
								type="button"
								class="btn btn-secondary"
								style="background-color: red; border: 1px solid red;"
								data-dismiss="modal"
								onclick="showConfirmation(${data.place_NUM})"
								>삭제
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</td>`;
}

fetchDataPlace();

async function deletePlace(place_NUM) {
  await fetch(`https://port-0-udiro-admin-server-7xwyjq992llikwjj6o.sel4.cloudtype.app/place/${place_NUM}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(function (response) {
      if (response.ok) {
        response.json().then(function (data) {
          console.log(data);
          alert(data);
          window.location.reload();
        });
      } else {
        alert('place 삭제 실패!');
      }
    })
    .catch(function (error) {
      console.error(error);
      alert('place! 삭제 실패!');
    });
}
