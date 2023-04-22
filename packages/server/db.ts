import type { SequelizeOptions } from 'sequelize-typescript';
import { Sequelize } from 'sequelize-typescript';
import { EmotionModel } from './src/emotion';
import { PostModel } from './src/post';
import { SiteThemeModel } from './src/site-theme';
import { ThreadModel } from './src/thread';
import { UserModel } from './src/user';
import { UserThemeModel } from './src/user-theme';

const { POSTGRES_USER, POSTGRES_PASSWORD, POSTGRES_DB, POSTGRES_PORT } = process.env;
export const startBD = async (): Promise<Sequelize | null> => {
  const sequelizeOptions: SequelizeOptions = {
    host: 'localhost',
    port: Number(POSTGRES_PORT),
    username: POSTGRES_USER,
    password: POSTGRES_PASSWORD,
    database: POSTGRES_DB,
    dialect: 'postgres',
    sync: {
      force: true,
    },
    models: [EmotionModel, PostModel, SiteThemeModel, ThreadModel, UserModel, UserThemeModel],
  };

  try {
    const sequelize = new Sequelize(sequelizeOptions);

    console.log('DB  ➜ 🎸 Connected');
    return sequelize;
  } catch (error) {
    console.log('DB  ➜ 🐒 Error');
    console.error(error);
  }

  return null;
};
