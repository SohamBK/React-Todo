import React from 'react'

function Layout({children}) {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white shadow-md rounded-2xl w-full max-w-lg p-6">
        <h1 className="text-3xl font-extrabold text-center mb-6">
          React Todo App
        </h1>
        {children}
      </div>
    </div>
  )
}

export default Layout
