import SQ, { Sequelize } from 'sequelize';
import { sequelize } from '../../db/database.js';

const DataTypes = SQ.DataTypes;

export const culture_place = sequelize.define(
    'culture_place',
    {
        place_NUM: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },
        NUM: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        SUBJCODE: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        FAC_NAME: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        ADDR: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        X_COORD: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        Y_COORD: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        PHNE: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        FAX: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        HOMEPAGE: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        OPENHOUR: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        ENTR_FEE: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        CLOSEDAY: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        OPEN_DAY: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        SEAT_CNT: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        MAIN_IMG: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        ETC_DESC: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        FAC_DESC: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        ENTRFREE: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        SUBWAY: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        BUSSTOP: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        YELLOW: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        GREEN: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        BLUE: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        RED: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        AIRPORT: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
    },
    { timestamps: false }
);
await sequelize.sync();
// 수정
const ORDER_DESC = {
    order: [['place_NUM', 'DESC']],
};
export async function getAll() {
    return culture_place.findAll({ ...ORDER_DESC });
}

export async function getSearchByAddr(input) {
    return culture_place.findAll({
        ...ORDER_DESC,
        where: {
            addr: {
                [Sequelize.Op.like]: `%${input}%`
            }
        }
    })
}
export async function getSearchByTitle(input) {
    return culture_place.findAll({
        ...ORDER_DESC,
        where: {
            fac_name: {
                [Sequelize.Op.like]: `%${input}%`
            }
        }
    })
}
export async function getSearchByDesc(input) {
    return culture_place.findAll({
        ...ORDER_DESC,
        where: {
            FAC_DESC: {
                [Sequelize.Op.like]: `%${input}%`
            }
        }
    })
}

export async function getAllByFac_name(fac_name) {
    return culture_place.findAll({
        ...ORDER_DESC,
        where: {
            fac_name,
        },
    });
}
export async function getAllByNum(NUM) {
    return culture_place.findAll({
        ...ORDER_DESC,
        where: {
            NUM,
        },
    });
}
export async function getAllByCategory(subjcode) {
    return culture_place.findAll({
        ...ORDER_DESC,
        where: {
            subjcode,
        },
    });
}
export async function getAllByTitle(fac_name) {
    return culture_place.findAll({
        ...ORDER_DESC,
        where: {
            fac_name,
        },
    });
}
// 바꿀려면 변수 값만 수정하면 됩니다
export async function getByPK(place_NUM) {
    return culture_place.findByPk(place_NUM);
}
// 변수 값만 수정하면 됩니다
export async function create(AIRPORT) {
    return culture_place.create({ AIRPORT }).then((data) => {
        return data;
    });
}
// 찾는 방법 : place_NUM , 바꿀 내용 : AIRPORT -> 변수 값만 수정하면 됩니다
export async function update(place_NUM, AIRPORT) {
    return culture_place.findByPk(place_NUM).then((data) => {
        data.AIRPORT = AIRPORT;
        return data.save();
    });
}
// 수정
export async function remove(place_NUM) {
    return culture_place.findByPk(place_NUM).then((data) => {
        data.destroy();
    });
}












