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

  @AllowNull(true)
  @Unique
  @Index
  @Length({ min: 1, max: 255 })
  @Column(DataType.STRING)
  login!: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  first_name!: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  second_name!: string;

  @AllowNull(true)
  @Column(DataType.STRING)
  display_name?: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  phone?: string;

  @AllowNull(true)
  @Column(DataType.STRING)
  avatar?: string;
}
