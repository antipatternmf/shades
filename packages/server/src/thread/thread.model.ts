import {
  AllowNull,
  AutoIncrement,
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Index,
  Length,
  Model,
  PrimaryKey,
  Table,
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
  @Index
  @Length({ min: 1, max: 255 })
  @Column(DataType.STRING)
  title!: string;

  @AllowNull(true)
  @Column(DataType.STRING)
  description?: string;

  @AllowNull(true)
  @Column(DataType.STRING)
  cover?: string;

  @ForeignKey(() => UserModel)
  @AllowNull(false)
  @Column({
    type: DataType.INTEGER,
    field: 'owner_id',
  })
  ownerId!: number;

  @BelongsTo(() => UserModel)
  owner?: UserModel;
}
