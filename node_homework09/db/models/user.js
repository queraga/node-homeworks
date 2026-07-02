import { DataTypes, Model } from "sequelize";
import sequelize from "../connection.js";
import bcrypt from "bcryptjs";

class User extends Model {
  async comparePassword(password) {
    return bcrypt.compare(password, this.password);
  }
}

User.init(
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },

    email: { type: DataTypes.STRING, allowNull: false, unique: true },
    password: { type: DataTypes.STRING, allowNull: false },
    mustChangePassword: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    role: { type: DataTypes.STRING, allowNull: false, defaultValue: "user" },
  },
  {
    sequelize,
    modelName: "User",
    tableName: "users",
    timestamps: true,

    hooks: {
      async beforeSave(user) {
        if (user.changed("password")) {
          user.password = await bcrypt.hash(user.password, 10);
        }
      },
    },
  },
);

export default User;
