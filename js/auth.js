/**
 * Sistema de Autenticación - Academia Bio-Python
 * Gestión de usuarios mediante localStorage
 */

const AUTH = {
    DB_KEY: 'biopython_users',
    SESSION_KEY: 'biopython_session',

    // Inicializar con usuario admin por defecto si no existe la BD
    init() {
        if (!localStorage.getItem(this.DB_KEY)) {
            const defaultUsers = [
                {
                    id: 'admin',
                    cc: '0000000000',
                    nombre: 'Administrador',
                    password: btoa('Admin2024!'),
                    rol: 'admin',
                    activo: true,
                    fechaCreacion: new Date().toISOString()
                }
            ];
            localStorage.setItem(this.DB_KEY, JSON.stringify(defaultUsers));
        }
    },

    // Obtener todos los usuarios
    getUsers() {
        return JSON.parse(localStorage.getItem(this.DB_KEY) || '[]');
    },

    // Guardar lista de usuarios
    saveUsers(users) {
        localStorage.setItem(this.DB_KEY, JSON.stringify(users));
    },

    // Intentar login con ID o CC + contraseña
    login(identificador, password) {
        const users = this.getUsers();
        const user = users.find(u =>
            (u.id === identificador || u.cc === identificador) &&
            u.password === btoa(password) &&
            u.activo
        );
        if (user) {
            const session = {
                id: user.id,
                cc: user.cc,
                nombre: user.nombre,
                rol: user.rol,
                loginTime: new Date().toISOString()
            };
            sessionStorage.setItem(this.SESSION_KEY, JSON.stringify(session));
            return { success: true, user: session };
        }
        return { success: false, message: 'ID/C.C. o contraseña incorrectos.' };
    },

    // Cerrar sesión
    logout() {
        sessionStorage.removeItem(this.SESSION_KEY);
        window.location.href = 'login.html';
    },

    // Obtener sesión activa
    getSession() {
        const data = sessionStorage.getItem(this.SESSION_KEY);
        return data ? JSON.parse(data) : null;
    },

    // Verificar si hay sesión activa; si no, redirigir al login
    requireAuth() {
        const session = this.getSession();
        if (!session) {
            window.location.href = 'login.html';
            return null;
        }
        return session;
    },

    // Verificar si el usuario actual es admin
    requireAdmin() {
        const session = this.requireAuth();
        if (session && session.rol !== 'admin') {
            window.location.href = 'index.html';
            return null;
        }
        return session;
    },

    // Agregar usuario
    addUser({ id, cc, nombre, password, rol = 'estudiante' }) {
        const users = this.getUsers();
        if (users.find(u => u.id === id)) {
            return { success: false, message: 'El ID de usuario ya existe.' };
        }
        if (users.find(u => u.cc === cc)) {
            return { success: false, message: 'La C.C. ya está registrada.' };
        }
        users.push({
            id, cc, nombre,
            password: btoa(password),
            rol,
            activo: true,
            fechaCreacion: new Date().toISOString()
        });
        this.saveUsers(users);
        return { success: true };
    },

    // Cambiar contraseña
    changePassword(idOrCC, newPassword) {
        const users = this.getUsers();
        const idx = users.findIndex(u => u.id === idOrCC || u.cc === idOrCC);
        if (idx === -1) return { success: false, message: 'Usuario no encontrado.' };
        users[idx].password = btoa(newPassword);
        this.saveUsers(users);
        return { success: true };
    },

    // Activar / Desactivar usuario
    toggleUser(idOrCC) {
        const users = this.getUsers();
        const idx = users.findIndex(u => u.id === idOrCC || u.cc === idOrCC);
        if (idx === -1) return { success: false, message: 'Usuario no encontrado.' };
        users[idx].activo = !users[idx].activo;
        this.saveUsers(users);
        return { success: true, activo: users[idx].activo };
    },

    // Eliminar usuario
    deleteUser(idOrCC) {
        let users = this.getUsers();
        const prev = users.length;
        users = users.filter(u => u.id !== idOrCC && u.cc !== idOrCC);
        if (users.length === prev) return { success: false, message: 'Usuario no encontrado.' };
        this.saveUsers(users);
        return { success: true };
    }
};

// Auto-inicializar
AUTH.init();
