import {
  AllowNull,
  AutoIncrement,
  Column,
  DataType,
  Index,
  IsEmail,
  Model,
  PrimaryKey,
  Table,
  Unique,
} from 'sequelize-typescript';

@Table({
  timestamps: true,
  paranoid: true,
  tableName: 'users',
})
export class UserModel extends Model {
  @AutoIncrement
  @PrimaryKey
  @Column(DataType.INTEGER)
  override id!: number;

  @AllowNull(false)
  @Unique
  @Index
  @IsEmail
  @Column(DataType.STRING)
  email!: string;
}
