import config from '../../config/config'

const signin = async (req, res) => {

    const { user_name, user_password } = req.body
  
    try {
  
      // simple static login
      if (user_name === config.user_name && user_password === config.user_password){
        return res.json({
            status : true,
            users: {
              user_name: config.user_name,
              user_email: config.user_email
            }
          });
      }else{
        return res.status('400').json({
            error: "User not found"
          });
      }
  
      
  
    } catch (err) {
      return res.status('400').json({
        error: "Could not retrieve user"
      });
    }
  
  }

export default{
    signin
}