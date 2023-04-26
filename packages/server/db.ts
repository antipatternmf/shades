import type { SequelizeOptions } from 'sequelize-typescript';
import { Sequelize } from 'sequelize-typescript';
import { EmotionModel } from './src/emotion';
import { PostModel } from './src/post';
import { SiteThemeModel } from './src/site-theme';
import { ThreadModel } from './src/thread';
import { UserModel } from './src/user';
import { UserThemeModel } from './src/user-theme';

const { POSTGRES_USER, POSTGRES_PASSWORD, POSTGRES_DB, POSTGRES_PORT, POSTGRES_HOST } = process.env;
export const startBD = async (): Promise<Sequelize | null> => {
  const sequelizeOptions: SequelizeOptions = {
    host: POSTGRES_HOST,
    port: Number(POSTGRES_PORT),
    username: POSTGRES_USER,
    password: POSTGRES_PASSWORD,
    database: POSTGRES_DB,
    dialect: 'postgres',
    models: [EmotionModel, PostModel, SiteThemeModel, ThreadModel, UserModel, UserThemeModel],
  };

  try {
    const sequelize = new Sequelize(sequelizeOptions);

    console.log('DB  ➜ 🎸 Connected');
    return sequelize.sync(); // { force: isDev }
  } catch (error) {
    console.log('DB  ➜ 🐒 Error');
    console.error(error);
  }

  return null;
};
