const config = {
    env: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 3000,
    jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key",
    user_name : "admin",
    user_password : "secret",
    user_email : "iqbal@gmail.com"
  }
  
  export default config