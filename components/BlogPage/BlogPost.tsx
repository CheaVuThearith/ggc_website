import React from 'react';
type props ={ title: string, subtitle: string, describtion: string}
const BlogPost= ({title, subtitle,describtion}:props) => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden shadow-md">
      <img
        className="w-full h-48 object-cover"
        src="https://via.placeholder.com/300" // Replace with your image URL
        alt="Blog Post"
      />
      <div className="p-4">
        <div className="text-sm text-purple-700 font-semibold">
          {describtion}
        </div>
        <h2 className="mt-2 text-xl font-bold text-gray-900">
          {title}
        </h2>
        <p className="mt-2 text-gray-600">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default BlogPost;
