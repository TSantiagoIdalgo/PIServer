import sequelize from "../db.js";
import { DataTypes } from "sequelize";

const UserModel = sequelize.define('users', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
      },
      userName: {
        type: DataTypes.STRING(12)
      },
      email: {
        type: DataTypes.STRING(50),
        primaryKey: true,
        unique: true
      },
      passwordHash: {
        type: DataTypes.STRING(120)
      }
})

export default UserModel