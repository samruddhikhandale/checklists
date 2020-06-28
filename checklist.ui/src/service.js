import { get, post, put, del } from './middleware/webrequest';

const BASE_URL = '/api/checklists'

export const fetchChecklist = async (checklistId) => {
    const response = await get(`${BASE_URL}/${checklistId}`);

    // If the response is Not found, return the reponse code, so the client can take approproiate decision.
    if (response.status === 404) {
        throw new NotFoundError("Checklist does not exist.")
    }

    if (response.ok) {
        return await response.json();
    }

    throw new Error(await response.json());
}

export const createChecklist = async (checklist) => {
    const response = await post(BASE_URL, checklist);
    if (response.ok) {
        return await response.json();
    }

    throw new Error(await response.json());
}

export const updateChecklist = async (checklist) => {
    const response = await put(`${BASE_URL}/${checklist._id}`, checklist);
    if (response.ok) {
        return await response.json();
    }

    throw new Error(await response.json());
}

export const deleteChecklist = async (checklist) => {
    const response = await del(`${BASE_URL}/${checklist._id}`);
    if (response.ok) {
        return;
    }

    throw new Error(await response.json());
}


export const addItem = async (checklistId, item) => {
    const response = await post(`${BASE_URL}/${checklistId}/items`, item);
    if (response.ok) {
        return await response.json();
    }

    throw new Error(await response.json());
}

export const updateItem = async (checklistId, item) => {
    const response = await put(`${BASE_URL}/${checklistId}/items/${item._id}`, item);
    if (response.ok) {
        return await response.json();
    }

    throw new Error(await response.json());
}

export const deleteItem = async (checklistId, item) => {
    const response = await del(`${BASE_URL}/${checklistId}/items/${item._id}`);
    if (response.ok) {
        return;
    }

    throw new Error(await response.json());
}

export class NotFoundError extends Error {
    constructor(message) {
        super(message);
        this.name = "NotFoundError";
    }
}
