const defaultRequestOptions = {
    mode: 'cors',
    headers: {
        'Content-Type': 'application/json'
    }
};

export const get = async (url) => {
    const requestOptions = {
        ...defaultRequestOptions,
        method: 'GET',
    };

    return await executeRequest(url, requestOptions);
}

export const post = async (url, data) => {
    const requestOptions = {
        ...defaultRequestOptions,
        method: 'POST',
        body: JSON.stringify(data)
    };

    return await executeRequest(url, requestOptions);
}

export const put = async (url, data) => {
    const requestOptions = {
        ...defaultRequestOptions,
        method: 'PUT',
        body: JSON.stringify(data)
    };

    return await executeRequest(url, requestOptions);
}

export const del = async (url) => {
    const requestOptions = {
        ...defaultRequestOptions,
        method: 'DELETE',
    };

    return await executeRequest(url, requestOptions);
}

const executeRequest = async (url, requestOptions) => {
    return await fetch(url, requestOptions);
}