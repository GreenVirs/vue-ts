import { mande } from "mande";

export type User = { 
    id: number,
    name: string,
}

const users = mande('/api/users');

export function getUser(id: number | string) {
    return users.get<User>(id);
}

export function createUser(userData: User)  {
    return users.post<User>(userData);
}

export function getUsers() {
    return users.get<User[]>('');
}

export function updateUser(userData: User) {
    return users.put<User>(userData);
}

export function deleteUser (id: string | number) {
    return users.delete<User>(id)
}