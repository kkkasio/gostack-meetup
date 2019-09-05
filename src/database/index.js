import Sequelize from 'sequelize';
import databaseConfig from '../config/database';

import User from '../app/models/User';
import Meetup from '../app/models/Meetup';
import Subscription from '../app/models/Subscription';
import Profile from '../app/models/Profile';
import BackendSkills from '../app/models/BackendSkill';
import FrontendSkills from '../app/models/FrontendSkill';

const models = [
  User,
  Meetup,
  Subscription,
  Profile,
  BackendSkills,
  FrontendSkills,
];

class Database {
  constructor() {
    this.connection = new Sequelize(databaseConfig);
    this.init();
    this.associate();
  }

  init() {
    models.forEach(model => model.init(this.connection));
  }

  associate() {
    models.forEach(model => {
      if (model.associate) {
        model.associate(this.connection.models);
      }
    });
  }
}

export default new Database();
