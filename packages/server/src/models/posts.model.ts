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
import { UserModel } from './user.model';
import { ThreadsModel } from './threads.model';

@Table({
  timestamps: false,
  paranoid: true,
  tableName: 'posts',
})
export class PostsModel extends Model<PostsModel> {
  @AutoIncrement
  @PrimaryKey
  @Column(DataType.INTEGER)
  override id!: number;

  @AllowNull(false)
  @Unique
  @Column(DataType.STRING)
  text!: string;

  @Index
  @ForeignKey(() => ThreadsModel)
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
}
