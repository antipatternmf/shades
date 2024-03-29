import {
  AllowNull,
  AutoIncrement,
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { UserModel } from '../user';
import { ThreadModel } from '../thread';
import { EmotionModel } from '../emotion';

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

  @AllowNull(false)
  @Column(DataType.STRING)
  text!: string;

  // @Index
  @ForeignKey(() => ThreadModel)
  @AllowNull(false)
  @Column({
    type: DataType.INTEGER,
    field: 'thread_id',
  })
  threadId!: number;

  @BelongsTo(() => ThreadModel)
  thread?: ThreadModel;

  @ForeignKey(() => UserModel)
  @AllowNull(false)
  @Column({
    type: DataType.INTEGER,
    field: 'owner_id',
  })
  ownerId!: number;

  @BelongsTo(() => UserModel)
  owner?: UserModel;

  @AllowNull(true)
  @Column({
    type: DataType.INTEGER,
    field: 'parent_id',
  })
  parentId!: number;

  @HasMany(() => EmotionModel)
  emotions?: EmotionModel[];

  countAnswers?: number;
}
