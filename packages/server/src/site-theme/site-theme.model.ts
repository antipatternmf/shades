import {
  AllowNull,
  AutoIncrement,
  Column,
  DataType,
  Index,
  Model,
  PrimaryKey,
  Table,
  Unique,
} from 'sequelize-typescript';

@Table({
  timestamps: false,
  paranoid: true,
  tableName: 'site_theme',
})
export class SiteThemeModel extends Model<SiteThemeModel> {
  @AutoIncrement
  @PrimaryKey
  @Column(DataType.INTEGER)
  override id!: number;

  @Index
  @AllowNull(false)
  @Unique
  @Column(DataType.STRING)
  theme!: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  description!: string;
}
