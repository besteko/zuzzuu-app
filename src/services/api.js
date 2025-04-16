const API_URL = "https://zuzzuu-api.onrender.com"; // Render.com'daki API URL'nizi buraya ekleyin

export const fetchUserPoints = async (username = "Ahmet Özdemir") => {
  try {
    const response = await fetch(`${API_URL}/api/users/by-username/${encodeURIComponent(username)}`);
    if (!response.ok) {
      throw new Error('Kullanıcı bilgileri alınamadı');
    }
    return await response.json();
  } catch (error) {
    console.error("API hatası:", error);
    return null;
  }
};

export const updateUserPoints = async (userId, newPoints) => {
  try {
    const response = await fetch(`${API_URL}/api/users/${userId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ points: newPoints }),
    });
    if (!response.ok) {
      throw new Error('Puanlar güncellenemedi');
    }
    return await response.json();
  } catch (error) {
    console.error("API hatası:", error);
    return null;
  }
};