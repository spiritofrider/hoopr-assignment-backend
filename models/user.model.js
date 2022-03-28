module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("hoopr_user", {
        
      user_id:{
        type: Sequelize.STRING
      },
      username: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      created_on:{
          type: Sequelize.DATE
      },
      gender:{
          type: Sequelize.STRING
      },
      dob:{
          type: Sequelize.DATE
      },
      privacy_sharing:{
          type: Sequelize.BOOLEAN
      }
    });
    return User;
  };