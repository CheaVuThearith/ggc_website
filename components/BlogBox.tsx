import React from 'react';
type props = {title: string, subtitle: string}
const BlogBox= ({title, subtitle}:props) => {
  return (
    <div className="max-w-sm mx-auto bg-white border border-green-200 rounded-lg shadow-lg overflow-hidden">
      <img
        className="w-full h-48 object-cover"
        src="https://i0.wp.com/cms.babbel.news/wp-content/uploads/2019/04/ItalianFood.png?resize=830%2C467" // Replace with your image URL
        alt="Waste Management"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-center text-gray-800">
          {title}
        </h2>
        <p className="mt-2 text-gray-600 text-center">
          {subtitle}
        </p>
        <div className="flex justify-center mt-4">
          <button className="bg-primary text-white px-4 py-2 rounded-md">
            READ MORE
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogBox;
