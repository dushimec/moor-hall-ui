import React, { useState } from 'react';
import { useAdmin } from '../../../context/AdminContext';

const MenuManagement: React.FC = () => {
  const { menuItems, menuCategories, addMenuItem, updateMenuItem, deleteMenuItem } = useAdmin();
  const [showAddModal, setShowAddModal] = useState(false);
  const [editingItem, setEditingItem] = useState<any>(null);
  const [newItem, setNewItem] = useState({ name: '', description: '', price: 0, categoryId: menuCategories[0]?.id || '', isAvailable: true, isFeatured: false });

  const filteredItems = menuItems.filter(item => item.isAvailable);
  const unavailableItems = menuItems.filter(item => !item.isAvailable);

  const handleSave = () => {
    if (editingItem) { updateMenuItem(editingItem.id, newItem); setEditingItem(null); } else { addMenuItem(newItem); }
    setShowAddModal(false);
    setNewItem({ name: '', description: '', price: 0, categoryId: menuCategories[0]?.id || '', isAvailable: true, isFeatured: false });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div><h1 className="text-2xl font-bold text-gray-900">Menu Management</h1><p className="text-gray-500 mt-1">Manage your restaurant menu items</p></div>
        <button onClick={() => setShowAddModal(true)} className="bg-[#BF2201] text-white px-4 py-2 rounded-lg hover:bg-[#a01800] transition-colors">Add Menu Item</button>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Menu Categories</h2>
        <div className="flex flex-wrap gap-2">
          {menuCategories.map((cat: any) => (<span key={cat.id} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">{cat.name}</span>))}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-100"><h2 className="text-lg font-semibold text-gray-900">Available Items</h2></div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50"><tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Item</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Category</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Price</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Featured</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
            </tr></thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredItems.map((item: any) => (
                <tr key={item.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4"><div className="font-medium text-gray-900">{item.name}</div><div className="text-sm text-gray-500">{item.description}</div></td>
                  <td className="px-6 py-4 text-sm text-gray-500">{menuCategories.find((c: any) => c.id === item.categoryId)?.name}</td>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">${item.price.toFixed(2)}</td>
                  <td className="px-6 py-4">{item.isFeatured && <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-medium">Featured</span>}</td>
                  <td className="px-6 py-4 text-sm">
                    <div className="flex space-x-2">
                      <button onClick={() => { setEditingItem(item); setNewItem({ ...item }); setShowAddModal(true); }} className="text-[#BF2201] hover:text-[#a01800] font-medium">Edit</button>
                      <button onClick={() => deleteMenuItem(item.id)} className="text-red-600 hover:text-red-800 font-medium">Delete</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {unavailableItems.length > 0 && (
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-100"><h2 className="text-lg font-semibold text-gray-900">Unavailable Items</h2></div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <tbody className="bg-white divide-y divide-gray-200">
                {unavailableItems.map((item: any) => (
                  <tr key={item.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4"><div className="font-medium text-gray-900">{item.name}</div><div className="text-sm text-gray-500">{item.description}</div></td>
                    <td className="px-6 py-4 text-sm text-gray-500">${item.price.toFixed(2)}</td>
                    <td className="px-6 py-4 text-sm">
                      <button onClick={() => updateMenuItem(item.id, { isAvailable: true })} className="text-green-600 hover:text-green-800 font-medium">Make Available</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200"><h2 className="text-xl font-bold text-gray-900">{editingItem ? 'Edit Menu Item' : 'Add Menu Item'}</h2></div>
            <div className="p-6 space-y-4">
              <div><label className="block text-sm font-medium text-gray-700 mb-1">Name</label><input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-lg" value={newItem.name} onChange={(e) => setNewItem({ ...newItem, name: e.target.value })} /></div>
              <div><label className="block text-sm font-medium text-gray-700 mb-1">Description</label><textarea className="w-full px-3 py-2 border border-gray-300 rounded-lg" value={newItem.description} onChange={(e) => setNewItem({ ...newItem, description: e.target.value })} /></div>
              <div><label className="block text-sm font-medium text-gray-700 mb-1">Price ($)</label><input type="number" step="0.01" className="w-full px-3 py-2 border border-gray-300 rounded-lg" value={newItem.price} onChange={(e) => setNewItem({ ...newItem, price: parseFloat(e.target.value) || 0 })} /></div>
              <div><label className="block text-sm font-medium text-gray-700 mb-1">Category</label><select className="w-full px-3 py-2 border border-gray-300 rounded-lg" value={newItem.categoryId} onChange={(e) => setNewItem({ ...newItem, categoryId: e.target.value })}>{menuCategories.map((cat: any) => (<option key={cat.id} value={cat.id}>{cat.name}</option>))}</select></div>
              <div className="flex items-center space-x-4">
                <label className="flex items-center"><input type="checkbox" checked={newItem.isAvailable} onChange={(e) => setNewItem({ ...newItem, isAvailable: e.target.checked })} className="rounded text-[#BF2201] focus:ring-[#BF2201]" /><span className="ml-2 text-sm text-gray-700">Available</span></label>
                <label className="flex items-center"><input type="checkbox" checked={newItem.isFeatured} onChange={(e) => setNewItem({ ...newItem, isFeatured: e.target.checked })} className="rounded text-[#BF2201] focus:ring-[#BF2201]" /><span className="ml-2 text-sm text-gray-700">Featured</span></label>
              </div>
              <div className="flex justify-end space-x-2 pt-4">
                <button onClick={() => { setShowAddModal(false); setEditingItem(null); }} className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">Cancel</button>
                <button onClick={handleSave} className="px-4 py-2 bg-[#BF2201] text-white rounded-lg hover:bg-[#a01800]">{editingItem ? 'Save Changes' : 'Add Item'}</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default MenuManagement;
