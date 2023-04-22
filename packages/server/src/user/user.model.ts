import {
  AllowNull,
  AutoIncrement,
  Column,
  DataType,
  Index,
  IsEmail,
  Length,
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

  // For Auth (If necessary)
  @AllowNull(true)
  @Unique
  @Index
  @Length({ min: 1, max: 255 })
  @Column(DataType.STRING)
  uuid?: string;

  // For Auth (If necessary)
  @AllowNull(true)
  @Unique
  @Index
  @Length({ min: 1, max: 255 })
  @Column(DataType.STRING)
  authCookie?: string;

  @AllowNull(true)
  @Unique
  @Index
  @Length({ min: 1, max: 255 })
  @Column(DataType.STRING)
  login?: string;
}
