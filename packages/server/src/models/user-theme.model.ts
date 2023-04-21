import {
  AllowNull,
  AutoIncrement,
  Column,
  DataType,
  PrimaryKey,
  Table,
  Model,
  ForeignKey,
} from 'sequelize-typescript';
import { UserModel } from './user.model';
import { SiteThemeModel } from './site-theme.model';

@Table({
  timestamps: false,
  paranoid: true,
  tableName: 'user_theme',
})
export class UserThemeModel extends Model<UserThemeModel> {
  @AutoIncrement
  @PrimaryKey
  @Column(DataType.INTEGER)
  override id!: number;

  @ForeignKey(() => SiteThemeModel)
  @AllowNull(false)
  @Column(DataType.INTEGER)
  themeId!: string;

  @Column(DataType.STRING)
  device!: string;

  @ForeignKey(() => UserModel)
  @AllowNull(false)
  @Column({
    type: DataType.INTEGER,
    field: 'owner_id',
  })
  ownerId!: string;
}
