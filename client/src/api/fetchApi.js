const fetchApi = async (route) => {
    const response = await fetch(`https://doux-paradis-api.onrender.com/${route}`);
    const data = await response.json();
    return data;
};

export default fetchApi;
