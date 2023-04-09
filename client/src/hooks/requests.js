const API_URL = 'v1';

async function httpGetInfo() {
  const response = await fetch(`${API_URL}/info`);
  return await response.json();
}

async function httpSubmitFood(food) {
  try {
    return await fetch(`${API_URL}/food`, {
      method: 'post',
      body: JSON.stringify(food),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
  catch (err) {
    return {
      ok: false,
    };
  }
}

async function httpSubmitInfo(info) {
  try {
    return await fetch(`${API_URL}/info`, {
      method: 'post',
      body: JSON.stringify(info),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
  catch (err) {
    return {
      ok: false,
    };
  }
}

async function httpDeleteItem(id) {
  try {
    return await fetch(`${API_URL}/diet/${id}`, {
      method: 'delete',
    });
  }
  catch (err) {
    return {
      ok: false,
    };
  }
}

export {
  httpSubmitFood,
  httpSubmitInfo,
  httpGetInfo,
  httpDeleteItem,
};