import React from 'react';

const SmallLoader: React.FC = () => {
  return (
    <div className="flex justify-center items-center">
      <span className="w-8 h-8 border-4 border-dotted border-teal-700 rounded-full animate-spin"></span>
    </div>
  );
};

export default SmallLoader;
