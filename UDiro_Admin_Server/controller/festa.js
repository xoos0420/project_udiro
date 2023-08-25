import * as festaRepository from '../data/festa.js';

// 생성
export async function CreateFesta(req, res, next) {
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
export async function deleteFesta(req, res, next) {
  const festa_NUM = req.params.festa_NUM;
  const culture = await festaRepository.getByPK(festa_NUM);
  if (!culture) {
    res
      .status(404)
      .json({ message: `delete : festa_NUM(${festa_NUM}) not found` });
  }
  await festaRepository.remove(festa_NUM);

  res.sendStatus(204);
}
