import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const usersDB = [
  { email: 'user@example.com', password: 'user123', role: 'user' },
  { email: 'admin@example.com', password: 'admin123', role: 'admin' },
];

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    const foundUser = usersDB.find(
      (u) => u.email === email && u.password === password
    );
    if (foundUser) {
      localStorage.setItem('role', foundUser.role);
      if (foundUser.role === 'admin') {
        navigate('/admin');
      } else {
        navigate('/');
      }
    } else {
      setError('البريد الإلكتروني أو كلمة المرور غير صحيحة');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form onSubmit={handleLogin} className="bg-white p-8 rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-700">تسجيل الدخول</h2>
        <input
          type="email"
          placeholder="البريد الإلكتروني"
          className="w-full mb-4 p-2 border rounded"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="كلمة المرور"
          className="w-full mb-4 p-2 border rounded"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p className="text-red-600 mb-4 text-center">{error}</p>}
        <button
          type="submit"
          className="bg-blue-600 text-white w-full py-2 rounded hover:bg-blue-700"
        >
          دخول
        </button>
      </form>
    </div>
  );
}
