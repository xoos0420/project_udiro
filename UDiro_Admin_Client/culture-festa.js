function fetchDataFesta() {
  fetch(
    'https://port-0-udiroserver-7e6o2cli3ac97a.sel4.cloudtype.app/culture/festa',
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
				<div class="txt">
					<div class="weight-600" style="margin-left: 100px">${data.festa_NUM}</div>
				</div>
			</div>
		</td>
		<td><img src="${data.MAIN_IMG}" style="width:60px; height:60px;"></td>
		<td>${data.TITLE}</td>
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
									행사 정보
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
											<td>${data.festa_NUM}</td>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>제목</td>
											<td id="title${index}">${data.TITLE}</td>
										</tr>
										<tr>
											<td>주소</td>
											<td id="PLACE${index}">${data.PLACE}</td>
										</tr>
										<tr>
											<td>위치</td>
											<td id="GUNAME${index}">${data.GUNAME}</td>
										</tr>
										<tr>
											<td>기간</td>
											<td id="DATE${index}">${data.DATE}</td>
										</tr>
										<tr>
											<td>제한</td>
											<td id="USE_TRGT${index}">${data.USE_TRGT}</td>
										</tr>
										<tr>
											<td>종류</td>
											<td id="CODENAME${index}">${data.CODENAME}</td>
										</tr>
										<tr>
											<td>이미지</td>
											<td><img src="${data.MAIN_IMG}" id="image${index}" style="width:60px; height:60px;"></td>
										</tr>
										<tr>
											<td>홈페이지</td>
											<td id="ORG_LINK${index}" style="font-size:9px">
												${data.ORG_LINK}
											</td>
										</tr>
									</tbody>
								</table>
							</div>
							<div class="modal-footer">
							<button
							type="button"
							class="btn btn-secondary"
							style="background-color: red; position:relative; right:550px;"
							data-dismiss="modal"
							onclick="showConfirmation(${data.festa_NUM})"
							>삭제
							</button>
							<button type="button" class="btn btn-primary" style="visibility : hidden" onclick='updateFesta(${data.festa_NUM})'>
							수정
							</button>
								<button type="button" class="btn btn-secondary"
									data-dismiss="modal">
									Close
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</td>`;
}

fetchDataFesta();

async function deleteFesta(festa_NUM) {
  await fetch(`https://port-0-udiro-admin-server-7xwyjq992llikwjj6o.sel4.cloudtype.app/festa/${festa_NUM}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(function (response) {
      if (response.ok) {
        alert("festa 삭제 성공!");
        window.location.reload();
      } else {
        alert('festa 삭제 실패!');
      }
    })
    .catch(function (error) {
      console.error(error);
      alert('festa! 삭제 실패!');
    });
}

/*
  async function updateFesta(id) {
  const festa_idx = id.querySelector('.user_idx').innerText;
  const user_name = id.querySelector('.user_name').innerText;
  const user_id = id.querySelector('.user_id').innerText;
  const user_pw = id.querySelector('.user_pw').innerText;
  const user_email = id.querySelector('.user_email').innerText;
  const user_phone = id.querySelector('.user_phone').innerText;

  console.log(user_idx, user_name, user_id, user_pw, user_email, user_phone);

  await fetch(
    `https://port-0-udiroserver-7e6o2cli3ac97a.sel4.cloudtype.app/culture/festa/${festa_NUM}`,
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user_name,
        user_id,
        user_pw,
        user_email,
        user_phone,
      }),
    }
  )
    .then(function (response) {
      if (response.ok) {
        response.json().then(function (data) {
          alert(data);
          window.location.reload();
        });
      } else {
        alert('회원 수정 실패!'); // 로그인 실패 시 알림 표시
      }
    })
    .catch(function (error) {
      console.error(error);
      alert('회원 수정 실패!'); // 로그인 요청 실패 시 알림 표시
    });
}
*/

async function createFesta() {
  const title = document.getElementById('add_TITLE').value;
  const addr = document.getElementById('add_ADDR').value;
  const guname = document.getElementById('add_GUNAME').value;
  const date = document.getElementById('add_DATE').value;
  const use_trgt = document.getElementById('add_USE_TRGT').value;
  const codename = document.getElementById('add_CODENAME').value;
  const main_img = document.getElementById('add_MAIN_IMG').value;
  const org_link = document.getElementById('add_ORG_LINK').value;

  await fetch('https://port-0-udiro-admin-server-7xwyjq992llikwjj6o.sel4.cloudtype.app/festa/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      title,
      addr,
      guname,
      date,
      use_trgt,
      codename,
      main_img,
      org_link,
    }),
  })
    .then(function (response) {
      if (response.ok) {
        response.json().then(function (data) {
          alert("festa 추가 성공!");
          window.location.reload();
        });
      } else {
        alert('festa 추가 실패!');
      }
    })
    .catch(function (error) {
      console.error(error);
      alert('festa! 추가 실패!');
    });
}
