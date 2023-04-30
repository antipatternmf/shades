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

@Table({
  timestamps: true,
  paranoid: true,
  tableName: 'scores',
})
export class ScoresModel extends Model {
  @AutoIncrement
  @PrimaryKey
  @Column(DataType.INTEGER)
  override id!: number;

  @AllowNull(false)
  @Column(DataType.INTEGER)
  level!: number;

  @AllowNull(false)
  @Column(DataType.INTEGER)
  score!: number;

  @ForeignKey(() => UserModel)
  @AllowNull(false)
  @Column({
    type: DataType.INTEGER,
    field: 'owner_id',
  })
  ownerId!: number;

  @BelongsTo(() => UserModel)
  owner?: UserModel;

  sum?: number;
}
