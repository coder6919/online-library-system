import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addBook } from '../redux/BookSlice';
import { CATEGORIES } from '../dummyBooks';

/**
 * Add Book Page
 */

  const InputField = ({ name, label, type = 'text', value, onChange, error, ...props }) => (
    <div className="mb-4">
      <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className={`w-full p-3 border-2 rounded-lg text-gray-800 focus:outline-none focus:ring-2 transition duration-200 ${
          error ? 'border-red-400 focus:border-red-500 focus:ring-red-100' : 'border-rose-200 focus:border-rose-500 focus:ring-rose-100'
        }`}
        {...props}
      />
      {error && <p className="mt-1 text-xs text-red-500 font-medium">{error}</p>}
    </div>
  );
const AddBookPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Initialize form state
  const [formData, setFormData] = useState({
    title: '', author: '', category: CATEGORIES[1], description: '', rating: '4.0',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error on input change
    setErrors(prev => ({ ...prev, [name]: '' }));
  };

  // Form Validation
  const validate = () => {
    let newErrors = {};
    if (!formData.title.trim()) newErrors.title = 'Title is required.';
    if (!formData.author.trim()) newErrors.author = 'Author is required.';
    if (!formData.description.trim()) newErrors.description = 'Description is required.';
    if (!formData.category) newErrors.category = 'Category is required.';
    
    // Rating must be a number between 1.0 and 5.0
    const ratingValue = parseFloat(formData.rating);
    if (isNaN(ratingValue) || ratingValue < 1.0 || ratingValue > 5.0) {
      newErrors.rating = 'Rating must be between 1.0 and 5.0.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) {
      return;
    }

    setIsSubmitting(true);
    
    // Dispatch Redux action 
    dispatch(addBook(formData));

    // Redirect after submission 
    // We navigate to /books/All to show the newly added book immediately
    setTimeout(() => {
        setIsSubmitting(false);
        navigate('/books/All');
    }, 500);
  };


  return (
    <div className="max-w-xl mx-auto p-8">
      <h2 className="text-4xl font-extrabold text-gray-800 mb-8 border-b-2 border-rose-200 pb-2">
        Add New Book
      </h2>
      
      {/* Form for adding a new book */}
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-2xl border border-rose-100">
        
        <InputField 
          name="title" 
          label="Book Title" 
          value={formData.title} 
          onChange={handleChange} 
          error={errors.title} 
          required 
        />
        
        <InputField 
          name="author" 
          label="Author Name" 
          value={formData.author} 
          onChange={handleChange} 
          error={errors.author} 
          required 
        />

        {/* Category Select */}
        <div className="mb-4">
          <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
            Category
          </label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className={`w-full p-3 border-2 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring-2 transition duration-200 ${
              errors.category ? 'border-red-400 focus:border-red-500 focus:ring-red-100' : 'border-rose-200 focus:border-rose-500 focus:ring-rose-100'
            }`}
            required
          >
            {CATEGORIES.filter(c => c !== 'All').map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
          {errors.category && <p className="mt-1 text-xs text-red-500 font-medium">{errors.category}</p>}
        </div>

        {/* Rating Input */}
        <InputField 
          name="rating" 
          label="Rating (1.0 - 5.0)" 
          type="number" 
          value={formData.rating} 
          onChange={handleChange} 
          error={errors.rating} 
          step="0.1" 
          min="1.0" 
          max="5.0" 
          required 
        />

        {/* Description Textarea */}
        <div className="mb-6">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="4"
            className={`w-full p-3 border-2 rounded-lg text-gray-800 resize-none focus:outline-none focus:ring-2 transition duration-200 ${
              errors.description ? 'border-red-400 focus:border-red-500 focus:ring-red-100' : 'border-rose-200 focus:border-rose-500 focus:ring-rose-100'
            }`}
            required
          ></textarea>
          {errors.description && <p className="mt-1 text-xs text-red-500 font-medium">{errors.description}</p>}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-3 rounded-xl font-bold text-lg transition duration-300 shadow-md ${
            isSubmitting
              ? 'bg-rose-300 text-white cursor-not-allowed'
              : 'bg-rose-500 text-white hover:bg-rose-600 transform hover:scale-[1.01]'
          }`}
        >
          {isSubmitting ? 'Adding Book...' : 'Add Book to Library'}
        </button>
      </form>
    </div>
  );
};

export default AddBookPage;