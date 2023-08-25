import * as placeRepository from '../../data/culture/place.js';
// 전체
export async function getPlaces(req, res) {
    const purpose = req.query.purpose;
    const input = req.query.input;
    let data;

    if (purpose && input) {
        switch (purpose) {
            case 'guname':
                data = await placeRepository.getSearchByAddr(input);
                break;

            case 'title':
                data = await placeRepository.getSearchByTitle(input);
                break;
            case 'program':
                data = await placeRepository.getSearchByDesc(input);
                break;

            default:
                break;
        }
    } else {
        data = await placeRepository.getAll();
    }

    res.status(200).json(data);
}
// 개별
export async function getPlace(req, res, next) {
    const place_NUM = req.params.place_NUM;
    const culture = await placeRepository.getByPK(place_NUM);
    if (culture) {
        res.status(200).json(culture);
    } else {
        res.status(404).json({ message: `place_NUM(${place_NUM}) not found` });
    }
}
// 제목
export async function getPlaceByFac_name(req, res, next) {
    const fac_name = req.params.fac_name;
    const culture = await placeRepository.getAllByFac_name(fac_name);
    if (culture) {
        res.status(200).json(culture);
    } else {
        res.status(404).json({ message: `place_NUM(${place_NUM}) not found` });
    }
}
// 주소
export async function getPlaceByAddr(req, res, next) {
    const addr = req.params.addr;
    const culture = await placeRepository.getAllByLocation(addr);
    if (culture) {
        res.status(200).json(culture);
    } else {
        res.status(404).json({ message: `place_addr(${place_NUM}) not found` });
    }
}
// 생성
export async function CreatePlace(req, res, next) {
    const { AIRPORT } = req.body;
    console.log(AIRPORT);
    const culture = await placeRepository.create(AIRPORT);
    console.log(culture);
    res.status(201).json(culture);
}
// 수정
export async function UpdatePlace(req, res, next) {
    const place_NUM = req.params.place_NUM;
    const { AIRPORT } = req.body;
    const culture = await placeRepository.getByPK(place_NUM);
    // update 와 delete 에 특정토큰만 접근가능하게 만들기
    if (!culture) {
        res.status(404).json({ message: `place_NUM(${place_NUM})not found` });
    }
    const updated = await placeRepository.update(place_NUM, AIRPORT);
    res.status(200).json(updated);
}
// 삭제
export async function deletePlace(req, res, next) {
    const place_NUM = req.params.place_NUM;
    const culture = await placeRepository.getByPK(place_NUM);
    if (!culture) {
        res.status(404).json({ message: `place_NUM(${place_NUM}) not found` });
    }
    await placeRepository.remove(place_NUM);
    res.sendStatus(204);
}