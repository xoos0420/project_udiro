import SQ, { Sequelize } from 'sequelize';
import { sequelize } from '../../db/database.js';

const DataTypes = SQ.DataTypes;

// 수정
export const culture_festa = sequelize.define(
    'culture_festa',
    {
        festa_NUM: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },
        CODENAME: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        GUNAME: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        TITLE: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        DATE: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        PLACE: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        ORG_NAME: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        USE_TRGT: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        USE_FEE: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        PLAYER: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        PROGRAM: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        ETC_DESC: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        ORG_LINK: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        MAIN_IMG: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        RGSTDATE: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        TICKET: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        STRTDATE: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        END_DATE: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        THEMECODE: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
    },
    {
        timestamps: false,
    }
);
await sequelize.sync();
const ORDER_DESC = {
    order: [['festa_NUM', 'DESC']],
};

export async function getAll() {
    return culture_festa.findAll({ ...ORDER_DESC });
}

export async function get(username) {
    return culture_festa.findAll({
        ...ORDER_DESC,
        where: {
            username,
        },
    });
}

export async function getSearchByguname(input) {
    return culture_festa.findAll({
        ...ORDER_DESC,
        where: {
            guname: {
                [Sequelize.Op.like]: `%${input}%`
            }
        }
    })
}
export async function getSearchByTitle(input) {
    return culture_festa.findAll({
        ...ORDER_DESC,
        where: {
            title: {
                [Sequelize.Op.like]: `%${input}%`
            }
        }
    })
}
export async function getSearchByprogram(input) {
    return culture_festa.findAll({
        ...ORDER_DESC,
        where: {
            program: {
                [Sequelize.Op.like]: `%${input}%`
            }
        }
    })
}

export async function getAllByTitle(title) {
    return culture_festa.findAll({
        ...ORDER_DESC,
        where: {
            title,
        },
    });
}

export async function getAllBy(username) {
    return culture_festa.findAll({
        ...ORDER_DESC,
        where: {
            username,
        },
    });
}

// 바꿀려면 변수 값만 수정하면 됩니다
export async function getByPK(festa_NUM) {
    return culture_festa.findByPk(festa_NUM);
}

// 변수 값만 수정하면 됩니다
export async function create(CODENAME) {
    return culture_festa.create({ CODENAME }).then((data) => {
        return data;
    });
}
// 찾는 방법 : festa_NUM , 바꿀 내용 : GUNAME -> 변수 값만 수정하면 됩니다
export async function update(festa_NUM, GUNAME) {
    return culture_festa.findByPk(festa_NUM).then((data) => {
        data.GUNAME = GUNAME;
        return data.save();
    });
}
// 수정
export async function remove(festa_NUM) {
    return culture_festa.findByPk(festa_NUM).then((data) => {
        data.destroy();
    });
}
