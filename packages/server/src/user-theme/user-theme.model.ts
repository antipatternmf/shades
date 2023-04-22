import {
  AllowNull,
  AutoIncrement,
  Column,
  DataType,
  PrimaryKey,
  Table,
  Model,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { UserModel } from '../user';
import { SiteThemeModel } from '../site-theme';

@Table({
  timestamps: true,
  paranoid: true,
  tableName: 'user_theme',
})
export class UserThemeModel extends Model {
  @AutoIncrement
  @PrimaryKey
  @Column(DataType.INTEGER)
  override id!: number;

  @Column(DataType.STRING)
  device!: string;

  @ForeignKey(() => SiteThemeModel)
  @AllowNull(false)
  @Column(DataType.INTEGER)
  themeId!: string;

  @BelongsTo(() => SiteThemeModel)
  theme?: SiteThemeModel;

  @ForeignKey(() => UserModel)
  @AllowNull(false)
  @Column({
    type: DataType.INTEGER,
    field: 'owner_id',
  })
  ownerId!: string;

  @BelongsTo(() => UserModel)
  owner?: UserModel;
}
