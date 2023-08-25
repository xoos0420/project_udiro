import * as placeRepository from '../data/place.js';

// 생성
export async function Createplace(req, res, next) {
  const { title, addr, guname, date, use_trgt, codename, main_img, org_link } =
    req.body;

  const festa = await festaRepository.create({
    TITLE: title,
    PLACE: addr,
    GUNAME: guname,
    DATE: date,
    USE_TRGT: use_trgt,
    CODENAME: codename,
    MAIN_IMG: main_img,
    ORG_LINK: org_link,
  });
  res.status(201).json(festa);
}

// 수정
export async function updateFesta(req, res, next) {
  const festa_NUM = req.params.festa_NUM;
  const { CODENAME } = req.body;
  const culture = await festaRepository.getByPK(festa_NUM);
  // update 와 delete 에 특정토큰만 접근가능하게 만들기
  if (!culture) {
    res
      .status(404)
      .json({ message: `update : festa_NUM(${festa_NUM})not found` });
  }
  const updated = await festaRepository.update(festa_NUM, CODENAME);
  res.status(200).json(updated);
}

// 삭제
export async function deletePlace(req, res, next) {
  const place_NUM = req.params.place_NUM;
  const culture = await placeRepository.getByPK(place_NUM);
  if (!culture) {
    res
      .status(404)
      .json({ message: `delete : place_NUM(${place_NUM}) not found` });
  }
  await placeRepository.remove(place_NUM);
  res.sendStatus(204);
}
