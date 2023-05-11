import { Column, DataType, Model, Table } from 'sequelize-typescript';

import type { SaveLevelScoreDto, LevelScoreDto } from './dto';

@Table({
  timestamps: true,
  paranoid: true,
  tableName: 'level_scores',
})
export class LevelScoreModel extends Model<LevelScoreDto, SaveLevelScoreDto> {
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    unique: true,
    primaryKey: true,
    allowNull: false,
  })
  override id!: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  levelId!: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  score!: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  username!: string;
}
