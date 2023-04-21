import {
  AllowNull,
  AutoIncrement,
  Column,
  DataType,
  ForeignKey,
  Index,
  Length,
  Model,
  PrimaryKey,
  Table,
  Unique,
} from 'sequelize-typescript';
import { UserModel } from '../user';

@Table({
  timestamps: true,
  paranoid: true,
  tableName: 'threads',
})
export class ThreadModel extends Model {
  @AutoIncrement
  @PrimaryKey
  @Column(DataType.INTEGER)
  override id!: number;

  @AllowNull(false)
  @Unique
  @Index
  @Column(DataType.STRING)
  @Length({ max: 255, min: 1 })
  title!: string;

  @AllowNull(true)
  @Unique
  @Column(DataType.STRING)
  description!: string;

  @ForeignKey(() => UserModel)
  @AllowNull(false)
  @Column({
    type: DataType.INTEGER,
    field: 'owner_id',
  })
  ownerId!: string;
}
