const API_BASE_URL =
  `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/` || "http://localhost:3001";
export const MEDIA_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export class APIError extends Error {
  constructor(message, status) {
    super(message);
    this.name = "APIError";
    this.status = status;
  }
}

export async function fetchFromAPI(endpoint, options = {}) {
  const url = `${API_BASE_URL}${endpoint}`;

  console.log(url);
  const defaultOptions = {
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
    cache: "force-cache",
    next: { revalidate: 60 },
    ...options,
  };

  try {
    const response = await fetch(url, defaultOptions);

    if (!response.ok) {
      console.log(response);
      return {
        data: null,
        error: true,
      };
    }

    const data = await response.json();

    return {
      error: !data?.status,
      data: data?.status ? data?.data : null,
    };
  } catch (error) {
    return {
      data: null,
      error: true,
    };
  }
}

export async function fetchDropdownDataAPI(endpoint, options = {}) {
  const url = `${API_BASE_URL}${endpoint}`;

  const defaultOptions = {
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
    cache: "no-cache",
    ...options,
  };

  try {
    const response = await fetch(url, defaultOptions);

    if (!response.ok) {
      throw new APIError("Failed to fetch data from API", response.status);
    }
    const data = await response.json();

    return {
      data: data?.status ? data?.data : null,
    };
  } catch (error) {
    throw new APIError(error.message, error.status || 500);
  }
}

export async function postToAPI(endpoint, data) {
  const url = `${API_BASE_URL}${endpoint}`;

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new APIError("Failed to post data to API", response.status);
    }

    const responseData = await response.json();

    return {
      data: responseData?.status ? responseData?.data : null,
    };
  } catch (error) {
    console.log(error);
    throw new APIError(error.message, error.status || 500);
  }
}

export async function multipartPostToAPI(endpoint, formData) {
  const url = `${API_BASE_URL}${endpoint}`;

  try {
    const response = await fetch(url, {
      method: "POST",
      // ❌ DO NOT manually set Content-Type
      // The browser automatically adds the multipart boundary.
      body: formData,
    });

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error("❌ multipartPostToAPI error:", error);
    throw error;
  }
}
