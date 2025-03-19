'use client';

import { useState, useEffect } from 'react';
import {
  addData,
  getAllData,
  getDataById,
  updateData,
  deleteData,
} from '@/lib/db';

export default function CrudPage() {
  const [users, setUsers] = useState<any[]>([]);
  const [name, setName] = useState('');
  const [selectedUser, setSelectedUser] = useState<any | null>(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    const data = await getAllData();
    setUsers(data);
  }

  async function handleAdd() {
    if (name.trim()) {
      await addData({ name });
      setName('');
      fetchUsers();
    }
  }

  async function handleUpdate() {
    if (selectedUser) {
      await updateData({ id: selectedUser.id, name });
      setSelectedUser(null);
      setName('');
      fetchUsers();
    }
  }

  async function handleEdit(id: IDBValidKey) {
    const user = await getDataById(id);
    if (user) {
      setSelectedUser(user);
      setName(user.name);
    }
  }

  async function handleDelete(id: IDBValidKey) {
    await deleteData(id);
    fetchUsers();
  }

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-xl font-bold mb-4">CRUD IndexedDB</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 w-full mb-2"
        placeholder="Masukkan nama"
      />
      {selectedUser ? (
        <button
          onClick={handleUpdate}
          className="bg-blue-500 text-white p-2 w-full"
        >
          Update
        </button>
      ) : (
        <button
          onClick={handleAdd}
          className="bg-green-500 text-white p-2 w-full"
        >
          Tambah
        </button>
      )}
      <ul className="mt-4">
        {users.map((user) => (
          <li key={user.id} className="flex justify-between p-2 border-b">
            {user.name}
            <div>
              <button
                onClick={() => handleEdit(user.id)}
                className="text-blue-500 mr-2"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(user.id)}
                className="text-red-500"
              >
                Hapus
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
