import sequelize from "../db.js";
import { DataTypes } from "sequelize";

const ConnModel = sequelize.define('conn', {
    countries: {
      type: DataTypes.JSONB
    },
  });

export default ConnModel