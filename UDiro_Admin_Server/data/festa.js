import SQ, { Sequelize } from 'sequelize';
import { sequelize } from '../db/database.js';

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
      allowNull: false,
    },
    DATE: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    PLACE: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: null,
    },
    ORG_NAME: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: null,
    },
    USE_TRGT: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    USE_FEE: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: null,
    },
    PLAYER: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: null,
    },
    PROGRAM: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: null,
    },
    ETC_DESC: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: null,
    },
    ORG_LINK: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    MAIN_IMG: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    RGSTDATE: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: null,
    },
    TICKET: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: null,
    },
    STRTDATE: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: null,
    },
    END_DATE: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: null,
    },
    THEMECODE: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: null,
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
        [Sequelize.Op.like]: `%${input}%`,
      },
    },
  });
}
export async function getSearchByTitle(input) {
  return culture_festa.findAll({
    ...ORDER_DESC,
    where: {
      title: {
        [Sequelize.Op.like]: `%${input}%`,
      },
    },
  });
}
export async function getSearchByprogram(input) {
  return culture_festa.findAll({
    ...ORDER_DESC,
    where: {
      program: {
        [Sequelize.Op.like]: `%${input}%`,
      },
    },
  });
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
export async function create(festa) {
  return culture_festa.create(festa).then((data) => {
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
