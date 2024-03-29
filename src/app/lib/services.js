
const URI = 'https://blogapi-production-9469.up.railway.app/api/';

export const getData = async () => {
  try {
    const response = await fetch(URI, { cache: 'no-store' });
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

export const getDataByFilter = async (search) => {
  try {
    let apiURL = '';
    if (search) {
      apiURL = URI + `${encodeURIComponent(search)}`;
    }

    const response = await fetch(apiURL);

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const getEntrieById = async (id) => {
  try {
    const url = `${URI}/entrie/${id}`;
    const response = await fetch(url, { cache: "no-store" });
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

export const postEntrie = async (id, title, autor, dateCreate, content) => {
  try {
    const response = await fetch(URI, {
      method: 'POST',
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({ id, title, autor, dateCreate, content })
    });
    return response;
  } catch (error) {
    console.log("Error:", error);
  }
};

export const updateEntrie = async (id, title, autor, content) => {
  try {
    const response = await fetch(`${URI}${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({ title, autor, content })
    });
    return response;
  } catch (error) {
    console.error("Error:", error);
  }
}


export const deleteEntrie = async (id) => {
  try {
    const response = await fetch(`${URI}/${id}`, {
      method: 'DELETE'
    })
    return response;
  } catch (error) {
    console.log("Error:", error);
  }
}
