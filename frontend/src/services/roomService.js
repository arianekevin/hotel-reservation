const roomService = {
    getAll: () => api.get('/rooms'),
    getById: (id) => api.get(`/rooms/${id}`),
}

export default roomService