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
import { ThreadModel } from '../thread';

@Table({
  timestamps: true,
  paranoid: true,
  tableName: 'posts',
})
export class PostModel extends Model {
  @AutoIncrement
  @PrimaryKey
  @Column(DataType.INTEGER)
  override id!: number;

  @AllowNull(true)
  @Unique
  @Column(DataType.STRING)
  emotions!: string;

  @AllowNull(false)
  @Unique
  @Column(DataType.STRING)
  text!: string;

  @Index
  @ForeignKey(() => ThreadModel)
  @AllowNull(false)
  @Column({
    type: DataType.INTEGER,
    field: 'thread_id',
  })
  threadId!: string;

  @ForeignKey(() => UserModel)
  @AllowNull(false)
  @Column({
    type: DataType.INTEGER,
    field: 'owner_id',
  })
  ownerId!: string;

  @ForeignKey(() => PostModel)
  @AllowNull(true)
  @Column({
    type: DataType.INTEGER,
    field: 'parent_id',
  })
  parentId!: string;
}
