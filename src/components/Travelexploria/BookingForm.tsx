import React, { useState, ChangeEvent, FormEvent } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface FormData {
  name: string;
  email: string;
  phone: string;
  countryCode: string;
  travelDate: Date | null;
  travellers: number;
  message: string;
}

const countryCodes = [
  { code: '+91' },
  { code: '+44'},
  { code: '+1'},
  { code: '+61'},
  { code: '+49'},
  { code: '+81'},
  { code: '+33'},
  { code: '+86'},
  // Add more global country codes as needed
];

const BookingForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    countryCode: '+91',
    travelDate: null,
    travellers: 1,
    message: '',
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDateChange = (date: Date | null) => {
    setFormData({ ...formData, travelDate: date });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(formData);
    // Add your form submission logic here
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto bg-white rounded-lg mt-0"
    >

      <div className="form-field mb-4">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="input w-full px-4 py-2 border-line rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      <div className="form-field mb-4">
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="input w-full px-4 py-2 border-line rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      <div className="form-field mb-4 flex">
        <select
          name="countryCode"
          value={formData.countryCode}
          onChange={handleChange}
          className="input w-1/4 mr-2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        >
          {countryCodes.map((country) => (
            <option key={country.code} value={country.code}>
              {country.code}
            </option>
          ))}
        </select>
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          className="input w-3/4 px-4 py-2 border-line rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>


      <div className="form-field mb-4 flex gap-2">
      <div className="form-field">
        <DatePicker
          selected={formData.travelDate}
          onChange={handleDateChange}
          placeholderText="Select Travel Date"
          className="w-full px-4 py-2 border-line rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          dateFormat="yyyy-MM-dd"
          required
        />
      </div>

      <div className="form-field">
        <input
          type="number"
          name="travellers"
          min="1"
          value={formData.travellers}
          onChange={handleChange}
          className="input w-full px-4 py-2 border-line rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
          placeholder="Travellers"
        />
      </div>
      </div>

      <div className="form-field mb-4">
        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          className="input w-full px-4 py-2 border-line rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows={4}
        ></textarea>
      </div>

      <div className="button-block mt-5">
        <button
          type="submit"
          className="button-main w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition"
        >
          Book Now
        </button>
      </div>
    </form>
  );
};

export default BookingForm;
