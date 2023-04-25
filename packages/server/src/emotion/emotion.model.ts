import {
  AllowNull,
  AutoIncrement,
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { UserModel } from '../user';
import { PostModel } from '../post';
import type { AddEmotionDto } from './dto';

type Creation = AddEmotionDto & { ownerId: number };

@Table({
  timestamps: true,
  paranoid: true,
  tableName: 'emotions',
})
export class EmotionModel extends Model<EmotionModel, Creation> {
  @AutoIncrement
  @PrimaryKey
  @Column(DataType.INTEGER)
  override id!: number;

  @AllowNull(true)
  @Column(DataType.STRING)
  emotion!: string;

  @ForeignKey(() => PostModel)
  @AllowNull(false)
  // @Index
  @Column({
    type: DataType.INTEGER,
    field: 'post_id',
  })
  postId!: number;

  @BelongsTo(() => PostModel)
  post?: PostModel;

  @ForeignKey(() => UserModel)
  @AllowNull(false)
  // @Index
  @Column({
    type: DataType.INTEGER,
    field: 'owner_id',
  })
  ownerId!: number;

  @BelongsTo(() => UserModel)
  owner?: UserModel;
}
