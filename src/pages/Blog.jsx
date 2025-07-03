import React, { useState } from 'react';
import {
  ArrowLeft,
  Calendar,
  Clock,
  User,
  Tag,
  Search,
  Filter,
  ChevronRight
} from 'lucide-react';
import { blogPosts } from '../data/blogs';
const Blog = () => {
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Sample blog data
  

  const categories = ['all', ...new Set(blogPosts.map(post => post.category))];

  const filteredBlogPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.content.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleReadMore = (id) => {
    const post = blogPosts.find(p => p.id === id);
    setSelectedBlog(post);
    window.scrollTo(0, 0); // Scroll to top when a blog is selected
  };

  const handleBackToList = () => {
    setSelectedBlog(null);
  };

  const renderContent = (content) => {
    // Basic Markdown to HTML conversion for demonstration
    let htmlContent = content;

    // Convert code blocks (triple backticks)
    htmlContent = htmlContent.replace(/```(\w+)?\n([\s\S]+?)\n```/g, (match, lang, code) => {
        const languageClass = lang ? `language-${lang}` : '';
        return `<pre><code class="${languageClass}">${escapeHtml(code)}</code></pre>`;
    });

    // Convert headings (##)
    htmlContent = htmlContent.replace(/^##\s*(.*)$/gm, '<h2>$1</h2>');
    htmlContent = htmlContent.replace(/^###\s*(.*)$/gm, '<h3>$1</h3>');

    // Convert bold (**text**)
    htmlContent = htmlContent.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

    // Convert italics (*text*)
    htmlContent = htmlContent.replace(/\*(.*?)\*/g, '<em>$1</em>');

    // Convert list items (-)
    htmlContent = htmlContent.replace(/^- (.*)$/gm, '<li>$1</li>');
    if (htmlContent.includes('<li>')) {
      htmlContent = `<ul>${htmlContent}</ul>`;
      // Fix for nested markdown, very basic
      htmlContent = htmlContent.replace(/<\/li>\s*<ul>/g, '</li><ul>');
      htmlContent = htmlContent.replace(/<\/ul>\s*<li>/g, '</ul><li>');
    }
    
    // Add line breaks for paragraphs (double newline)
    htmlContent = htmlContent.split('\n\n').map(paragraph => {
      // Don't wrap code blocks or lists in paragraphs
      if (paragraph.startsWith('<pre') || paragraph.startsWith('<h2>') || paragraph.startsWith('<h3>') || paragraph.startsWith('<ul>') || paragraph.startsWith('<li>')) {
        return paragraph;
      }
      return `<p>${paragraph}</p>`;
    }).join('');

    return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
  };

  const escapeHtml = (unsafe) => {
    return unsafe
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '1200px', margin: '20px auto', padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
      {selectedBlog ? (
        <div style={{padding: '20px'}}>
          <button
            onClick={handleBackToList}
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: '10px 15px',
              backgroundColor: '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              marginBottom: '20px',
              fontSize: '16px'
            }}
          >
            <ArrowLeft size={18} style={{ marginRight: '8px' }} />
            Back to All Posts
          </button>
          <h1 style={{ color: '#333', marginBottom: '15px', fontSize: '2.5em' }}>{selectedBlog.title}</h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '25px', color: '#666', fontSize: '0.95em' }}>
            <span style={{ display: 'flex', alignItems: 'center' }}><User size={16} style={{ marginRight: '6px' }} /> {selectedBlog.author}</span>
            <span style={{ display: 'flex', alignItems: 'center' }}><Calendar size={16} style={{ marginRight: '6px' }} /> {selectedBlog.date}</span>
            <span style={{ display: 'flex', alignItems: 'center' }}><Clock size={16} style={{ marginRight: '6px' }} /> {selectedBlog.readTime}</span>
            <span style={{ display: 'flex', alignItems: 'center' }}><Tag size={16} style={{ marginRight: '6px' }} /> {selectedBlog.category}</span>
          </div>
          <div className="blog-content" style={{ lineHeight: '1.8', color: '#333' }}>
            {renderContent(selectedBlog.content)}
          </div>
          <div style={{ marginTop: '30px', paddingTop: '20px', borderTop: '1px solid #eee' }}>
            <h3 style={{ color: '#555', marginBottom: '10px' }}>Tags:</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {selectedBlog.tags.map((tag, index) => (
                <span key={index} style={{ backgroundColor: '#e9ecef', padding: '6px 12px', borderRadius: '20px', fontSize: '0.85em', color: '#555' }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <>
          <h1 style={{ textAlign: 'center', color: '#333', marginBottom: '30px', fontSize: '3em' }}>Our Blog</h1>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px', flexWrap: 'wrap', gap: '15px' }}>
            <div style={{ position: 'relative', flexGrow: 1, maxWidth: '400px' }}>
              <input
                type="text"
                placeholder="Search blog posts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: '100%',
                  padding: '12px 15px 12px 40px',
                  border: '1px solid #ddd',
                  borderRadius: '25px',
                  fontSize: '1em',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
                }}
              />
              <Search size={20} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#999' }} />
            </div>
            <div style={{ position: 'relative' }}>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                style={{
                  padding: '12px 15px',
                  border: '1px solid #ddd',
                  borderRadius: '25px',
                  fontSize: '1em',
                  appearance: 'none',
                  backgroundColor: 'white',
                  paddingRight: '40px',
                  cursor: 'pointer',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
                }}
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </option>
                ))}
              </select>
              <Filter size={20} style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', color: '#999', pointerEvents: 'none' }} />
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
            {filteredBlogPosts.length > 0 ? (
              filteredBlogPosts.map(post => (
                <div
                  key={post.id}
                  style={{
                    backgroundColor: 'white',
                    borderRadius: '8px',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                    overflow: 'hidden',
                    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                    display: 'flex',
                    flexDirection: 'column',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-5px)';
                    e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
                  }}
                  onClick={() => handleReadMore(post.id)}
                >
                  <div style={{ padding: '25px' }}>
                    <h2 style={{ color: '#333', fontSize: '1.8em', marginBottom: '10px' }}>{post.title}</h2>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px', color: '#666', fontSize: '0.9em' }}>
                      <span style={{ display: 'flex', alignItems: 'center' }}><User size={14} style={{ marginRight: '5px' }} /> {post.author}</span>
                      <span style={{ display: 'flex', alignItems: 'center' }}><Calendar size={14} style={{ marginRight: '5px' }} /> {post.date}</span>
                    </div>
                    <p style={{ color: '#555', lineHeight: '1.6', marginBottom: '20px', fontSize: '0.95em' }}>{post.excerpt}</p>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
                      <span style={{ display: 'flex', alignItems: 'center', color: '#007bff', fontWeight: 'bold', fontSize: '0.9em' }}>
                        <Clock size={14} style={{ marginRight: '5px' }} /> {post.readTime}
                      </span>
                      <span style={{ display: 'flex', alignItems: 'center', backgroundColor: '#e7f3ff', color: '#007bff', padding: '5px 10px', borderRadius: '15px', fontSize: '0.85em', fontWeight: '600' }}>
                        <Tag size={12} style={{ marginRight: '5px' }} /> {post.category}
                      </span>
                    </div>
                  </div>
                  <div style={{ padding: '15px 25px', borderTop: '1px solid #f0f0f0', display: 'flex', justifyContent: 'flex-end', alignItems: 'center', color: '#007bff', fontWeight: 'bold', fontSize: '0.9em' }}>
                    Read More <ChevronRight size={16} style={{ marginLeft: '5px' }} />
                  </div>
                </div>
              ))
            ) : (
              <p style={{ gridColumn: '1 / -1', textAlign: 'center', fontSize: '1.2em', color: '#777', padding: '50px 0' }}>
                No blog posts found matching your criteria. Try a different search or category!
              </p>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Blog;