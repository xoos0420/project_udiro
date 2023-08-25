import * as festaRepository from '../../data/culture/festa.js';

// 전체
//export async function getFestas(req, res) {
//  const username = req.query.username;
//  const data = await (username
//    ? festaRepository.getAll()(username)
//    : festaRepository.getAll());
//  res.status(200).json(data);
//}

export async function getFestas(req, res) {
    const data = await getAll();
    res.status(200).json(data);
}

// 개별
export async function getFesta(req, res, next) {
    const festa_NUM = req.params.festa_NUM;
    const culture = await festaRepository.getByPK(festa_NUM);
    if (culture) {
        res.status(200).json(culture);
    } else {
        res.status(404).json({ message: `festa_NUM(${festa_NUM}) not found` });
    }
}

export async function getFestaTitle(req, res, next) {
    const title = req.params.title;
    const culture = await festaRepository.getAllByTitle(title);
    if (culture) {
        res.status(200).json(culture);
    } else {
        res.status(404).json({ message: `festa_Title(${title}) not found` });
    }
}

// 생성
export async function CreateFesta(req, res, next) {
    const { CODENAME } = req.body;
    console.log(CODENAME);
    const culture = await festaRepository.create(CODENAME);
    console.log(culture);
    res.status(201).json(culture);
}

// 수정
export async function updateFesta(req, res, next) {
    const festa_NUM = req.params.festa_NUM;
    const { CODENAME } = req.body;
    const culture = await festaRepository.getByPK(festa_NUM);
    // update 와 delete 에 특정토큰만 접근가능하게 만들기
    if (!culture) {
        res.status(404).json({ message: `festa_NUM(${festa_NUM})not found` });
    }
    const updated = await festaRepository.update(festa_NUM, CODENAME);
    res.status(200).json(updated);
}

// 삭제
export async function deleteFesta(req, res, next) {
    const festa_NUM = req.params.festa_NUM;
    const culture = await festaRepository.getByPK(festa_NUM);
    if (!culture) {
        res.status(404).json({ message: `festa_NUM(${festa_NUM}) not found` });
    }
    await festaRepository.remove(festa_NUM);
    res.sendStatus(204);
}
