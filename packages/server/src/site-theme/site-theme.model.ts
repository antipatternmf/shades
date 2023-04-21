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
  timestamps: true,
  paranoid: true,
  tableName: 'site_theme',
})
export class SiteThemeModel extends Model {
  @AutoIncrement
  @PrimaryKey
  @Column(DataType.INTEGER)
  override id?: number;

  @Index
  @AllowNull(false)
  @Unique
  @Column(DataType.STRING)
  theme?: string;

  @AllowNull(true)
  @Column(DataType.STRING)
  description?: string;
}
