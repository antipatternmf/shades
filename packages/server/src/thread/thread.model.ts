import {
  AllowNull,
  AutoIncrement,
  Column,
  DataType,
  ForeignKey,
  Index,
  Model,
  PrimaryKey,
  Table,
  Unique,
} from 'sequelize-typescript';
import { UserModel } from '../user';

@Table({
  timestamps: false,
  paranoid: true,
  tableName: 'threads',
})
export class ThreadModel extends Model<ThreadModel> {
  @AutoIncrement
  @PrimaryKey
  @Column(DataType.INTEGER)
  override id!: number;

  @AllowNull(false)
  @Unique
  @Index
  @Column(DataType.STRING)
  title!: string;

  @AllowNull(false)
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
