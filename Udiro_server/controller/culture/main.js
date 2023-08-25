import * as festaRepository from '../../data/culture/festa.js';
import * as placeRepository from '../../data/culture/place.js';

export async function getFestasandPlace(req, res) {
    const category = req.query.category;
    const purpose = req.query.purpose;
    const input = req.query.input;
    let data;
    let data1;
    let data2;
    console.log(category, purpose, input)

    if (category && purpose && input) {
        switch (category) {
            case 'all':
                switch (purpose) {
                    case 'guname':
                        data1 = await festaRepository.getSearchByguname(input);
                        data2 = await placeRepository.getSearchByAddr(input);
                        data = [data1, data2]
                        break;

                    case 'title':
                        data1 = await festaRepository.getSearchByTitle(input);
                        data2 = await placeRepository.getSearchByTitle(input);
                        data = [data1, data2]
                        break;

                    case 'program':
                        data1 = await festaRepository.getSearchByprogram(input);
                        data2 = await placeRepository.getSearchByDesc(input);
                        data = [data1, data2]
                        break;

                    default:
                        break;
                }
                break;

            case 'festa':
                switch (purpose) {
                    case 'guname':
                        data = await festaRepository.getSearchByguname(input);
                        break;

                    case 'title':
                        data = await festaRepository.getSearchByTitle(input);
                        break;

                    case 'program':
                        data = await festaRepository.getSearchByprogram(input);
                        break;

                    default:
                        break;
                }
                break;

            case 'place':
                switch (purpose) {
                    case 'guname':
                        data2 = await placeRepository.getSearchByAddr(input);
                        break;

                    case 'title':
                        data2 = await placeRepository.getSearchByTitle(input);
                        break;

                    case 'program':
                        data2 = await placeRepository.getSearchByDesc(input);
                        break;

                    default:
                        break;
                }
                break;

            default:
                break;
        }
    } else {
        data = await festaRepository.getAll();
        data2 = await placeRepository.getAll();
    }

    res.status(200).json(data);
}