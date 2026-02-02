import React, { useEffect, useState } from 'react';
import { supabase } from '../supabase';

export default function AdminPanel() {
  const [activeTab, setActiveTab] = useState('applicants');
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async (tableName) => {
    setLoading(true);
    const { data: result, error } = await supabase
      .from(tableName)
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error("Error fetching data:", error);
    } else {
      setData(result);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData(activeTab);
  }, [activeTab]);

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8 uppercase tracking-widest text-center md:text-left">
          Admin Dashboard
        </h1>

        {/* --- RESPONSIVE TABS --- */}
        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 mb-8">
          <button
            onClick={() => setActiveTab('applicants')}
            className={`w-full sm:w-auto px-8 py-3 font-bold uppercase text-xs tracking-widest transition-all shadow-sm ${
              activeTab === 'applicants' ? 'bg-black text-white' : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
            }`}
          >
            Applicants
          </button>
          <button
            onClick={() => setActiveTab('contacts')}
            className={`w-full sm:w-auto px-8 py-3 font-bold uppercase text-xs tracking-widest transition-all shadow-sm ${
              activeTab === 'contacts' ? 'bg-black text-white' : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
            }`}
          >
            Inquiries
          </button>
        </div>

        {loading ? (
          <div className="flex flex-col items-center justify-center p-20">
            <div className="w-8 h-8 border-4 border-black border-t-transparent rounded-full animate-spin mb-4"></div>
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400">Syncing Data...</p>
          </div>
        ) : data.length === 0 ? (
          <div className="bg-white border border-dashed border-gray-300 p-20 text-center rounded-lg">
            <p className="text-gray-400 uppercase text-sm tracking-widest font-bold">No Records Found</p>
          </div>
        ) : (
          <>
            {/* --- DESKTOP VIEW (TABLE) --- */}
            <div className="hidden lg:block bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              <table className="w-full text-left">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="p-4 text-[10px] font-bold uppercase text-gray-400">Date</th>
                    <th className="p-4 text-[10px] font-bold uppercase text-gray-400">Name</th>
                    <th className="p-4 text-[10px] font-bold uppercase text-gray-400">Contact</th>
                    {activeTab === 'applicants' ? (
                      <>
                        <th className="p-4 text-[10px] font-bold uppercase text-gray-400">Position</th>
                        <th className="p-4 text-[10px] font-bold uppercase text-gray-400">Resume</th>
                      </>
                    ) : (
                      <th className="p-4 text-[10px] font-bold uppercase text-gray-400">Message</th>
                    )}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {data.map((item) => (
                    <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                      <td className="p-4 text-sm text-gray-500">{new Date(item.created_at).toLocaleDateString()}</td>
                      <td className="p-4 text-sm font-bold text-gray-900 uppercase tracking-tight">{item.name}</td>
                      <td className="p-4 text-sm text-gray-600">
                        <div className="font-medium">{item.email}</div>
                        <div className="text-xs text-gray-400">{item.phone}</div>
                      </td>
                      {activeTab === 'applicants' ? (
                        <>
                          <td className="p-4 text-sm text-gray-600 font-medium">{item.position}</td>
                          <td className="p-4 text-sm">
                            <a href={item.cv_url} target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-50 text-blue-700 px-3 py-1 rounded font-bold text-[10px] uppercase hover:bg-blue-100">
                              View CV
                            </a>
                          </td>
                        </>
                      ) : (
                        <td className="p-4 text-sm text-gray-600 italic">"{item.message}"</td>
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* --- MOBILE VIEW (CARDS) --- */}
            <div className="lg:hidden space-y-4">
              {data.map((item) => (
                <div key={item.id} className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm space-y-4">
                  <div className="flex justify-between items-start border-b border-gray-100 pb-3">
                    <div>
                      <h3 className="font-bold text-gray-900 uppercase tracking-tight">{item.name}</h3>
                      <p className="text-[10px] text-gray-400 font-bold uppercase">{new Date(item.created_at).toLocaleDateString()}</p>
                    </div>
                    {activeTab === 'applicants' && (
                      <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-tighter">
                        {item.position}
                      </span>
                    )}
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-xs">
                    <div>
                      <p className="text-[10px] font-bold text-gray-400 uppercase mb-1">Email</p>
                      <p className="text-gray-900 truncate">{item.email}</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-gray-400 uppercase mb-1">Phone</p>
                      <p className="text-gray-900">{item.phone}</p>
                    </div>
                  </div>

                  {activeTab === 'contacts' ? (
                    <div className="bg-gray-50 p-3 rounded border border-gray-100">
                      <p className="text-[10px] font-bold text-gray-400 uppercase mb-1">Message</p>
                      <p className="text-xs text-gray-600 italic leading-relaxed">"{item.message}"</p>
                    </div>
                  ) : (
                    <a 
                      href={item.cv_url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="block w-full text-center py-3 bg-blue-600 text-white font-bold text-xs uppercase tracking-widest rounded hover:bg-blue-700 transition-colors"
                    >
                      Download Resume
                    </a>
                  )}
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}