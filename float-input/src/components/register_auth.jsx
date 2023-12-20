import axios from 'axios';

const RegisterUser = async () => {
  try {
    const response = await axios.post(
      'https://neobook.online/mobi-market/users/register', // URL для регистрации
      {
        username: 'example_username',
        password: 'example_password',
        // Другие данные для регистрации, если необходимо
      }
    );
    return response.data;
  } catch (error) {
    throw new Error('Ошибка при регистрации:', error);
  }
};

export default RegisterUser;
