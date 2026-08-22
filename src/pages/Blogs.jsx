import React from 'react';
import { Helmet } from 'react-helmet-async';

const Blogs = () => {
  return (
    <div className="section-padding container text-center" style={{marginTop: '100px', minHeight: '60vh'}}>
      <Helmet>
        <title>Journal & Insights | Perfect Party Events UAE</title>
        <meta
          name="description"
          content="Insights, tips, and trends on luxury event planning, corporate event management, and private celebrations in Abu Dhabi and Dubai."
        />
        <link rel="canonical" href="https://perfectpartyeventsae.com/blogs" />
      </Helmet>
      <h1 className="gradient-text">Journal & Insights</h1>
      <p style={{marginTop: '2rem'}}>Blog articles coming soon...</p>
    </div>
  );
};

export default Blogs;


